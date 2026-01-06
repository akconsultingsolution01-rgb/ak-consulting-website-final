export default function Overview() {
  return (
    <section className="bg-[#1c2645] py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Floating Airship */}
        <div className="flex justify-center">
  <img
    src="/images/airship.png"
    alt="Floating Airship"
    className="floating w-[420px]"
  />
</div>
        {/* RIGHT: Text Content */}
        <div className="text-white">
          <h2 className="text-5xl font-bold text-[#2da3ff] mb-6">
            Overview
          </h2>

          <p className="text-lg leading-relaxed text-gray-200 space-y-4">
            AK Consulting Solution is a professional consulting firm based in
            Hyderabad, Telangana, India, dedicated to delivering reliable and
            result-oriented solutions in recruitment, training, business
            consulting, and project operations.
            <br /><br />
            Led by Ameen Nawaz, Proprietor – AK Consulting Solution, we focus on
            understanding client requirements and providing customized services
            that support business growth and workforce development across
            multiple industries.
            <br /><br />
            With strong expertise in talent acquisition and skill development,
            AK Consulting Solution helps organizations hire the right candidates
            and prepare them with practical, industry-relevant training.
            <br /><br />
            Driven by integrity, professionalism, and client satisfaction, we
            aim to build long-term partnerships and enable businesses to scale
            efficiently while creating meaningful career opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}
