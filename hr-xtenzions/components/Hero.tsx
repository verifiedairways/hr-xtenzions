import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hair-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Logo */}
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