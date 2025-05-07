// components/ContactForm.js
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      setStatus("Something went wrong.", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
      >
        Send Message
      </button>

      {status && (
        <p className="text-sm text-center text-gray-600 mt-2">{status}</p>
      )}
    </form>
  );
}
