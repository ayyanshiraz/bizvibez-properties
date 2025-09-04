// File: src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from the .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(request: NextRequest) {
  try {
    // Parse the request body as JSON
    const body = await request.json();
    const { fullName, email, subject, message } = body;

    // Check for missing fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Required by Resend for testing
      to: toEmail!,
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email, // Set the sender's email as the reply-to address
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Error from Resend:", error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}