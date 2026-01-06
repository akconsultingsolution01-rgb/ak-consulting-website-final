import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    title: "Recruitment & Staffing Industry",
    image: "/images/industries/recruitment.png",
    href: "/industries/recruitment",
  },
  {
    title: "BPO / KPO / Customer Support Industry",
    image: "/images/industries/bpo.png",
    href: "/industries/bpo",
  },
  {
    title: "MSME & Government-Certified Projects",
    image: "/images/industries/msme.png",
    href: "/industries/msme",
  },
  {
    title: "Training & Skill Development Industry",
    image: "/images/industries/training.png",
    href: "/industries/training",
  },
  {
    title: "Corporate & Enterprise Operations",
    image: "/images/industries/corporate.png",
    href: "/industries/corporate",
  },
  {
    title: "Technology-Enabled Services",
    image: "/images/industries/technology.png",
    href: "/industries/technology",
  },
  {
    title: "Healthcare Support Services",
    image: "/images/industries/healthcare.png",
    href: "/industries/healthcare",
  },
  {
    title: "Retail, Logistics & Field Operations",
    image: "/images/industries/logistics.png",
    href: "/industries/logistics",
  },
  {
    title: "Education, EdTech & Learning Operations",
    image: "/images/industries/education.png",
    href: "/industries/education",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-[#1c2645] py-24 px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-300 text-lg">
            AK Consulting Solution serves industries where people, processes,
            training, and compliance matter the most. Our focus is on execution,
            not theory.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="group relative h-[260px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* IMAGE */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/45 transition-all duration-300 group-hover:bg-black/65" />

              {/* TITLE */}
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 group-hover:bottom-8">
                <h3 className="text-white text-xl font-semibold leading-snug">
                  {industry.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
