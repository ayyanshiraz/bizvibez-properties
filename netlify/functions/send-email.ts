// File path: netlify/functions/send-email.ts

import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // 1. Check for the POST method
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 2. Parse the form data
  const { fullName, email, subject, message } = JSON.parse(event.body || '{}');

  // 3. Set up the email transporter using environment variables
  //    (You will set these in the Netlify UI)
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // For Outlook/Microsoft 365
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your info@... email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  // 4. Define the email options
  const mailOptions = {
    from: `"${fullName}" <${process.env.EMAIL_USER}>`, // Use your own email as the sender
    to: process.env.EMAIL_USER, // Send the email to yourself (info@...)
    replyTo: email, // Set the user's email as the reply-to address
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have a new message from:\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // 5. Send the email and return a response
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Your query has been submitted successfully!' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while sending the message. Please try again.' }),
    };
  }
};