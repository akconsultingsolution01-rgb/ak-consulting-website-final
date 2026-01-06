import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function TechnologyEnabledServicesPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Technology-Enabled Services"
        description="Leveraging digital platforms, automation, and data-driven solutions to enhance operational efficiency and service delivery."
        image="/images/industries/technologyhero.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Technology-enabled services combine skilled manpower with digital tools,
            platforms, and automation to deliver scalable and efficient operations.
            AK Consulting Solution helps organizations integrate technology into
            service delivery models for improved accuracy, speed, and visibility.
          </p>
        </div>
      </section>

      {/* ================= 2. SERVICE CAPABILITIES ================= */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">
            Core Service Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCardDark
              title="Digital Operations Support"
              text="Technology-assisted back-office, data processing, and operational workflows."
            />
            <ServiceCardDark
              title="Automation-Driven Services"
              text="Process automation support to reduce manual effort and improve turnaround time."
            />
            <ServiceCardDark
              title="Data & Reporting Services"
              text="Data validation, analytics support, and real-time operational reporting."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. TECHNOLOGY STACK ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Technology Stack & Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>CRM & ERP Platforms</span>
            <span>Workflow Automation Tools</span>
            <span>Cloud-Based Applications</span>
            <span>Data Analytics Dashboards</span>
            <span>Document Management Systems</span>
            <span>Secure Collaboration Tools</span>
          </div>
        </div>
      </section>

      {/* ================= 4. DELIVERY MODELS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Service Delivery Models
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ On-site technology-enabled teams</li>
            <li>✔ Remote and virtual service delivery</li>
            <li>✔ Hybrid operational models</li>
            <li>✔ Managed service engagements</li>
          </ul>
        </div>
      </section>

      {/* ================= 5. PROCESS FRAMEWORK ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Technology-Driven Process Framework
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Process Assessment & Digital Readiness</li>
            <li>Tool & Platform Integration</li>
            <li>Resource Training & Enablement</li>
            <li>Execution & Monitoring</li>
            <li>Optimization & Continuous Improvement</li>
          </ol>
        </div>
      </section>

      {/* ================= 6. SECURITY & COMPLIANCE ================= */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Data Security & Compliance
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Our technology-enabled services are designed with strong data protection,
            access controls, and compliance standards to ensure confidentiality,
            integrity, and regulatory adherence.
          </p>
        </div>
      </section>

      {/* ================= 7. BUSINESS IMPACT ================= */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Business Impact Delivered
          </h2>
          <p className="text-lg text-gray-700">
            Faster processing cycles, improved accuracy, enhanced visibility,
            reduced operational costs, and scalable service delivery enabled
            through technology.
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
            <li>✔ Technology-first service approach</li>
            <li>✔ Skilled tech-enabled workforce</li>
            <li>✔ Secure and compliant operations</li>
            <li>✔ Scalable digital service models</li>
            <li>✔ Continuous improvement mindset</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-slate-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enable Smarter Operations With Technology
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Partner with AK Consulting Solution to deliver efficient,
            secure, and scalable technology-enabled services.
          </p>

          <Link href="/contact">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

/* ================= DARK CARD ================= */
function ServiceCardDark({ title, text }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-200 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
