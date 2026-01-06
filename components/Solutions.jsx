import Image from "next/image";

export default function Solutions() {
  return (
    <section className="bg-[#1c2645] py-24 px-10 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-x-28 items-start">

    {/* LEFT CONTENT */}
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Solutions <br /> designed for you
      </h2>

      <p className="mb-6 text-gray-200 text-lg">
        We study your business so we can apply the right strategies.
      </p>

      <p className="mb-12 text-gray-200 leading-relaxed">
        At AK Consulting Solution, we understand that every business has unique
        challenges. Our consulting-led approach focuses on delivering customized
        recruitment, training, and operational solutions that help organizations
        grow efficiently and build strong, skilled workforces.
      </p>

      {/* BULLETS */}
      <div className="grid lg:grid-cols-[max-content_max-content_max-content] gap-x-28 gap-y-10 text-gray-200">
        <ul className="list-disc pl-6 space-y-4 whitespace-nowrap">
          <li>Recruitment & Staffing Solutions</li>
          <li>Talent Acquisition & Placement</li>
          <li>Candidate Screening & Verification</li>
        </ul>

        <ul className="list-disc pl-6 space-y-4 whitespace-nowrap">
          <li>Corporate Training Programs</li>
          <li>Skill Development & Workforce Readiness</li>
          <li>Industry-Oriented Training Solutions</li>
        </ul>

        <ul className="list-disc pl-6 space-y-4 whitespace-nowrap">
          <li>Business Consulting Services</li>
          <li>Project Operations Support</li>
          <li>Process Optimization & Advisory</li>
        </ul>
      </div>

      <div className="h-12"></div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-end self-start">
      <Image
        src="/images/business.png"
        alt="Business Consulting"
        width={220}
        height={560}
        className="rounded-2xl shadow-2xl object-cover"
        priority
      />
    </div>

  </div>
</section>

  );
}
