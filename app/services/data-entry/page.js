"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ================= SLIDER DATA ================= */
const sliderItems = [
  {
    src: "/images/dataentry/structured-entry.png",
    title: "Structured Data Entry",
    desc: "Systematic data input with defined formats and quality checks.",
  },
  {
    src: "/images/dataentry/validation.png",
    title: "Data Validation & Accuracy",
    desc: "Multi-level verification ensuring consistency and integrity.",
  },
  {
    src: "/images/dataentry/dris-matrimonial.png",
    title: "DRIS Matrimonial Data Project",
    desc: "Large-scale structured personal data processing with validation.",
  },
];

export default function DataEntryServicesPage() {
  const sliderRef = useRef(null);

  /* AUTO SCROLL */
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!slider) return;
      scrollAmount += 0.4;
      slider.scrollLeft = scrollAmount;
      if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#1c2645] text-white w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="w-full py-28 bg-gradient-to-r from-[#1c2645] to-[#16203a]">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Data Entry & Data Processing Services
            </h1>

            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              Accurate, structured, and confidential data handling services
              designed for large-scale operational projects.
            </p>

            <p className="text-gray-400 max-w-xl">
              AK Consulting Solution delivers secure data entry, validation,
              and record management through trained professionals and
              quality-driven execution.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/dataentry/hero.png"
              alt="Data Entry Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-12">
            Our Data Entry Capabilities
          </h2>

          <div ref={sliderRef} className="flex gap-8 overflow-x-hidden">
            {[...sliderItems, ...sliderItems].map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] bg-[#243056] rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-gray-300 mb-4">
              Our data entry operations focus on accuracy, confidentiality,
              and efficiency using structured workflows and quality checks.
            </p>
            <p className="text-gray-300">
              We handle high-volume structured data projects under strict
              confidentiality and compliance standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Structured Data Entry",
              "Data Validation & Verification",
              "Record Maintenance",
              "Quality-Controlled Submissions",
            ].map((item, i) => (
              <div key={i} className="bg-[#243056] rounded-xl p-6">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES SERVED ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <span>Government & Public Records</span>
            <span>Real Estate & Infrastructure</span>
            <span>Matrimonial & Citizen Databases</span>
            <span>BFSI & Financial Services</span>
            <span>Healthcare Records</span>
            <span>Education & Examination Boards</span>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">Our Execution Process</h2>

          <ol className="grid md:grid-cols-2 gap-6 text-gray-300">
            <li>Requirement & Data Format Analysis</li>
            <li>Secure Data Allocation</li>
            <li>Trained Operator Entry</li>
            <li>Multi-Level Quality Checks</li>
            <li>Client Review & Corrections</li>
            <li>Final Submission & Archival</li>
          </ol>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-6">
            Data Security & Confidentiality
          </h2>
          <p className="text-gray-300 max-w-3xl">
            We follow strict access controls, role-based permissions,
            secure infrastructure, and confidentiality agreements
            to protect sensitive data at every stage.
          </p>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Proven experience in large-scale data projects</li>
            <li>✔ Trained and monitored data entry workforce</li>
            <li>✔ Strong confidentiality & compliance standards</li>
            <li>✔ Quality-focused execution</li>
            <li>✔ Scalable delivery capacity</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">
            Need Reliable Data Entry Support?
          </h3>
          <p className="mb-10 text-white/90">
            Talk to our experts about secure, scalable, and accurate
            data processing solutions.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
