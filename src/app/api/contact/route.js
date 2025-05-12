import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import { escapeHTML } from "@/lib/functions";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Your name can not exceed 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .max(300, "Your email can not exceed 300 characters")
    .email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(300, "Your subject can not exceed 300 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Your message can not exceed 2000 characters.")
});

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = await req.json();

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten() },
      { status: 400 }
    );
  }

  const validatedData = result.data;

  const { name, email, subject, message } = validatedData;

  const sanitizedName = escapeHTML(name),
    sanitizedEmail = escapeHTML(email),
    sanitizeSubject = escapeHTML(subject),
    sanitizedMessage = escapeHTML(message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from ${sanitizedName}`,
      text: message,
      html: `<p><strong>Name:</strong> ${sanitizedName}</p>
             <p><strong>Email:</strong> ${sanitizedEmail}</p>
             <p><strong>Subject:</strong> ${sanitizeSubject}</p>
             <p><strong>Message:</strong> ${sanitizedMessage}</p>`
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
