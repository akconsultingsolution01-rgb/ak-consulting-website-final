import IndustryHero from "@/components/IndustryHero";
import Link from "next/link";

export default function WorkforceStaffing() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        label="Services"
        title="Workforce & Staffing Solutions"
        description="End-to-end staffing solutions delivering skilled, scalable, and compliant workforce across industries and geographies."
        image="/images/workforce/workforce-staffing.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AK Consulting Solution provides comprehensive workforce and staffing
            services to support organizations across India. From sourcing and
            screening to onboarding and deployment, we manage the complete
            workforce lifecycle with a focus on quality, compliance, and scale.
          </p>
        </div>
      </section>

      {/* ================= 2. SERVICES ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-10">
            Our Staffing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Permanent Staffing",
                desc: "Full-time hiring solutions aligned with long-term organizational goals.",
              },
              {
                title: "Contract & Temporary Staffing",
                desc: "Flexible manpower solutions for projects, peak demand, and seasonal needs.",
              },
              {
                title: "Bulk & Mass Hiring",
                desc: "Rapid hiring capabilities for large-scale workforce deployment.",
              },
              {
                title: "IT & Technical Staffing",
                desc: "Specialized talent for IT, engineering, and technology-driven roles.",
              },
              {
                title: "Non-IT & Operational Staffing",
                desc: "Manpower support for operations, field services, and support functions.",
              },
              {
                title: "Payroll & Compliance Management",
                desc: "Statutory-compliant payroll processing and workforce administration.",
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

      {/* ================= 3. PROCESS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Our Staffing Process
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Requirement Analysis & Workforce Planning</li>
            <li>Talent Sourcing & Candidate Screening</li>
            <li>Skill Evaluation & Background Verification</li>
            <li>Client Interviews & Selection</li>
            <li>Offer Management & Documentation</li>
            <li>Onboarding, Deployment & Support</li>
          </ol>
        </div>
      </section>

      {/* ================= 4. INDUSTRIES ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-lg text-gray-700">
            <span>Information Technology</span>
            <span>BFSI & Financial Services</span>
            <span>Healthcare</span>
            <span>Manufacturing</span>
            <span>Retail & E-commerce</span>
            <span>Logistics & Supply Chain</span>
            <span>BPO / KPO</span>
            <span>Education & EdTech</span>
            <span>Government & MSME Projects</span>
          </div>
        </div>
      </section>

      {/* ================= 5. DEPLOYMENT MODELS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-6">
            Workforce Deployment Models
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ On-site workforce deployment</li>
            <li>✔ Project-based staffing models</li>
            <li>✔ Centralized shared workforce pools</li>
            <li>✔ Hybrid and multi-location deployment</li>
          </ul>
        </div>
      </section>

      {/* ================= 6. COMPLIANCE ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-6">
            Compliance & Governance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our staffing operations strictly adhere to labor laws, statutory
            requirements, payroll compliance, and client governance standards,
            ensuring risk-free and transparent workforce management.
          </p>
        </div>
      </section>

      {/* ================= 7. BUSINESS VALUE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-6">
            Business Value Delivered
          </h2>
          <p className="text-lg text-gray-700">
            Faster hiring cycles, reduced operational overhead, workforce
            scalability, compliance assurance, and consistent talent quality
            across all business functions.
          </p>
        </div>
      </section>

      {/* ================= 8. WHY US ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c2645] mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ PAN India workforce reach</li>
            <li>✔ Large, verified talent network</li>
            <li>✔ Fast turnaround & scalable delivery</li>
            <li>✔ Compliance-first execution</li>
            <li>✔ Long-term partnership approach</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-[#1c2645] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Build a Reliable Workforce with Confidence
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Partner with AK Consulting Solution for dependable and scalable
            workforce & staffing solutions.
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
