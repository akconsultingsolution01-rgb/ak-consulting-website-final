import Image from "next/image";

export default function IndustryHero({
  label = "Industries",
  title,
  description,
  image,
}) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Standard Overlay */}
      <div className="absolute inset-0 bg-[#1c2645]/80"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-4xl text-white">
          <span className="text-sm tracking-widest uppercase text-gray-300">
            {label}
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
