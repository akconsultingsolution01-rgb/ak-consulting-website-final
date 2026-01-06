import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function EducationEdTechOperationsPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Education, EdTech & Learning Operations"
        description="Supporting educational institutions and EdTech platforms with skilled manpower, operational support, and scalable learning solutions."
        image="/images/industries/education-edtech.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The education and EdTech ecosystem is rapidly evolving, driven by
            digital platforms, blended learning models, and operational scale.
            AK Consulting Solution supports institutions and learning providers
            with workforce and operational solutions that enable seamless
            academic and learning delivery.
          </p>
        </div>
      </section>

      {/* ================= 2. SERVICE OFFERINGS ================= */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Education & EdTech Support Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Academic Support Services"
              text="Teaching assistants, coordinators, evaluators, and academic operations staff."
            />
            <ServiceCard
              title="EdTech Platform Operations"
              text="Course management, content moderation, learner support, and platform operations."
            />
            <ServiceCard
              title="Student & Learner Support"
              text="Helpdesk, onboarding, counselling, and learner engagement teams."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. INSTITUTIONS WE SUPPORT ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Institutions & Platforms We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>Schools & Colleges</span>
            <span>Universities & Training Institutes</span>
            <span>EdTech Platforms & Startups</span>
            <span>Online Learning Providers</span>
            <span>Skill Development Centers</span>
            <span>Government Education Programs</span>
          </div>
        </div>
      </section>

      {/* ================= 4. DELIVERY MODELS ================= */}
      <section className="py-20 px-6 bg-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Learning Operations Delivery Models
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ On-campus academic and operational support</li>
            <li>✔ Remote and virtual learning operations</li>
            <li>✔ Hybrid classroom and online models</li>
            <li>✔ Centralized learning operations teams</li>
          </ul>
        </div>
      </section>

      {/* ================= 5. OPERATIONAL PROCESS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Education Operations Process
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Academic & Operational Requirement Analysis</li>
            <li>Resource Planning & Skill Alignment</li>
            <li>Training & Platform Familiarization</li>
            <li>Deployment & Academic Calendar Support</li>
            <li>Performance Monitoring & Reporting</li>
          </ol>
        </div>
      </section>

      {/* ================= 6. QUALITY & COMPLIANCE ================= */}
      <section className="py-20 px-6 bg-indigo-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quality, Compliance & Governance
          </h2>
          <p className="text-lg text-indigo-100 leading-relaxed">
            Our education and EdTech operations follow academic guidelines,
            data protection norms, learner privacy standards, and structured
            quality frameworks to ensure integrity and trust in learning delivery.
          </p>
        </div>
      </section>

      {/* ================= 7. VALUE DELIVERED ================= */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Value Delivered to Education Providers
          </h2>
          <p className="text-lg text-gray-700">
            Improved learner experience, operational scalability,
            reduced administrative burden, and seamless academic
            support across physical and digital learning environments.
          </p>
        </div>
      </section>

      {/* ================= 8. WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Experience across education & EdTech ecosystems</li>
            <li>✔ Skilled academic and platform-ready workforce</li>
            <li>✔ Scalable learning operations support</li>
            <li>✔ Strong focus on quality and compliance</li>
            <li>✔ Reliable long-term partnership approach</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-indigo-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enable Scalable Learning Operations
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Partner with AK Consulting Solution to support
            education delivery and EdTech operations with confidence.
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
