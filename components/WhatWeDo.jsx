import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Digital Platforms & Technologies",
    image: "/images/Digital.webp",
    href: "/services/digital-platforms",
  },
  {
    title: "GIS & Mapping Services (2D Mapping)",
    image: "/images/Gis.webp",
    href: "/services/gis-mapping",
  },
  {
    title: "Data Entry & Data Processing",
    image: "/images/dataentry.png",
    href: "/services/data-entry",
  },
  {
    title: "Customer Experience & Process Support",
    image: "/images/customer.png",
    href: "/services/customer-experience",
  },
  {
    title: "MSME & Government Projects",
    image: "/images/msme.png",
    href: "/services/msme-projects",
  },
  {
    title: "Workforce & Staffing Solutions",
    image: "/images/workforce.png",
    href: "/services/workforce-staffing",
  },
];



export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-2">
            What We Do
          </h2>
          <p className="text-lg text-gray-600">
            Turning talent, technology, and projects into reliable outcomes
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative h-[280px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

              {/* TITLE */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-semibold leading-snug">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

