"use client";

import Image from "next/image";

export default function CustomerExperience() {
  return (
    <main className="bg-[#1c2645] text-white">

      {/* ================= FULL-WIDTH HERO ================= */}
      <section className="relative w-full min-h-[75vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/customer/hero-bg.png"   // add a wide banner image
          alt="Customer Experience Background"
          fill
          priority
          className="object-cover opacity-30"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2645]/95 to-[#1c2645]/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Customer Experience & <br /> Process Support
            </h1>

            <p className="text-xl text-gray-200 mb-6 max-w-xl">
              Delivering seamless customer journeys with reliable operational excellence.
            </p>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              AK Consulting Solution helps organizations enhance customer satisfaction
              and streamline internal processes through trained professionals,
              structured workflows, and quality-driven execution.
            </p>
          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="bg-[#243056]/90 backdrop-blur rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-8">
              CX Services We Handle
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Voice & Non-Voice Support</li>
              <li>✔ CRM & Ticketing Operations</li>
              <li>✔ Email, Chat & Messaging</li>
              <li>✔ Back-Office Processing</li>
              <li>✔ SLA-Based Resolution</li>
              <li>✔ Quality & Compliance Monitoring</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <Image
            src="/images/customer/what-is-cx.png"
            alt="What is Customer Experience"
            width={520}
            height={360}
            className="rounded-xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              What is Customer Experience & Process Support?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Customer Experience & Process Support focuses on managing customer
              interactions while ensuring internal operations run smoothly,
              efficiently, and in compliance with defined service standards.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-14">
            Our CX & Process Support Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Customer Query Handling",
              "Voice & Non-Voice Support",
              "Back-Office Operations",
              "Verification & Validation",
              "SLA-Based Service Delivery",
              "Escalation Management",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#243056] rounded-xl p-8 hover:bg-[#2c3a6a] transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Customer Interaction Channels
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Voice Support (Inbound / Outbound)</li>
              <li>✔ Email Support</li>
              <li>✔ Chat & Messaging</li>
              <li>✔ CRM & Ticketing Systems</li>
              <li>✔ Non-Voice Process Support</li>
            </ul>
          </div>

          <Image
            src="/images/customer/channels.png"
            alt="Customer Channels"
            width={520}
            height={360}
            className="rounded-xl shadow-xl"
          />

        </div>
      </section>

      {/* ================= SECTION 5 ================= */}
      <section className="py-28 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <Image
            src="/images/customer/process-support.png"
            alt="Process Support"
            width={520}
            height={360}
            className="rounded-xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Process Support Capabilities
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our teams manage backend workflows including data handling,
              document processing, validations, reporting, and operational coordination.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 6 ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Quality & Compliance Focus
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ SOP adherence</li>
              <li>✔ Regular quality audits</li>
              <li>✔ Error reduction analysis</li>
              <li>✔ Continuous improvement</li>
              <li>✔ Confidential data handling</li>
            </ul>
          </div>

          <Image
            src="/images/customer/quality-compliance.png"
            alt="Quality Compliance"
            width={520}
            height={360}
            className="rounded-xl shadow-xl"
          />

        </div>
      </section>

      {/* ================= SECTION 7 ================= */}
      <section className="py-28 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <Image
            src="/images/customer/tools.png"
            alt="CX Tools"
            width={520}
            height={360}
            className="rounded-xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Technology & Tools
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We work with CRM platforms, ticketing tools, workflow systems,
              cloud-based dashboards, and reporting tools to ensure transparency.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 8 ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-14">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            {["IT & ITES","E-commerce & Retail","Telecom","BFSI","Logistics","Government & MSMEs"].map((i) => (
              <div key={i} className="bg-[#243056] p-8 rounded-xl">
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 9 ================= */}
      <section className="py-28 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Business Benefits
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Improved customer satisfaction</li>
              <li>✔ Faster turnaround time</li>
              <li>✔ Operational accuracy</li>
              <li>✔ Scalable support models</li>
              <li>✔ Cost optimization</li>
            </ul>
          </div>

          <Image
            src="/images/customer/business-benefits.png"
            alt="Business Benefits"
            width={520}
            height={360}
            className="rounded-xl shadow-xl"
          />

        </div>
      </section>

      {/* ================= SECTION 10 ================= */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-10 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose AK Consulting Solution?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We combine process expertise, trained resources, and compliance-driven
            execution to deliver dependable CX & Process Support services across PAN India.
          </p>
        </div>
      </section>

    </main>
  );
}
