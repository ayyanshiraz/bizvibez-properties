// File path: netlify/functions/send-email.ts

import { Handler, HandlerEvent } from '@netlify/functions';
import nodemailer from 'nodemailer';
import busboy from 'busboy';

// This is the parser for forms WITH file uploads
const parseMultipartForm = (event: HandlerEvent) => {
  return new Promise((resolve, reject) => {
    const bb = busboy({ headers: event.headers });
    const fields: { [key: string]: string } = {};
    const files: { [key: string]: { filename: string; content: Buffer; contentType: string } } = {};

    bb.on('file', (name, file, info) => {
      const { filename, mimeType } = info;
      const chunks: Buffer[] = [];
      file.on('data', (chunk) => chunks.push(chunk));
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

    bb.on('close', () => resolve({ fields, files }));
    bb.on('error', (err) => reject(err));

    bb.end(Buffer.from(event.body || '', event.isBase64Encoded ? 'base64' : 'binary'));
  });
};


export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    let fields: any;
    let files: any = {};
    const contentType = event.headers['content-type'] || '';

    // --- SMART PARSING LOGIC ---
    // Check if the form is multipart (has files) or json (simple text)
    if (contentType.includes('multipart/form-data')) {
        const parsed = await parseMultipartForm(event) as any;
        fields = parsed.fields;
        files = parsed.files;
    } else {
        // This handles the simple contact form
        fields = JSON.parse(event.body || '{}');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = Object.values(files).map((file: any) => ({
      filename: file.filename,
      content: file.content,
      contentType: file.contentType,
    }));
    
    // Create a flexible email body
    let emailBody = 'You have a new form submission:\n\n';
    for (const key in fields) {
      // Use more descriptive names from the form
      const fieldName = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      if (key !== 'form-name' && key !== 'bot-field') {
         emailBody += `${fieldName}: ${fields[key]}\n`;
      }
    }

    const mailOptions = {
      from: `"${fields.fullName || fields.name || 'Website Form'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: fields.email,
      subject: fields.jobTitle ? `New Application: ${fields.name}` : `New Contact Form: ${fields.subject}`,
      text: emailBody,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    
    // Determine the success message based on which form was submitted
    const successMessage = fields.jobTitle 
        ? 'Your application has been submitted successfully!'
        : 'Your query has been submitted successfully!';

    return {
      statusCode: 200,
      body: JSON.stringify({ message: successMessage }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while sending the message. Please try again.' }),
    };
  }
};