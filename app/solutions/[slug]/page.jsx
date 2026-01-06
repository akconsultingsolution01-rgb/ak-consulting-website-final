"use client";

import { useParams } from "next/navigation";

const solutionData = {
  "workforce-talent": {
    title: "Workforce & Talent Solutions",
    description:
      "End-to-end workforce solutions supporting recruitment, training, deployment, and workforce governance.",
    services: [
      "Recruitment & Staffing",
      "Training & Skill Development",
      "Candidate Lifecycle Management",
      "Compliance & Workforce Governance",
    ],
    industries: [
      "Government",
      "MSME",
      "Enterprises",
      "Education & Training",
    ],
  },

  "customer-experience": {
    title: "Customer Experience (CX) Solutions",
    description:
      "Integrated customer experience solutions enabling consistent, high-quality interactions across channels.",
    services: [
      "Voice & Non-Voice Support",
      "Email & Chat Support",
      "Back Office Operations",
      "Customer Retention & Support",
    ],
    industries: [
      "Telecom",
      "E-commerce",
      "Enterprises",
      "Public Services",
    ],
  },

  "data-digital": {
    title: "Data & Digital Operations",
    description:
      "Secure, scalable data solutions supporting enterprise and government operations.",
    services: [
      "Data Entry & Digitization",
      "Data Validation & Quality Control",
      "Document Management",
      "Operational Data Support",
    ],
    industries: [
      "Government",
      "Banking & Finance",
      "Healthcare",
      "Enterprises",
    ],
  },

  "gis-geospatial": {
    title: "GIS & Geospatial Solutions",
    description:
      "Technology-enabled GIS solutions for infrastructure, utilities, and public-sector projects.",
    services: [
      "GIS Mapping & Digitization",
      "Survey Data Processing",
      "Infrastructure & Utility Mapping",
      "Geospatial Analysis",
    ],
    industries: [
      "Government",
      "Utilities",
      "Infrastructure",
      "Urban Planning",
    ],
  },

  "msme-enterprise": {
    title: "MSME & Enterprise Enablement",
    description:
      "Execution-focused solutions enabling MSMEs and enterprises to scale efficiently and compliantly.",
    services: [
      "Business Operations Support",
      "Process Outsourcing",
      "Reporting & Analytics",
      "Growth Enablement",
    ],
    industries: [
      "MSME",
      "Startups",
      "Enterprises",
    ],
  },

  "government-public": {
    title: "Government & Public Sector Solutions",
    description:
      "Reliable execution of large-scale government programs with transparency and compliance.",
    services: [
      "E-Governance Support",
      "Public Data Digitization",
      "Survey & Census Operations",
      "Program Management Assistance",
    ],
    industries: [
      "Central Government",
      "State Government",
      "Public Sector Units",
    ],
  },
};

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const data = solutionData[slug];

  if (!data) {
    return (
      <main className="bg-[#1c2645] text-white py-24 text-center">
        <h1 className="text-3xl font-bold">Solution Not Found</h1>
        <p className="text-gray-300 mt-4">
          The requested solution details are not available.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-[#1c2645] text-white py-24">
      <div className="max-w-6xl mx-auto px-10">

        <h1 className="text-4xl font-bold mb-6">
          {data.title}
        </h1>

        <p className="text-gray-300 max-w-3xl mb-12">
          {data.description}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Services Covered
        </h2>

        <ul className="mb-10 space-y-2 text-gray-200">
          {data.services.map((service, i) => (
            <li key={i}>• {service}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Industries Served
        </h2>

        <ul className="space-y-2 text-gray-200">
          {data.industries.map((industry, i) => (
            <li key={i}>• {industry}</li>
          ))}
        </ul>

      </div>
    </main>
  );
}
