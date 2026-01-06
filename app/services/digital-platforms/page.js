import IndustryHero from "@/components/IndustryHero";
import Link from "next/link";

export default function DigitalPlatforms() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        label="Services"
        title="Digital Platforms & Technologies"
        description="Technology-enabled solutions that streamline operations, improve efficiency, and enable scalable digital transformation."
        image="/images/digitalplatform/digital.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AK Consulting Solution helps organizations adopt and operate
            digital platforms that improve visibility, control, and execution.
            Our digital services focus on workflow automation, system integration,
            and data-driven operations to support business growth and efficiency.
          </p>
        </div>
      </section>

      {/* ================= 2. CORE CAPABILITIES ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-10">
            Core Digital Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Workflow Automation",
                desc: "Digitized workflows that reduce manual effort and improve operational consistency."
              },
              {
                title: "Platform Operations Support",
                desc: "End-to-end operational support for digital platforms and enterprise systems."
              },
              {
                title: "System Integration",
                desc: "Seamless integration between tools, platforms, and enterprise applications."
              },
              {
                title: "Data Management & Reporting",
                desc: "Structured data processing, dashboards, and performance reporting."
              },
              {
                title: "Digital Compliance Enablement",
                desc: "Technology-supported compliance tracking and audit readiness."
              },
              {
                title: "Process Digitization",
                desc: "Conversion of manual processes into scalable digital execution models."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#1c2645] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. TECHNOLOGY STACK ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Technology Stack & Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-lg text-gray-700">
            <span>ERP & CRM Platforms</span>
            <span>Workflow Automation Tools</span>
            <span>Cloud-Based Applications</span>
            <span>Data Analytics & BI Tools</span>
            <span>Document Management Systems</span>
            <span>Collaboration & Productivity Tools</span>
          </div>
        </div>
      </section>

      {/* ================= 4. DELIVERY MODELS ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Digital Service Delivery Models
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ On-site digital operations teams</li>
            <li>✔ Remote & virtual platform support</li>
            <li>✔ Hybrid service delivery models</li>
            <li>✔ Managed digital operations</li>
          </ul>
        </div>
      </section>

      {/* ================= 5. IMPLEMENTATION PROCESS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Digital Implementation Process
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Digital Readiness & Requirement Assessment</li>
            <li>Platform Selection & Architecture Planning</li>
            <li>Configuration & Integration</li>
            <li>User Enablement & Training</li>
            <li>Go-Live Support & Optimization</li>
          </ol>
        </div>
      </section>

      {/* ================= 6. SECURITY & GOVERNANCE ================= */}
      <section className="py-20 px-6 bg-[#1c2645]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Security, Governance & Compliance
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Our digital platforms follow enterprise-grade security standards,
            data protection protocols, access controls, and governance frameworks
            to ensure confidentiality, integrity, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* ================= 7. BUSINESS IMPACT ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-6">
            Business Impact Delivered
          </h2>
          <p className="text-lg text-gray-700">
            Improved process efficiency, faster decision-making,
            enhanced visibility, reduced operational risks,
            and scalable digital execution across functions.
          </p>
        </div>
      </section>

      {/* ================= 8. WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Business-aligned digital solutions</li>
            <li>✔ Strong operational execution capability</li>
            <li>✔ Secure & compliant digital frameworks</li>
            <li>✔ Scalable platform support models</li>
            <li>✔ Long-term digital partnership approach</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-[#1c2645] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Accelerate Your Digital Transformation
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Partner with AK Consulting Solution to implement and operate
            digital platforms that drive efficiency and growth.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-[#1c2645] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
