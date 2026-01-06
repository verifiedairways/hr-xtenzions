export default function Gallery() {
  return (
    <section className="bg-purple-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#d4af37] font-bold text-center mb-12">
          Our Hair Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/products/bone-straight.jpg",
            "/images/products/body-wave.jpg",
            "/images/products/curly.jpg",
            "/images/products/straight.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Hair gallery"
              className="w-full h-60 object-cover rounded-xl hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}