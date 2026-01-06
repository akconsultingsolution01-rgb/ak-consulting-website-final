import Link from "next/link";
import IndustryHero from "@/components/IndustryHero";

export default function TrainingSkillDevelopmentPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <IndustryHero
        title="Training & Skill Development Industry"
        description="Empowering individuals and organizations through structured training, upskilling, and workforce capability development programs."
        image="/images/industries/traininghero.png"
      />

      {/* ================= 1. OVERVIEW ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Skill development is a key driver of employability, productivity,
            and economic growth. AK Consulting Solution designs and delivers
            structured training programs that bridge skill gaps and prepare
            individuals for industry-ready roles.
          </p>
        </div>
      </section>

      {/* ================= 2. TRAINING OFFERINGS ================= */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">
            Our Training Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Employability Skills Training"
              text="Communication, workplace behavior, and professional readiness programs."
            />
            <ServiceCard
              title="Technical & Domain Training"
              text="Role-specific technical training aligned with industry requirements."
            />
            <ServiceCard
              title="Leadership & Soft Skills"
              text="Management, leadership, and interpersonal skill development programs."
            />
          </div>
        </div>
      </section>

      {/* ================= 3. DELIVERY MODES ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Flexible Training Delivery Models
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Classroom-based instructor-led training</li>
            <li>✔ Virtual and online learning programs</li>
            <li>✔ On-site corporate training sessions</li>
            <li>✔ Hybrid learning models</li>
          </ul>
        </div>
      </section>

      {/* ================= 4. TARGET AUDIENCE ================= */}
      <section className="py-20 px-6 bg-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Who We Train
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
            <span>Fresh Graduates & Job Seekers</span>
            <span>Working Professionals</span>
            <span>Supervisors & Managers</span>
            <span>Corporate Teams</span>
            <span>MSME Workforce</span>
            <span>Government-Sponsored Trainees</span>
          </div>
        </div>
      </section>

      {/* ================= 5. PROGRAM DESIGN ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Program Design & Methodology
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>Skill Gap Assessment & Needs Analysis</li>
            <li>Curriculum Design & Customization</li>
            <li>Interactive Training Delivery</li>
            <li>Practical Assessments & Evaluations</li>
            <li>Certification & Feedback</li>
          </ol>
        </div>
      </section>

      {/* ================= 6. QUALITY & STANDARDS ================= */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quality & Training Standards
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our training programs follow structured learning frameworks,
            measurable outcomes, and continuous improvement practices
            to ensure high training effectiveness and learner satisfaction.
          </p>
        </div>
      </section>

      {/* ================= 7. IMPACT ================= */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Impact & Outcomes
          </h2>
          <p className="text-lg text-gray-700">
            Improved employability, enhanced workforce productivity,
            reduced onboarding time, and stronger alignment between
            skills and job roles.
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
            <li>✔ Industry-aligned training content</li>
            <li>✔ Experienced trainers & facilitators</li>
            <li>✔ Customizable learning programs</li>
            <li>✔ Measurable training outcomes</li>
            <li>✔ Scalable training delivery</li>
          </ul>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section className="py-20 px-6 bg-slate-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Build Skills That Drive Performance
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Partner with AK Consulting Solution to design and deliver
            impactful training and skill development programs.
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
