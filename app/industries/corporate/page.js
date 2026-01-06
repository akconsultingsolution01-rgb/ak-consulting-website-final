import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function CorporateEnterpriseOperationsPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Corporate & Enterprise Operations"
        description="Supporting large enterprises with structured workforce solutions, operational excellence, and scalable corporate support services."
        image="/images/industries/corporatehero.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Corporate and enterprise organizations operate at scale, requiring
            disciplined processes, skilled manpower, and operational consistency.
            AK Consulting Solution supports enterprise environments by delivering
            workforce and operational solutions aligned with governance, compliance,
            and performance standards.
          </p>
        </div>
      </section>

      {/* ================= 2. OPERATIONAL SERVICES ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Corporate Operational Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Administrative Operations"
              text="Office administration, documentation, coordination, and internal process support."
            />
            <ServiceCard
              title="Back-Office Management"
              text="Data processing, reporting, compliance tracking, and internal service operations."
            />
            <ServiceCard
              title="Shared Services Support"
              text="Centralized operational teams supporting multiple departments and locations."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. ENTERPRISE DELIVERY MODELS ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Enterprise Delivery Models
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ On-site enterprise support teams</li>
            <li>✔ Centralized shared service centers</li>
            <li>✔ Hybrid operational delivery models</li>
            <li>✔ Dedicated or managed service engagements</li>
          </ul>
        </div>
      </section>

      {/* ================= 4. PROCESS GOVERNANCE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Process Governance & Controls
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Process Mapping & Documentation</li>
            <li>Standard Operating Procedures (SOPs)</li>
            <li>Performance Metrics & Reporting</li>
            <li>Risk Identification & Mitigation</li>
            <li>Continuous Process Improvement</li>
          </ol>
        </div>
      </section>

      {/* ================= 5. COMPLIANCE & RISK ================= */}
      <section className="py-20 px-6 bg-[#1c2645]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Compliance & Risk Management
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our enterprise solutions are designed with compliance at the core,
            ensuring adherence to internal governance policies, labor laws,
            contractual obligations, and audit requirements.
          </p>
        </div>
      </section>

      {/* ================= 6. SCALE & TRANSFORMATION ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Scale & Operational Transformation
          </h2>
          <p className="text-lg text-gray-700">
            We support enterprises during growth, restructuring, and transformation
            phases by rapidly scaling operations while maintaining process stability
            and service quality.
          </p>
        </div>
      </section>

      {/* ================= 7. ENTERPRISE VALUE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Business Value for Enterprises
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Improved operational efficiency</li>
            <li>✔ Reduced overhead and operational risk</li>
            <li>✔ Consistent service delivery</li>
            <li>✔ Enhanced governance and transparency</li>
            <li>✔ Scalable operational frameworks</li>
          </ul>
        </div>
      </section>

      {/* ================= 8. WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Enterprise-focused delivery approach</li>
            <li>✔ Strong governance & reporting discipline</li>
            <li>✔ Experienced corporate operations teams</li>
            <li>✔ Scalable and flexible engagement models</li>
            <li>✔ Long-term partnership mindset</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-[#1c2645] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Strengthen Your Enterprise Operations
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Partner with AK Consulting Solution to build efficient,
            compliant, and scalable corporate operations.
          </p>

          <Link href="/contact">
            <button className="bg-white text-[#1c2645] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
