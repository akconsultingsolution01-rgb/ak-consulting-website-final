import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function BPOIndustryPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="BPO / KPO / Customer Support Industry"
        description="Scalable, performance-driven customer support and knowledge process outsourcing solutions for domestic and global operations."
        image="/images/industries/bpo.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The BPO and KPO industry is a critical enabler of customer experience,
            operational efficiency, and business continuity. AK Consulting Solution
            delivers trained professionals across voice, non-voice, and knowledge
            process functions to support high-volume and specialized operations.
          </p>
        </div>
      </section>

      {/* ================= 2. SERVICE OFFERINGS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            BPO & KPO Service Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Voice Support"
              text="Inbound and outbound call center professionals trained for customer engagement and issue resolution."
            />
            <ServiceCard
              title="Non-Voice Operations"
              text="Email, chat, ticketing, and data processing support for digital-first businesses."
            />
            <ServiceCard
              title="Back-Office Processes"
              text="Transaction processing, documentation, reconciliation, and operational support services."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. DELIVERY MODELS ================= */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Flexible Delivery Models
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ On-site operational teams</li>
            <li>✔ Remote / work-from-home workforce</li>
            <li>✔ Hybrid delivery models</li>
            <li>✔ Dedicated or shared support teams</li>
          </ul>
        </div>
      </section>

      {/* ================= 4. HIRING & DEPLOYMENT ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Hiring & Deployment Process
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Process & SLA Requirement Assessment</li>
            <li>Candidate Sourcing & Communication Evaluation</li>
            <li>Skill & System Proficiency Screening</li>
            <li>Client Interview & Selection</li>
            <li>Training Readiness & Onboarding</li>
            <li>Go-Live & Performance Monitoring</li>
          </ol>
        </div>
      </section>

      {/* ================= 5. QUALITY & COMPLIANCE ================= */}
      <section className="py-20 px-6 bg-indigo-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quality & Compliance Assurance
          </h2>
          <p className="text-lg text-indigo-100 leading-relaxed">
            We follow structured QA frameworks, data security guidelines,
            and compliance standards to ensure service consistency,
            customer satisfaction, and operational integrity.
          </p>
        </div>
      </section>

      {/* ================= 6. INDUSTRIES SUPPORTED ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>Banking & Financial Services</span>
            <span>Telecom & ISP</span>
            <span>E-commerce & Retail</span>
            <span>Healthcare Services</span>
            <span>Travel & Hospitality</span>
            <span>Technology & SaaS</span>
          </div>
        </div>
      </section>

      {/* ================= 7. WHY US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Trained and process-ready professionals</li>
            <li>✔ Scalable workforce for peak volumes</li>
            <li>✔ Strong focus on customer experience</li>
            <li>✔ Data security & compliance driven approach</li>
            <li>✔ Domestic and international delivery expertise</li>
          </ul>
        </div>
      </section>

      {/* ================= 8. BUSINESS IMPACT ================= */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Business Impact Delivered
          </h2>
          <p className="text-lg text-gray-700">
            Improved customer satisfaction, reduced operational costs,
            faster turnaround times, and consistent service delivery
            across multiple customer touchpoints.
          </p>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-indigo-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Strengthen Your Customer Operations
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Partner with AK Consulting Solution for reliable,
            scalable, and quality-driven BPO & KPO solutions.
          </p>

          <Link href="/contact">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition">
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
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
