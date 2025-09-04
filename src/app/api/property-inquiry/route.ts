// File: src/app/api/property-inquiry/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Add propertyTitle to the destructured object
    const { fullName, email, phone, message, propertyTitle } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Use the propertyTitle in the subject for better context
    const subject = `New Inquiry for ${propertyTitle || 'Property'} from ${fullName}`;

    const { data, error } = await resend.emails.send({
      from: 'Property Inquiry <onboarding@resend.dev>',
      to: toEmail!,
      replyTo: email,
      subject: subject,
      html: `
        <h1>New Property Inquiry</h1>
        <p>You have received a new inquiry from your website.</p>
        <hr>
        <p><strong>Property:</strong> ${propertyTitle || 'Not specified'}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: 'Failed to send inquiry.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Inquiry sent successfully!' }, { status: 200 });

  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}