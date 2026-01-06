"use client";
import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: "", // home page has single name
      email: formData.get("email"),
      phone: "",
      company: "",
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setMsg("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      setMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-deep px-10">
      <h2 className="text-4xl mb-8">Contact Us</h2>

      <form onSubmit={submit} className="max-w-xl space-y-4">
        <input
          name="firstName"
          placeholder="Name"
          className="w-full p-3 text-black"
          required
        />


<input
  name="lastName"
  placeholder="Last Name"
  className="w-full p-3 text-black"
  required
/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 text-black"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 text-black"
          required
        />

        <button
          disabled={loading}
          className="bg-accent px-6 py-3 font-semibold disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {msg && <p className="text-green-400">{msg}</p>}
      </form>
    </section>
  );
}
