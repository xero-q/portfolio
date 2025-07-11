import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emojiRegex from "emoji-regex";
import React from "react";

const regexEmoji = emojiRegex();
const regexLettersSpaces = /^[\p{L} ]+$/u;

export default function ContactForm({ t }) {
  const [status, setStatus] = useState("");

  const contactSchema = z.object({
    name: z
      .string({ required_error: t.contact.name_required })
      .min(1, t.contact.name_required)
      .max(100)
      .refine((val) => !regexEmoji.test(val), {
        message: t.contact.emojis_not_allowed
      })
      .refine((val) => regexLettersSpaces.test(val), {
        message: t.contact.only_letters_spaces_allowed
      }),
    email: z
      .string({ required_error: t.contact.email_required })
      .min(1, t.contact.email_required)
      .max(300)
      .email(t.contact.email_invalid),
    subject: z
      .string({ required_error: t.contact.subject_required })
      .min(1, t.contact.subject_required)
      .max(300)
      .refine((val) => !regexEmoji.test(val), {
        message: t.contact.emojis_not_allowed
      }),
    message: z
      .string({ required_error: t.contact.message_required })
      .min(1, t.contact.message_required)
      .max(2000)
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus(t.contact.success);
        reset();
      } else {
        setStatus(t.contact.error);
      }
    } catch (err) {
      setStatus(t.contact.error);
    } finally {
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="w-full flex justify-center mx-auto p-4 lg:p-6 border border-gray-600 rounded-2xl shadow-[0_0_20px_rgba(100,100,100,0.4)] lg:max-w-[1390px]">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl">
        <h2 className="text-3xl font-semibold">{t.contact.header}</h2>
        <h3 className="mt-1">{t.contact.body}</h3>

        <div>
          <label className="block text-sm font-medium" htmlFor="name">
            {t.contact.name} <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            aria-describedby="error-name"
            {...register("name")}
            maxLength={100}
            className="mt-1 w-full border border-blue-200 rounded-md shadow-sm p-1 focus:border-blue-400 focus:outline-none focus:ring-0"
          />
          {errors.name && (
            <p className="text-sm text-red-400 mt-1" id="error-name">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="email">
            {t.contact.email} <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("email")}
            id="email"
            aria-describedby="error-email"
            maxLength={300}
            className="mt-1 w-full border border-blue-200 rounded-md shadow-sm p-1 focus:border-blue-400 focus:outline-none focus:ring-0"
          />
          {errors.email && (
            <p className="text-sm text-red-400 mt-1" id="error-email">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="subject">
            {t.contact.subject} <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("subject")}
            id="subject"
            aria-describedby="error-subject"
            maxLength={300}
            className="mt-1 w-full border border-blue-200 rounded-md shadow-sm p-1 focus:border-blue-400 focus:outline-none focus:ring-0"
          />
          {errors.subject && (
            <p className="text-sm text-red-400 mt-1" id="error-subject">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="message">
            {t.contact.message}
            <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={10}
            {...register("message")}
            id="message"
            aria-describedby="error-message"
            maxLength={2000}
            className="resize-none mt-1 w-full border border-blue-200 rounded-md shadow-sm p-1 focus:border-blue-400 focus:outline-none focus:ring-0"
          />
          {errors.message && (
            <p className="text-sm text-red-400 mt-1" id="error-message">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-400 text-white cursor-pointer font-semibold rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {isSubmitting ? t.contact.sending : t.contact.submit}
        </button>

        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}
