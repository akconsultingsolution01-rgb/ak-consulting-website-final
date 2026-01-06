import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function MSMEGovernmentProjectsPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="MSME & Government-Certified Projects"
        description="Delivering compliant, transparent, and execution-ready workforce and operational support for MSME, PSU, and government-certified initiatives."
        image="/images/industries/msme-government.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MSME and government-certified projects require strict compliance,
            documentation accuracy, and execution discipline. AK Consulting
            Solution supports public and private sector initiatives with
            certified processes, skilled manpower, and audit-ready operations.
          </p>
        </div>
      </section>

      {/* ================= 2. PROJECT SUPPORT SERVICES ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Project Support Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Manpower Deployment"
              text="Skilled and semi-skilled workforce deployment aligned with project scope and timelines."
            />
            <ServiceCard
              title="Operational Support"
              text="End-to-end operational assistance for execution, monitoring, and reporting."
            />
            <ServiceCard
              title="Project Coordination"
              text="On-ground coordination between stakeholders, vendors, and authorities."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. COMPLIANCE & CERTIFICATIONS ================= */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Compliance & Certifications
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ MSME registration & documentation support</li>
            <li>✔ Government tender compliance</li>
            <li>✔ Labor law & statutory adherence</li>
            <li>✔ Audit-ready documentation processes</li>
            <li>✔ Vendor & subcontractor compliance checks</li>
          </ul>
        </div>
      </section>

      {/* ================= 4. SECTORS SUPPORTED ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Sectors We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>Infrastructure & Utilities</span>
            <span>Public Sector Undertakings (PSUs)</span>
            <span>Smart City Projects</span>
            <span>Urban & Rural Development</span>
            <span>Skill Development Initiatives</span>
            <span>Government Outsourced Services</span>
          </div>
        </div>
      </section>

      {/* ================= 5. PROJECT EXECUTION MODEL ================= */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Project Execution Model
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Project Scope & Compliance Assessment</li>
            <li>Resource Planning & Mobilization</li>
            <li>Deployment & Execution Monitoring</li>
            <li>Reporting & Documentation</li>
            <li>Audit & Closure Support</li>
          </ol>
        </div>
      </section>

      {/* ================= 6. GOVERNANCE & RISK MANAGEMENT ================= */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Governance & Risk Management
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our governance framework ensures transparency, accountability,
            and risk mitigation across all government and MSME-certified
            projects, safeguarding stakeholder interests.
          </p>
        </div>
      </section>

      {/* ================= 7. WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Experience with government and PSU projects</li>
            <li>✔ Compliance-first operational approach</li>
            <li>✔ Strong documentation & reporting discipline</li>
            <li>✔ Reliable manpower sourcing</li>
            <li>✔ Ethical and transparent execution</li>
          </ul>
        </div>
      </section>

      {/* ================= 8. VALUE DELIVERED ================= */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Value Delivered to Stakeholders
          </h2>
          <p className="text-lg text-gray-700">
            On-time project delivery, reduced compliance risk, audit readiness,
            and dependable execution for mission-critical government initiatives.
          </p>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Execute Government Projects With Confidence
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Partner with AK Consulting Solution for compliant,
            transparent, and execution-ready project support.
          </p>

          <Link href="/contact">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

/* ================= CARD ================= */
function ServiceCard({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
