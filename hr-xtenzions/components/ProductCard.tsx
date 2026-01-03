type ProductProps = {
  name: string;
  image: string;
};

export default function ProductCard({ name, image }: ProductProps) {
  const message = `Hello, I am interested in ${name}. Please tell me the price.`;

  return (
    <div className="bg-black border border-[#d4af37]/20 rounded-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />

      <div className="p-6 text-[#d4af37]">
        <h3 className="text-xl font-semibold mb-6">{name}</h3>

        <a
          href={`https://wa.me/2349014168992?text=${encodeURIComponent(message)}`}
          target="_blank"
          className="inline-block bg-[#d4af37] text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
        >
          Ask for Price on WhatsApp
        </a>
      </div>
    </div>
  );
}