import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function HealthcareSupportServicesPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Healthcare Support Services"
        description="Providing reliable, compliant, and skilled healthcare support services to hospitals, clinics, diagnostic centers, and healthcare organizations."
        image="/images/industries/healthcare-support.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Healthcare delivery depends on more than just clinical expertise.
            AK Consulting Solution provides essential healthcare support services
            that enable medical professionals to focus on patient care while
            maintaining operational efficiency, compliance, and service quality.
          </p>
        </div>
      </section>

      {/* ================= 2. SERVICE OFFERINGS ================= */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Healthcare Support Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Clinical Support Staff"
              text="Nursing assistants, ward attendants, and patient care support staff."
            />
            <ServiceCard
              title="Hospital Operations Support"
              text="Front desk, billing assistance, documentation, and administrative support."
            />
            <ServiceCard
              title="Diagnostic & Lab Support"
              text="Technicians and assistants for labs, diagnostics, and testing centers."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. HEALTHCARE FACILITIES SUPPORTED ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Healthcare Facilities We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>Hospitals & Multi-Specialty Clinics</span>
            <span>Diagnostic & Pathology Centers</span>
            <span>Nursing Homes & Care Facilities</span>
            <span>Medical Colleges & Institutes</span>
            <span>Home Healthcare Providers</span>
            <span>Public & Private Healthcare Units</span>
          </div>
        </div>
      </section>

      {/* ================= 4. STAFFING & DEPLOYMENT PROCESS ================= */}
      <section className="py-20 px-6 bg-teal-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Staffing & Deployment Process
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Requirement & Role Assessment</li>
            <li>Candidate Sourcing & Credential Verification</li>
            <li>Skill & Compliance Screening</li>
            <li>Client Approval & Onboarding</li>
            <li>Deployment & Ongoing Support</li>
          </ol>
        </div>
      </section>

      {/* ================= 5. COMPLIANCE & SAFETY ================= */}
      <section className="py-20 px-6 bg-teal-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Compliance, Safety & Ethics
          </h2>
          <p className="text-lg text-teal-100 leading-relaxed">
            Our healthcare support services strictly adhere to healthcare
            regulations, patient safety protocols, infection control standards,
            and ethical workforce practices to ensure safe and compliant operations.
          </p>
        </div>
      </section>

      {/* ================= 6. QUALITY ASSURANCE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Quality Assurance & Monitoring
          </h2>
          <p className="text-lg text-gray-700">
            Continuous monitoring, performance reviews, and feedback mechanisms
            ensure consistent service quality and alignment with healthcare
            operational standards.
          </p>
        </div>
      </section>

      {/* ================= 7. VALUE TO HEALTHCARE PROVIDERS ================= */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Value Delivered to Healthcare Providers
          </h2>
          <p className="text-lg text-gray-700">
            Improved patient experience, reduced operational burden,
            reliable staffing, regulatory compliance, and continuity
            of healthcare services.
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
            <li>✔ Healthcare-trained and verified staff</li>
            <li>✔ Compliance-first operational approach</li>
            <li>✔ Reliable and scalable staffing solutions</li>
            <li>✔ Strong focus on patient safety</li>
            <li>✔ Experience across healthcare environments</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-teal-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Strengthen Your Healthcare Operations
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Partner with AK Consulting Solution for dependable,
            compliant, and quality-driven healthcare support services.
          </p>

          <Link href="/contact">
            <button className="bg-white text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-100 transition">
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
