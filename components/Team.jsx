export default function Team() {
  const members = [
    ["Ameen Nawaz", "Founder", "ameen.jpg"],
    ["Oumme Kulsum", "Co-Founder", "kulsum.jpg"],
    ["Nehaal Ahmedh", "Chief Executive Officer", "nehaal.png"]
  ];

  return (
    <section className="py-20 bg-deep text-center">
      <h2 className="text-4xl font-bold mb-14">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-10 px-10">
        {members.map((m, i) => (
          <div key={i}>
            <img src={`/images/${m[2]}`} className="mx-auto rounded-lg mb-4 h-56 object-cover" />
            <h3 className="text-xl font-semibold">{m[0]}</h3>
            <p className="text-gray-300">{m[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
