import React from "react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5500/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setSuccess(data.success);

      if (data.success) {
        setForm(initialForm);
      }
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold  mb-4">Contact me</h2>
        <p className="text-my-muted-foreground">
          Have a question or want to work together? Let’s connect!
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
        >
          <input
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Name"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md bg-my-background text-zinc-200 border border-my-muted outline-none focus:ring-1 focus:ring-my-gold"
          />
          <input
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Email"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md bg-my-background text-zinc-200 border border-my-muted outline-none focus:ring-1 focus:ring-my-gold"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows="5"
            placeholder="Message"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md bg-my-background text-zinc-200 border border-my-muted outline-none focus:ring-1 focus:ring-my-gold resize-none"
          ></textarea>

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-minor-cards py-3 rounded-md mt-4 shadow-innerShadow font-semibold transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
