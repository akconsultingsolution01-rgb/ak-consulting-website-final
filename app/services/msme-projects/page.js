import MsmeClient from "./MsmeClient";

export async function generateMetadata() {
  return {
    title: "MSME & Government Projects | AK Consulting Solution",
    description:
      "Certified MSME ZED, QCI & Skill India project execution with workforce deployment and compliance support.",
  };
}

export default function Page() {
  return <MsmeClient />;
}
