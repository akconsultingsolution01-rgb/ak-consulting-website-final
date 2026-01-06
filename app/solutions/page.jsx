"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Headphones,
  Database,
  MapPinned,
  Building2,
  Landmark,
  Workflow,
  Layers,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    title: "Workforce & Talent Solutions",
    slug: "workforce-talent",
    icon: Users,
    description:
      "Structured workforce solutions supporting hiring, training, deployment, and long-term talent management.",
  },
  {
    title: "Customer Experience (CX) Solutions",
    slug: "customer-experience",
    icon: Headphones,
    description:
      "Integrated CX solutions enabling consistent, high-quality customer interactions across channels.",
  },
  {
    title: "Data & Digital Operations",
    slug: "data-digital",
    icon: Database,
    description:
      "Secure, scalable data solutions supporting enterprise and government operations.",
  },
  {
    title: "GIS & Geospatial Solutions",
    slug: "gis-geospatial",
    icon: MapPinned,
    description:
      "Technology-enabled GIS solutions for infrastructure, utilities, and public-sector projects.",
  },
  {
    title: "MSME & Enterprise Enablement",
    slug: "msme-enterprise",
    icon: Building2,
    description:
      "Execution-focused solutions enabling MSMEs and enterprises to scale efficiently.",
  },
  {
    title: "Government & Public Sector Solutions",
    slug: "government-public",
    icon: Landmark,
    description:
      "Reliable execution of large-scale government programs with transparency and compliance.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#1c2645] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] bg-[#0f1b3d]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0f1b3d] to-[#1c2645]" />

        <div className="relative z-10 max-w-7xl mx-auto px-10 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
              Solutions
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Solutions Designed for <br />
              <span className="text-blue-400">Scale & Impact</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-10">
              We design execution-ready solutions that align people,
              process, and technology to help organizations scale
              efficiently and sustainably.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition"
              >
                Get In Touch
              </a>

              <a
                href="#solutions"
                className="border border-white/30 px-8 py-4 rounded-lg font-semibold transition hover:border-white"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/solutions/hero-laptop.png"
              alt="Business Solutions"
              className="w-full max-w-xl mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS GRID ================= */}
      <section id="solutions" className="py-28">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-14">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#22305c] border border-white/10 rounded-2xl p-10"
            >
              <item.icon className="w-10 h-10 text-blue-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>

              <Link
                href={`/solutions/${item.slug}`}
                className="text-blue-400 font-medium hover:underline"
              >
                Explore Solution →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE DELIVER ================= */}
      <section className="py-28 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How We Deliver Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Requirement Assessment",
              "Solution Design",
              "Execution & Deployment",
              "Ongoing Optimization",
            ].map((step, i) => (
              <div key={i} className="bg-[#22305c] p-8 rounded-xl">
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXECUTION FRAMEWORK ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-12">
            Our Execution Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <FrameworkCard icon={Workflow} title="Process-Driven Execution" />
            <FrameworkCard icon={Layers} title="Scalable Architecture" />
            <FrameworkCard icon={ShieldCheck} title="Compliance & Governance" />
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-28 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <span>Healthcare & Life Sciences</span>
            <span>Government & Public Sector</span>
            <span>BFSI & Financial Services</span>
            <span>Telecom & Utilities</span>
            <span>Manufacturing & Infrastructure</span>
            <span>Education & Skill Development</span>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Technology & Platforms
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "AI & Machine Learning",
              "GIS & Spatial Systems",
              "Cloud & Data Platforms",
              "Automation & Workflow Tools",
            ].map((tech, i) => (
              <div key={i} className="bg-[#22305c] p-6 rounded-xl">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">
            Let’s Build Scalable Solutions Together
          </h3>
          <p className="mb-10 text-white/90">
            Talk to our experts about execution-ready solutions tailored
            to your organization’s needs.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}

/* ================= SMALL COMPONENT ================= */
function FrameworkCard({ icon: Icon, title }) {
  return (
    <div className="bg-[#22305c] rounded-xl p-8 hover:-translate-y-1 transition">
      <Icon className="w-10 h-10 text-blue-400 mb-5" />
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}
