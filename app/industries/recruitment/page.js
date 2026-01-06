import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function RecruitmentIndustryPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Recruitment & Staffing Industry"
        description="End-to-end talent acquisition and workforce deployment solutions across India and global markets."
        image="/images/industries/recruitment.avif"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Recruitment and staffing form the foundation of business growth.
            AK Consulting Solution enables organizations to scale efficiently
            through structured hiring, workforce planning, and compliance-driven
            talent deployment.
          </p>
        </div>
      </section>

      {/* ================= 2. CORE SERVICES ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Core Recruitment Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Permanent Staffing"
              text="Full-cycle hiring solutions for long-term roles across functional and leadership levels."
            />
            <ServiceCard
              title="Contract & Temporary Staffing"
              text="Flexible workforce solutions for short-term, project-based, and seasonal requirements."
            />
            <ServiceCard
              title="Executive Search"
              text="Confidential leadership hiring with deep industry and role expertise."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. INDUSTRIES SERVED ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Industries Served
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>IT & Technology</span>
            <span>Manufacturing</span>
            <span>Healthcare</span>
            <span>BFSI</span>
            <span>Retail</span>
            <span>Logistics & Supply Chain</span>
          </div>
        </div>
      </section>

      {/* ================= 4. HIRING PROCESS ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Our Hiring Process
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Requirement Analysis & Skill Mapping</li>
            <li>Talent Sourcing & Market Mapping</li>
            <li>Screening & Candidate Evaluation</li>
            <li>Interview Coordination</li>
            <li>Offer Negotiation & Closure</li>
            <li>Onboarding & Documentation</li>
          </ol>
        </div>
      </section>

      {/* ================= 5. COMPLIANCE ================= */}
      <section className="py-20 px-6 bg-[#1c2645]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Compliance & Governance
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We strictly adhere to statutory regulations, labor laws, and
            contractual obligations, ensuring complete compliance and risk
            mitigation for our clients.
          </p>
        </div>
      </section>

      {/* ================= 6. TECHNOLOGY ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Technology-Driven Recruitment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our recruitment operations are powered by ATS platforms,
            real-time reporting, and data-driven hiring insights for
            improved turnaround time and quality.
          </p>
        </div>
      </section>

      {/* ================= 7. WHY US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Pan-India and global talent reach</li>
            <li>✔ Industry-specialized recruiters</li>
            <li>✔ Fast turnaround & scalable hiring</li>
            <li>✔ Ethical and transparent processes</li>
            <li>✔ Long-term client partnerships</li>
          </ul>
        </div>
      </section>

      {/* ================= 8. VALUE DELIVERED ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Business Value Delivered
          </h2>
          <p className="text-lg text-gray-700">
            Reduced hiring costs, faster closures, improved workforce quality,
            and long-term talent stability for growing organizations.
          </p>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-[#1c2645] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Build Your Workforce With Confidence
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Partner with AK Consulting Solution for reliable, scalable,
            and compliance-driven recruitment solutions.
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

/* ================= REUSABLE CARD ================= */
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
