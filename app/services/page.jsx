export default function ServicesPage() {
  const services = [
    {
      title: "Data Entry & Data Management",
      description:
        "High-volume, accurate, and secure data processing services designed for enterprises, government bodies, and MSMEs. We ensure precision, compliance, and fast turnaround at scale.",
      points: [
        "Bulk Data Entry & Digitization",
        "Data Cleansing & Validation",
        "Document Processing",
        "CRM & ERP Data Management",
      ],
    },
    {
      title: "GIS & Geospatial Solutions",
      description:
        "Advanced GIS services supporting infrastructure planning, utilities, smart cities, and government projects through accurate geospatial intelligence.",
      points: [
        "GIS Mapping & Digitization",
        "Geospatial Data Analysis",
        "Utility & Infrastructure Mapping",
        "Survey Data Processing",
      ],
    },
    {
      title: "Customer Experience (CX) Support",
      description:
        "End-to-end customer support solutions designed to improve satisfaction, retention, and operational efficiency across multiple channels.",
      points: [
        "Voice & Non-Voice Support",
        "Email & Chat Support",
        "Back Office Operations",
        "Customer Lifecycle Management",
      ],
    },
    {
      title: "MSME & Enterprise Support Services",
      description:
        "Operational and process support services tailored to growing businesses, enabling them to scale efficiently without increasing overhead.",
      points: [
        "Process Outsourcing",
        "Business Operations Support",
        "Compliance Assistance",
        "Reporting & Analytics Support",
      ],
    },
    {
      title: "Government & Public Sector Projects",
      description:
        "Reliable execution of large-scale government and public sector initiatives with a focus on accuracy, transparency, and compliance.",
      points: [
        "E-Governance Projects",
        "Public Data Digitization",
        "Survey & Census Operations",
        "Program Management Support",
      ],
    },
  ];

  return (
    <main className="bg-[#1c2645] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-10">
          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Avacation Knowledge Consulting Solutions delivers technology-enabled
            services across Data Management, GIS, Customer Experience, MSME
            support, and Government projects — helping organizations operate
            efficiently, scale confidently, and achieve measurable outcomes.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#22305c] border border-white/10 rounded-2xl p-8 hover:border-blue-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 text-gray-200">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= VALUE STATEMENT ================= */}
      <section className="py-20 border-t border-white/10 bg-[#18203d]">
        <div className="max-w-7xl mx-auto px-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Designed for Scale, Accuracy & Impact
          </h2>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our service delivery model combines skilled manpower, process
            excellence, and technology-driven workflows — ensuring reliability,
            compliance, and cost efficiency for enterprises, MSMEs, and public
            sector organizations.
          </p>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Operational Excellence Together
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with Avacation Knowledge Consulting Solutions to design a
            service model that meets your operational, business, and growth
            objectives.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
}
