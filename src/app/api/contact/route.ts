import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_USER,     
        pass: process.env.SMTP_PASS,     
      },
    } as SMTPTransport.Options);

    await transporter.sendMail({
      from: process.env.CONTACT_SENDER_EMAIL,
      replyTo: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
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
