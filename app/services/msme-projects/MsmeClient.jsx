"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Download,
} from "lucide-react";

/* ================= SLIDER ================= */
const sliderImages = [
  { src: "/images/msme/workforce.png", title: "Government Workforce Projects" },
  { src: "/images/msme/skill-traning.png", title: "Skill India & Training Support" },
  { src: "/images/msme/msme-qci.png", title: "MSME & QCI Execution" },
];

/* ================= COUNTERS ================= */
const counters = [
  { label: "Projects Executed", value: 1},
  { label: "Candidates Deployed", value: 20 },
  { label: "Government Partners", value: 1 },
  { label: "States Covered", value: 1 },
];

export default function MsmeProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(counters.map(() => 0));

  /* SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* COUNTERS */
  useEffect(() => {
    const timers = counters.map((counter, i) =>
      setInterval(() => {
        setCount((prev) =>
          prev.map((v, idx) =>
            idx === i && v < counter.value ? v + 1 : v
          )
        );
      }, 20)
    );
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <main className="bg-[#1c2645] text-white">

      {/* ================= HERO ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-5xl font-bold mb-6">
              MSME & Government Projects
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Certified execution aligned with national standards.
            </p>
            <p className="text-gray-400 max-w-xl">
              We support MSME ZED, QCI, Skill India and government-certified
              initiatives through workforce deployment, training coordination,
              assessment, compliance and reporting.
            </p>

            <a
              href="/brochures/msme-projects.pdf"
              className="inline-flex items-center gap-3 mt-8 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>

          {/* SLIDER */}
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            {sliderImages.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-black/60 px-5 py-2 rounded-full text-sm">
                  {img.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= COUNTERS ================= */}
      <section className="py-20 bg-[#16203a]">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-4 gap-10 text-center">
          {counters.map((c, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-cyan-400">{count[i]}+</p>
              <p className="text-gray-300 mt-2">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MSME ZED & QCI FACILITATION ================= */}
      <section className="py-28 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">

          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">
              MSME ZED & QCI Facilitation Support
            </h2>
            <p className="text-gray-300 text-lg">
              Structured execution support for MSME ZED, QCI, and
              government-aligned certification programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT CONTENT */}
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p>
                AK Consulting Solution actively supports <strong>MSME ZED
                (Zero Defect Zero Effect)</strong>, <strong>QCI</strong>,
                and other government-backed initiatives through on-ground
                execution and coordination.
              </p>

              <p>
                We work as an <strong>execution and facilitation partner</strong>,
                helping agencies and MSMEs complete certification,
                assessment, and compliance workflows efficiently.
              </p>

              <p>
                Our teams ensure strict alignment with defined frameworks,
                reporting standards, and national quality benchmarks.
              </p>
            </div>

            {/* RIGHT FEATURES */}
            <div className="grid sm:grid-cols-2 gap-8">

              {[
                {
                  title: "MSME ZED Program Support",
                  desc:
                    "Candidate mobilization, assessment coordination, documentation, and execution aligned with ZED guidelines.",
                },
                {
                  title: "QCI-Aligned Execution",
                  desc:
                    "Workforce deployment, verification, audits, and structured reporting as per QCI frameworks.",
                },
                {
                  title: "Training & Assessment Coordination",
                  desc:
                    "End-to-end coordination of training sessions, assessments, certifications, and compliance.",
                },
                {
                  title: "Government Reporting & Compliance",
                  desc:
                    "Accurate reporting, process tracking, and documentation for government stakeholders.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#243056] rounded-xl p-6 hover:bg-[#2c3a6a] transition"
                >
                  <h4 className="font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

     
{/* ================= MSME ZED CERTIFICATION SUPPORT ================= */}
<section className="py-28 bg-[#1c2645] border-t border-white/10">
  <div className="max-w-7xl mx-auto px-10">

    {/* SECTION HEADER */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        MSME ZED Certification Support
      </h1>

      <p className="text-cyan-400 font-semibold mb-4">
        Zero Defect • Zero Effect
      </p>

      <p className="text-gray-300 text-lg">
        Government of India Quality Initiative for MSMEs
      </p>

      <p className="text-gray-400 mt-6">
        We help MSMEs achieve ZED Certification by improving quality,
        efficiency, and environmental sustainability—ensuring compliance
        with Government of India standards.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <a
          href="/contact"
          className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition"
        >
          Get ZED Certified
        </a>

        <a
          href="/contact"
          className="border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* ================= ABOUT ZED ================= */}
    <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

      {/* LEFT CONTENT */}
      <div className="space-y-6 text-gray-300">
        <h2 className="text-3xl font-bold text-white">
          What is ZED Certification?
        </h2>

        <p>
          The <strong>ZED (Zero Defect Zero Effect)</strong> Certification
          Scheme is an initiative of the Ministry of Micro, Small and
          Medium Enterprises, implemented through the
          <strong> Quality Council of India (QCI)</strong>.
        </p>

        <p>
          The scheme enables MSMEs to enhance product quality, reduce
          defects, and adopt environmentally sustainable practices—making
          Indian enterprises globally competitive.
        </p>
      </div>

      {/* RIGHT VISUAL / INFO PANEL */}
      <div className="bg-[#243056] rounded-2xl p-10 space-y-6">
        <h3 className="text-xl font-semibold text-white">
          Objectives of ZED Scheme
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Zero defect manufacturing</li>
          <li>✔ Zero environmental impact</li>
          <li>✔ Improved productivity & efficiency</li>
          <li>✔ Global quality compliance</li>
          <li>✔ Sustainable MSME growth</li>
        </ul>
      </div>
    </div>

    {/* ================= ZED LEVELS ================= */}
    <div className="mb-28">
      <h2 className="text-3xl font-bold text-center mb-12">
        ZED Certification Levels
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-[#243056] rounded-xl p-8 text-center hover:bg-[#2c3a6a] transition">
          <h3 className="text-xl font-bold mb-3">🥉 Bronze</h3>
          <p className="text-gray-300">
            Entry-level quality and compliance framework
          </p>
        </div>

        <div className="bg-[#243056] rounded-xl p-8 text-center hover:bg-[#2c3a6a] transition">
          <h3 className="text-xl font-bold mb-3">🥈 Silver</h3>
          <p className="text-gray-300">
            Improved operations, sustainability, and controls
          </p>
        </div>

        <div className="bg-[#243056] rounded-xl p-8 text-center hover:bg-[#2c3a6a] transition">
          <h3 className="text-xl font-bold mb-3">🥇 Gold</h3>
          <p className="text-gray-300">
            Advanced manufacturing and global standards
          </p>
        </div>

      </div>
    </div>

    {/* ================= ELIGIBILITY & BENEFITS ================= */}
    <div className="grid lg:grid-cols-2 gap-20">

      {/* ELIGIBILITY */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Who Can Apply?
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>✔ MSMEs registered under Udyam</li>
          <li>✔ Manufacturing & Service enterprises</li>
          <li>✔ PAN India MSMEs</li>
          <li>✔ New & existing businesses</li>
        </ul>
      </div>

      {/* BENEFITS */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Benefits of ZED Certification
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>🏆 Improved quality & reduced rejection</li>
          <li>🌱 Environment-friendly operations</li>
          <li>📈 Market credibility</li>
          <li>💰 Government incentives</li>
          <li>🏭 Easier participation in tenders</li>
        </ul>
      </div>

    </div>

    {/* ================= WHY AK CONSULTING ================= */}
    <div className="mt-28 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Why Choose AK Consulting Solution?
      </h2>

      <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
        <li>✔ Complete ZED documentation support</li>
        <li>✔ Assessment & compliance guidance</li>
        <li>✔ MSME-focused expert consulting</li>
        <li>✔ PAN India execution support</li>
      </ul>
    </div>

  </div>
</section>
 {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">
            Talk to Our Project Team
          </h3>
          <p className="mb-10">
            Let us help you execute MSME & government-certified projects
            with confidence.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
