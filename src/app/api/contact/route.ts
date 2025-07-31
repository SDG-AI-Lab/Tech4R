import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // DEBUG LOGS (remove or keep as needed)
    console.log('Contact form data:', { name, email, message });
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('CONTACT_RECEIVER_EMAIL:', process.env.CONTACT_RECEIVER_EMAIL);

    // BEFORE DEPLOYMENT / WHEN SWITCHING EMAIL PROVIDERS:
    // Make sure to update the .env.local file at the project root with the appropriate SMTP settings:
    // - SMTP_HOST (e.g., smtp.gmail.com, smtp.ionos.com, smtp.office365.com, etc.)
    // - SMTP_PORT (usually 465 for SSL or 587 for TLS)
    // - SMTP_USER (the appropriate domain email, e.g., contact@tech4r.com)
    // - SMTP_PASS (the appropriate App Password or SMTP password, stored in .env.local)
    //
    // Make sure CONTACT_RECEIVER_EMAIL is also set to the appropriate destination inbox.


    // Create a nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,     
        pass: process.env.SMTP_PASS,     
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,                  // shows sender as user input
      to: process.env.CONTACT_RECEIVER_EMAIL,        // who receives the message
      subject: `Tech4R: New message from ${name}`,
      text: `
        You've received a new message from the Tech4R contact form:

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    });

    console.log('Email sent');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
