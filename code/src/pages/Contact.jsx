import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const respone = await emailjs.sendForm(
        "service_gdd0wnh",
        "template_ly080nr",
        form.current,
        { publicKey: "nIU4RmUQafno-gg4d" }
      );
      console.log("Message sent successfully", respone);
      alert("Thank you for your message!");
      setFormData(initialForm);
    } catch (err) {
      console.log("Failed to send message", err);
      alert("Something went wrong, please try again.");
    } finally {
      setSending(false);
    }
  };
  return (
    <section className="max-w-3xl mx-auto py-20 px-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            name="name"
            placeholder="Enter Your Name"
            className="w-full p-3 border-2 border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            name="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border-2 border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            name="message"
            placeholder="Enter Your Message"
            className="text-black w-full p-3 border-2 border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
