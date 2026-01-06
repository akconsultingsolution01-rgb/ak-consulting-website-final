"use client";

import { useState } from "react";

const industries = [
  {
    title: "Healthcare",
    description:
      "AI-powered healthcare solutions improving patient engagement, diagnostics, compliance, and operational efficiency.",
  },
  {
    title: "Agriculture",
    description:
      "Smart agriculture solutions using AI, data analytics, and automation to improve productivity and sustainability.",
  },
  {
    title: "Education",
    description:
      "Digital learning platforms, workforce training programs, and scalable education technology solutions.",
  },
  {
    title: "Manufacturing",
    description:
      "Industry 4.0 solutions enabling automation, predictive maintenance, and operational intelligence.",
  },
  {
    title: "Civic Technology",
    description:
      "AI-driven civic platforms improving governance, citizen engagement, and transparent public services.",
  },
  {
    title: "Government & Public Sector",
    description:
      "Large-scale government program execution with compliance, transparency, and digital transformation.",
  },
  {
    title: "BFSI",
    description:
      "Secure digital banking, fraud detection, analytics, and customer experience solutions.",
  },
  {
    title: "Telecom",
    description:
      "Telecom operations optimization, customer lifecycle management, and AI-enabled network intelligence.",
  },
];

export default function IndustriesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[75vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/industries/industries-hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Industries We Serve
          </h1>

          <p className="text-gray-200 max-w-xl mb-8">
            Delivering workforce, AI, data, and operational solutions
            tailored to diverse industry needs.
          </p>

          <a
            href="#industries"
            className="inline-block border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Know More
          </a>
        </div>
      </section>

      {/* ================= INDUSTRIES ACCORDION ================= */}
      <section id="industries" className="py-24">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-md mb-10">
              We partner with organizations across sectors to deliver
              scalable workforce, AI-driven systems, and digital operations.
            </p>

            <img
              src="/images/industries/industries.png"
              alt="Industries"
              className="w-48"
            />
          </div>

          <div className="border-t">
            {industries.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b py-6">
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium">
                      {item.title}
                    </span>
                    <span className="text-2xl">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-gray-600 max-w-xl">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DELIVER ================= */}
      <section className="bg-[#f5f7fa] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            What We Deliver Across Industries
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Workforce Planning & Execution",
              "AI & Data-Driven Platforms",
              "Process Automation",
              "Compliance & Governance",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-10">
            Our Engagement Models
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project-Based Delivery",
                desc: "End-to-end execution of defined programs and initiatives.",
              },
              {
                title: "Managed Services",
                desc: "Ongoing operational and technology management support.",
              },
              {
                title: "Dedicated Teams",
                desc: "Embedded teams aligned with your organizational goals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-lg p-6"
              >
                <h4 className="font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="bg-[#eef4e7] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Technology & Platforms
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "AI & Machine Learning",
              "GIS & Spatial Systems",
              "Cloud & Data Platforms",
              "Workflow Automation",
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="bg-[#eef4e7] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Case Studies
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "AI-powered Legislative System",
              "E-Governance Digital Platform",
              "Smart Workforce Deployment",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h4 className="font-semibold text-lg">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#fdecea] py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center px-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Schedule a 30 min consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Let’s discuss how our industry-specific solutions can help
              your organization scale effectively.
            </p>

            <a
              href="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Contact Us
            </a>
          </div>

          <div className="hidden md:block">
            <img
              src="/images/industries/consulting.png"
              alt="Consultation"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
