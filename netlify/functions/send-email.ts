// File path: netlify/functions/send-email.ts

import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import busboy from 'busboy';

// Helper function to parse multipart form data
const parseMultipartForm = (event: any) => {
  return new Promise((resolve, reject) => {
    const bb = busboy({ headers: event.headers });
    const fields: { [key: string]: string } = {};
    const files: { [key: string]: { filename: string; content: Buffer; contentType: string } } = {};

    bb.on('file', (name, file, info) => {
      const { filename, mimeType } = info;
      const chunks: Buffer[] = [];
      file.on('data', (chunk) => {
        chunks.push(chunk);
      });
      file.on('end', () => {
        files[name] = {
          filename,
          content: Buffer.concat(chunks),
          contentType: mimeType,
        };
      });
    });

    bb.on('field', (name, val) => {
      fields[name] = val;
    });

    bb.on('close', () => {
      resolve({ fields, files });
    });

    bb.on('error', err => {
      reject(err);
    });

    // Use Buffer.from to handle base64 encoding if necessary
    bb.end(Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'binary'));
  });
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // 1. Parse the form data, which now includes files
    const { fields, files }: any = await parseMultipartForm(event);

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Prepare email attachments from the parsed files
    const attachments = Object.values(files).map((file: any) => ({
      filename: file.filename,
      content: file.content,
      contentType: file.contentType,
    }));

    // 3. Create the email body text from the fields
    let emailBody = 'You have a new form submission:\n\n';
    for (const key in fields) {
      if (key !== 'form-name' && key !== 'bot-field') {
         emailBody += `${key}: ${fields[key]}\n`;
      }
    }

    const mailOptions = {
      from: `"${fields.name || 'Website Form'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: fields.email,
      subject: `New Application: ${fields.name} - ${fields.jobTitle || 'Property Consultant'}`,
      text: emailBody,
      attachments: attachments, // Add the attachments here
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Your application has been submitted successfully!' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while sending the message. Please try again.' }),
    };
  }
};