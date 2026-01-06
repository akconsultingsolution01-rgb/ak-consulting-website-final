export default function CompanyPage() {
  return (
    <main className="bg-[#1c2645] text-white">

      {/* ================= WHO ARE WE – HERO ================= */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/who-we-are.png')" }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 flex flex-col justify-center h-full">
          <span className="uppercase tracking-widest text-sm text-cyan-300 mb-4">
            Who Are We
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
            Trusted Execution Partners for Workforce & Business Solutions
          </h1>

          <p className="max-w-3xl text-lg text-gray-200 leading-relaxed">
            AK Consulting Solution is an India-based consulting firm delivering
            reliable recruitment, training, GIS services, MSME projects, and
            operational support. We focus on practical execution, structured
            processes, and long-term partnerships that help businesses and
            individuals grow.
          </p>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="py-24 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-sm uppercase text-gray-500">
              Company Overview
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-6">
              About AK Consulting Solution
            </h2>

            <p className="leading-relaxed">
              AK Consulting Solution is a trusted consulting and process
              solutions partner delivering excellence in recruitment,
              training, data services, customer experience, GIS, MSME,
              and government-backed projects.
            </p>
          </div>

          <div className="leading-relaxed space-y-4">
            <p>
              Our approach is execution-first. We believe strong processes,
              ethical practices, and accountability are the foundation of
              successful long-term partnerships.
            </p>

            <p>
              With a growing PAN-India presence, we combine skilled manpower,
              structured workflows, and technology-enabled delivery to support
              organizations and individuals at every stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="mt-2">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">1000+</h3>
            <p className="mt-2">Candidates Supported</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="mt-2">Projects Delivered</p>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16">
          <div>
            <span className="uppercase text-sm text-gray-500">
              What We Do
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Why AK Consulting Solution
            </h2>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              We deliver structured, compliant, and quality-driven solutions
              across recruitment, training, CX operations, data services,
              GIS projects, and government initiatives.
            </p>
            <p>
              Our focus on clarity, responsibility, and ownership ensures
              measurable outcomes for clients and meaningful growth for
              candidates.
            </p>
          </div>
        </div>
      </section>

   {/* ================= OUR MISSION ================= */}
<section className="py-28 bg-[#f6f8f0] text-gray-800">
  <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT – IMAGE */}
    <div className="relative">
      <img
        src="/images/company/mission-wide.png"
        alt="Our Mission"
        className="rounded-lg shadow-sm w-full"
      />
    </div>

    {/* RIGHT – CONTENT */}
    <div>
      <h2 className="text-4xl font-bold mb-6">
        Our Mission
      </h2>

      <p className="text-lg leading-relaxed mb-10">
        Our mission is to deliver reliable recruitment, training, GIS, MSME,
        and business support solutions that create real impact for
        organizations and individuals across India.
      </p>

      {/* QUOTE */}
      <div className="flex gap-6">
        <div className="w-1 bg-blue-600"></div>

        <div>
          <p className="italic text-gray-700 text-lg leading-relaxed mb-6">
            “At AK Consulting Solution, our mission is simple – to bridge
            talent, technology, and opportunity through practical execution,
            trust, and long-term value.”
          </p>

          <div className="font-semibold text-gray-900">
            — Ameen Nawaz
          </div>
          <div className="text-sm text-gray-600">
            Founder, AK Consulting Solution
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= LEADERSHIP ================= */}
<section className="py-28 bg-gradient-to-b from-[#0f1b3d] to-[#0b1533] text-white">
  <div className="max-w-7xl mx-auto px-10">

    <h2 className="text-4xl font-bold text-center mb-20">
      Leadership
    </h2>

    <div className="grid md:grid-cols-3 gap-16 text-center">

      {/* Ameen Nawaz */}
      <div>
        <div className="w-56 h-72 mx-auto rounded-xl overflow-hidden bg-white shadow-lg mb-6">
          <img
            src="/images/ameen.jpg"
            alt="Ameen Nawaz"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold">Ameen Nawaz</h3>
        <p className="text-cyan-300 text-sm mt-1">Founder</p>

        <p className="text-gray-300 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
          Provides strategic direction and operational leadership, ensuring
          ethical execution and sustainable growth.
        </p>
      </div>

      {/* Syed Oummer Kulsum */}
      <div>
        <div className="w-56 h-72 mx-auto rounded-xl overflow-hidden bg-white shadow-lg mb-6">
          <img
            src="/images/kulsum.jpg"
            alt="Syed Oummer Kulsum"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold">Syed Oummer Kulsum</h3>
        <p className="text-cyan-300 text-sm mt-1">
          Co-Founder & HR Manager
        </p>

        <p className="text-gray-300 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
          Focuses on talent development, candidate guidance, and responsible
          workforce management beyond placement.
        </p>
      </div>

      {/* Nehaal Ahmedh */}
      <div>
        <div className="w-56 h-72 mx-auto rounded-xl overflow-hidden bg-white shadow-lg mb-6">
          <img
            src="/images/nehaal.png"
            alt="Nehaal Ahmedh"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold">Nehaal Ahmedh</h3>
        <p className="text-cyan-300 text-sm mt-1">
          Chief Executive Officer
        </p>

        <p className="text-gray-300 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
          Leads organizational strategy, execution, and enterprise growth
          initiatives across business verticals.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= VALUES ================= */}
      <section className="py-24 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold mb-14">
            Our Corporate Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Integrity", "Ethical and transparent execution"],
              ["Trust", "Long-term partnerships"],
              ["Accountability", "Ownership of outcomes"],
              ["Excellence", "Quality-driven delivery"],
              ["Collaboration", "People-first approach"],
              ["Growth", "Continuous improvement"],
            ].map(([title, desc], i) => (
              <div key={i}>
                <h4 className="font-semibold mb-2">{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
