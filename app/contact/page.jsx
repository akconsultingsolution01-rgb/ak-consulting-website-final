"use client";

import { useRef, useState } from "react";

export default function ContactPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  const formData = new FormData(formRef.current);

  const payload = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"), 
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed");

    setSuccess(true);
    formRef.current.reset();
  } catch (err) {
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img
          src="/images/contact/your-hero-image.jpg"
          alt="Contact AK Consulting Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Talk About Your Project
          </h1>
          <p className="text-gray-200 max-w-xl">
            Request a free consultation and discover how AK Consulting
            Solutions can support your business growth.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-xl font-semibold mb-8">Get in touch</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Email Us</p>
              <p className="text-blue-600 font-medium">
                info@akconsultingsolution.in
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Call Us</p>
              <p className="font-medium">+91 6301185730</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-xl font-semibold mb-10">
            Submit your project inquiry
          </h2>

          {success && (
            <p className="mb-6 text-green-600 font-medium">
              Thank you! Your message has been sent successfully.
            </p>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <input
              type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="border-b border-black py-2 focus:outline-none"
              />
              <input
              type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="border-b border-black py-2 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border-b border-black py-2 focus:outline-none"
              />
              <input
                name="phone"
                placeholder="Phone"
                className="border-b border-black py-2 focus:outline-none"
              />
            </div>

            <input
              name="company"
              placeholder="Company"
              className="border-b border-black py-2 focus:outline-none w-full"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              required
              className="border-b border-black py-2 focus:outline-none w-full resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-14 py-3 font-semibold hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
