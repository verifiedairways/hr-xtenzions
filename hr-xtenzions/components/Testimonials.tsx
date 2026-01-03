export default function Testimonials() {
  return (
    <section className="bg-[#0b0b0b] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#d4af37] font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-black p-8 rounded-xl border border-[#d4af37]/20">
            <p className="text-gray-300 mb-4">
              “The bone straight hair is super soft and full. I got so many compliments!”
            </p>
            <h4 className="text-[#d4af37] font-semibold">— Amaka O.</h4>
          </div>

          <div className="bg-black p-8 rounded-xl border border-[#d4af37]/20">
            <p className="text-gray-300 mb-4">
              “Very original Brazilian hair. No shedding at all. I’ll definitely buy again.”
            </p>
            <h4 className="text-[#d4af37] font-semibold">— Blessing K.</h4>
          </div>

          <div className="bg-black p-8 rounded-xl border border-[#d4af37]/20">
            <p className="text-gray-300 mb-4">
              “Fast response on WhatsApp and quality exceeded my expectations.”
            </p>
            <h4 className="text-[#d4af37] font-semibold">— Rita S.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}