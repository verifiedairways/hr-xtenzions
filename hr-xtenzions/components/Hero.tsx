import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
      <Image
  src="/images/logo.png"
  alt=""
  width={140}
  height={140}
  className="mx-auto mb-6 animate-fadeIn"
/>

  <h1 className="text-4xl md:text-6xl font-bold text-[#d4af37] mb-4 animate-slideUp">
  Hr_Xtenzions Premium Hair
</h1>
       <p className="text-gray-300 mb-8 animate-slide-up">
  Luxury, durable, and natural-looking hair extensions for confident women.
</p>

        <a
          href="https://wa.me/2349014168962"
          className="inline-block bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}