"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Map, Layers, CheckCircle, Building2, Globe, Database } from "lucide-react";

/* ================= SLIDER IMAGES ================= */
const sliderImages = [
  { src: "/images/gis/gis-visualization.png", title: "GIS Visualization" },
  { src: "/images/gis/spatial-data.png", title: "Spatial Data" },
  { src: "/images/gis/analytics.png", title: "Analytics" },
];

export default function GisMappingPage() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("mapping");

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#1c2645] text-white w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              GIS & Mapping Services <br /> (2D Mapping)
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Accurate geospatial solutions for planning, infrastructure,
              utilities, and enterprise projects using ArcGIS-based workflows.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gis/2d-mapping.png"
              alt="2D GIS Mapping"
              width={700}
              height={480}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= IMAGE SLIDER ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-6xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-12">
            Our 2D GIS Mapping Capabilities
          </h2>

          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            {sliderImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover" />
                <div className="absolute bottom-6 left-6 bg-black/60 px-5 py-2 rounded-full text-sm">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">
            Our 2D GIS Capabilities
          </h2>

          <div className="flex gap-8 border-b border-white/20 mb-14">
            {[
              { id: "mapping", label: "2D GIS Mapping" },
              { id: "infra", label: "Infrastructure Mapping" },
              { id: "validation", label: "Data Validation" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-lg transition ${
                  activeTab === tab.id
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {activeTab === "mapping" && (
              <>
                <IconCard icon={<Map size={28} />} title="2D GIS Mapping" />
                <IconCard icon={<Layers size={28} />} title="Layer Creation" />
                <IconCard icon={<Building2 size={28} />} title="Urban Planning Support" />
                <IconCard icon={<CheckCircle size={28} />} title="Project-Ready Data" />
              </>
            )}

            {activeTab === "infra" && (
              <>
                <IconCard icon={<Building2 size={28} />} title="Utility Mapping" />
                <IconCard icon={<Layers size={28} />} title="Asset Layers" />
                <IconCard icon={<Map size={28} />} title="Infrastructure Layouts" />
                <IconCard icon={<CheckCircle size={28} />} title="Compliance Ready" />
              </>
            )}

            {activeTab === "validation" && (
              <>
                <IconCard icon={<CheckCircle size={28} />} title="Spatial Validation" />
                <IconCard icon={<Layers size={28} />} title="Attribute Checks" />
                <IconCard icon={<Map size={28} />} title="Data Cleanup" />
                <IconCard icon={<Building2 size={28} />} title="Quality Assurance" />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY APPLICATIONS ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">
            Industry Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <span>Urban & Regional Planning</span>
            <span>Smart City Projects</span>
            <span>Utility & Asset Mapping</span>
            <span>Land Records & Cadastral Mapping</span>
            <span>Infrastructure Development</span>
            <span>Government GIS Programs</span>
          </div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-6">
            GIS Tools & Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <span>ArcGIS Desktop & Online</span>
            <span>QGIS & Open Source Tools</span>
            <span>Spatial Databases</span>
            <span>Satellite & Survey Data</span>
            <span>Web GIS Platforms</span>
            <span>Custom GIS Dashboards</span>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">
            Project Execution Methodology
          </h2>

          <ol className="grid md:grid-cols-2 gap-6 text-gray-300">
            <li>Requirement & Scope Analysis</li>
            <li>Data Collection & Preparation</li>
            <li>2D Digitization & Layer Structuring</li>
            <li>Validation & Attribute Mapping</li>
            <li>Client Review & Corrections</li>
            <li>Final Delivery & Documentation</li>
          </ol>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-6">
            Accuracy & Quality Standards
          </h2>
          <p className="text-gray-300 max-w-3xl">
            Our GIS outputs follow strict accuracy benchmarks, spatial validation
            rules, attribute consistency checks, and multi-level quality assurance
            processes to ensure reliable and decision-ready geospatial data.
          </p>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-[#16203a]">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose AK Consulting Solution
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Proven experience in government & enterprise GIS projects</li>
            <li>✔ Skilled GIS analysts & mapping teams</li>
            <li>✔ Structured delivery & documentation</li>
            <li>✔ Compliance-ready outputs</li>
            <li>✔ Scalable execution capacity</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">
            Talk to Our GIS Team
          </h3>
          <p className="mb-10">
            Looking for reliable 2D GIS mapping support for your projects?
            Our experts are ready to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}

/* ================= ICON CARD ================= */
function IconCard({ icon, title }) {
  return (
    <div className="bg-[#243056] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2c3a6a]">
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}
