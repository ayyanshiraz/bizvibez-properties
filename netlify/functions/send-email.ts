// File path: netlify/functions/send-email.ts

import { Handler, HandlerEvent } from '@netlify/functions';
import nodemailer from 'nodemailer';
import busboy from 'busboy';

// This is the parser for forms WITH file uploads (e.g., careers page)
const parseMultipartForm = (event: HandlerEvent): Promise<{ fields: any, files: any }> => {
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
        const parsed = await parseMultipartForm(event);
        fields = parsed.fields;
        files = parsed.files;
    } else {
        // This handles simple forms like Contact, Sell, and Property Inquiry
        fields = JSON.parse(event.body || '{}');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- DYNAMIC EMAIL & MESSAGE CONFIGURATION ---
    let subject = 'New Website Inquiry';
    let successMessage = 'Your message has been sent successfully!';
    
    // Customize subject and success message based on the form type
    switch (fields.formType) {
        case 'Property Inquiry':
            subject = `New Inquiry for Property: ${fields.propertyName}`;
            successMessage = 'Your inquiry has been submitted successfully! We will get back to you shortly.';
            break;
        case 'Seller Inquiry': // Assuming you add this formType to the SellPage form
            subject = `New Seller Lead from Website`;
            successMessage = 'Thank you for your submission! A representative will contact you soon.';
            break;
        case 'Career Application': // Assuming you add this to a careers form
             subject = `New Job Application: ${fields.jobTitle || 'N/A'}`;
             successMessage = 'Your application has been received. Thank you for your interest!';
             break;
        default:
            // This will handle the general contact form
            subject = `New Contact Form Message: ${fields.subject || 'No Subject'}`;
            break;
    }

    // Create a flexible email body
    let emailBody = 'You have a new form submission:\n\n';
    for (const key in fields) {
      // Don't include the formType in the email body
      if (key === 'formType') continue;
      
      const fieldName = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      emailBody += `${fieldName}: ${fields[key]}\n`;
    }

    const attachments = Object.values(files).map((file: any) => ({
      filename: file.filename,
      content: file.content,
      contentType: file.contentType,
    }));
    
    const mailOptions = {
      from: `"${fields.fullName || fields.name || 'Website Form'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Use a separate TO address if needed
      replyTo: fields.email,
      subject: subject,
      text: emailBody,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: successMessage }),
    };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while sending the message.', error: errorMessage }),
    };
  }
};
