import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import { escapeHTML } from "@/lib/functions";
import emojiRegex from "emoji-regex";

const regexLettersSpaces = /^[\p{L} ]+$/u;
const regexEmoji = emojiRegex();

const contactSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(100)
    .refine((val) => !regexEmoji.test(val), { message: "No emojis" })
    .refine((val) => regexLettersSpaces.test(val), {
      message: "Only letters and spaces",
    }),
  email: z.string().email().max(300),
  subject: z.string().min(1).max(300),
  message: z.string().min(1).max(2000),
});

export async function POST(req: Request) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid or empty JSON body" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  const sanitizedName = escapeHTML(name);
  const sanitizedEmail = escapeHTML(email);
  const sanitizedSubject = escapeHTML(subject);
  const sanitizedMessage = escapeHTML(message);

  // ⚠️ Transporter fuera del try para no recrearlo siempre
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 🚀 RESPONDE RÁPIDO
  NextResponse.json({ ok: true });

  // 🔥 background job
  transporter
    .sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New message from ${sanitizedName}`,
      html: `
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>Message:</strong> ${sanitizedMessage}</p>
      `,
    })
    .catch((err) => {
      console.error("MAIL ERROR:", err);
    });

  return NextResponse.json({ message: "Message queued" });
}
