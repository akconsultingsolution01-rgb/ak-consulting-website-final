export default function Footer() {
  return (
    <footer className="bg-[#16203a] text-gray-300">
      <div className="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-4 gap-12">

        <div>
          <h4 className="text-white font-semibold mb-4">
            AK Consulting Solution
          </h4>
          <p className="text-sm leading-relaxed">
            Trusted partner in recruitment, training, business consulting,
            and GIS-based project operations.
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Recruitment & Staffing</li>
            <li>GIS & Mapping</li>
            <li>Data Processing</li>
            <li>Customer Support</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Industries</h5>
          <ul className="space-y-2 text-sm">
            <li>Government & MSME</li>
            <li>BPO / KPO</li>
            <li>Healthcare</li>
            <li>Education</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Contact</h5>
          <p className="text-sm">
            Email: info@akconsultingsolution.com<br />
            Phone: +91 6301185730
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} AK Consulting Solution. All rights reserved.
      </div>
    </footer>
  );
}
