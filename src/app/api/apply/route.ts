// File: src/app/api/apply/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(request: NextRequest) {
  try {
    // The browser's `FormData` sends the data as `multipart/form-data`
    // We need to parse it to get the fields and the file.
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File;

    if (!resume) {
        return NextResponse.json({ error: 'Resume file is required.' }, { status: 400 });
    }

    // Convert the resume file into a Buffer to be sent as an attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Career Application <onboarding@resend.dev>', // Resend requires this format
      to: toEmail!, // The email you set up in .env.local
      subject: `New Job Application: Property Consultant - ${name}`,
      replyTo: email, // Set the applicant's email as the reply-to
      html: `
        <h1>New Application for Property Consultant</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
        <hr>
        <h2>Cover Letter:</h2>
        <p>${coverLetter.replace(/\n/g, '<br>')}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    if (error) {
      console.error("Error from Resend:", error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });

  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}