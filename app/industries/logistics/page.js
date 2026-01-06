import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function RetailLogisticsFieldOperationsPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Retail, Logistics & Field Operations"
        description="Delivering reliable manpower and operational support for retail networks, logistics operations, warehousing, and on-ground field execution."
        image="/images/industries/retail-logistics.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Retail and logistics operations depend on speed, accuracy, and
            disciplined field execution. AK Consulting Solution supports
            end-to-end retail and logistics ecosystems by supplying trained
            manpower for store operations, supply chains, warehousing, and
            last-mile field activities.
          </p>
        </div>
      </section>

      {/* ================= 2. CORE SERVICE AREAS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-10">
            Core Service Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Retail Store Operations"
              text="Sales associates, store executives, supervisors, and floor operations staff."
            />
            <ServiceCard
              title="Logistics & Supply Chain Support"
              text="Loading, unloading, sorting, dispatch, and inventory movement teams."
            />
            <ServiceCard
              title="Field Operations"
              text="On-ground teams for delivery, verification, surveys, and service execution."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. OPERATIONAL ENVIRONMENTS ================= */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-10">
            Operational Environments We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>Retail Stores & Showrooms</span>
            <span>Warehouses & Distribution Centers</span>
            <span>Last-Mile Delivery Operations</span>
            <span>Cold Chain & FMCG Logistics</span>
            <span>Urban & Rural Field Operations</span>
            <span>Large-Scale Network Rollouts</span>
          </div>
        </div>
      </section>

      {/* ================= 4. DEPLOYMENT MODEL ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-8">
            Workforce Deployment Model
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Operational Requirement Assessment</li>
            <li>Manpower Planning & Mobilization</li>
            <li>Skill & Background Verification</li>
            <li>On-Site Deployment & Induction</li>
            <li>Supervision & Performance Monitoring</li>
          </ol>
        </div>
      </section>

      {/* ================= 5. SCALE & PEAK MANAGEMENT ================= */}
      <section className="py-20 px-6 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Scale & Peak Operations Management
          </h2>
          <p className="text-lg text-stone-200 leading-relaxed">
            We support large-scale operations during peak seasons, festive demand,
            promotional campaigns, and network expansions by rapidly scaling
            manpower while maintaining operational discipline and service quality.
          </p>
        </div>
      </section>

      {/* ================= 6. SAFETY & COMPLIANCE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Safety, Compliance & Discipline
          </h2>
          <p className="text-lg text-gray-700">
            Our field and logistics operations follow safety guidelines,
            statutory compliance, workforce discipline, and reporting structures
            to ensure smooth and risk-free execution.
          </p>
        </div>
      </section>

      {/* ================= 7. BUSINESS VALUE ================= */}
      <section className="py-20 px-6 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Business Value Delivered
          </h2>
          <p className="text-lg text-gray-700">
            Faster turnaround times, improved service reliability,
            reduced operational bottlenecks, and consistent on-ground
            execution across multiple locations.
          </p>
        </div>
      </section>

      {/* ================= 8. WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-8">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Strong on-ground execution capability</li>
            <li>✔ Experience with large retail & logistics networks</li>
            <li>✔ Rapid manpower mobilization</li>
            <li>✔ Compliance-driven operations</li>
            <li>✔ Scalable and flexible workforce models</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-stone-800 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Power Your Retail & Field Operations
          </h2>
          <p className="text-lg text-stone-200 mb-8">
            Partner with AK Consulting Solution for dependable,
            scalable, and execution-ready retail and logistics support.
          </p>

          <Link href="/contact">
            <button className="bg-white text-stone-800 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition">
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
      <h3 className="text-xl font-semibold text-stone-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
