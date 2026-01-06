export default function Hero() {
  return (
    <section
      className="
        relative 
        min-h-[90vh]
        w-full
        bg-cover 
        bg-center 
        bg-no-repeat
        flex 
        items-center
      "
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">
            AK Consulting Solution
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Your Trusted Partner in Recruitment, Training, Business Consulting,
            and Project Operations.
          </p>
        </div>
      </div>
    </section>
  );
}
