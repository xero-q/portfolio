import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Your message can not exceed 2000 characters.")
});

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const defineStatusPeriod = (status) => {
    setStatus(status);
  };

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

      const result = await res.json();
      setStatus(result.message);
      reset();
    } catch (err) {
      setStatus("Something went wrong.");
    } finally {
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <h3 className="mt-1">
        If you want to contact me for any job opportunity or inquiry, leave me a
        message
      </h3>

      <div>
        <label className="block text-sm font-medium">
          Name: <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          {...register("name")}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-blue-400 focus:border-blue-400"
        />
        {errors.name && (
          <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">
          Email: <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-blue-400 focus:border-blue-400"
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">
          Message: <span className="text-red-400">*</span>
        </label>
        <textarea
          rows={10}
          {...register("message")}
          className="resize-none mt-1 w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-blue-400 focus:border-blue-400"
        />
        {errors.message && (
          <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-blue-400 text-white cursor-pointer font-semibold rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status && <p className="text-sm text-center mt-2">{status}</p>}
    </form>
  );
}
