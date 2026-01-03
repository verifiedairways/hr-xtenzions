export default function HowToOrder() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#d4af37] font-bold mb-12">
          How to Order
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="p-6 border border-[#d4af37]/20 rounded-xl">
            <span className="text-4xl text-[#d4af37] font-bold">1</span>
            <p className="text-gray-300 mt-4">
              Select the type of Brazilian hair you want.
            </p>
          </div>

          <div className="p-6 border border-[#d4af37]/20 rounded-xl">
            <span className="text-4xl text-[#d4af37] font-bold">2</span>
            <p className="text-gray-300 mt-4">
              Click “Ask for Price on WhatsApp”.
            </p>
          </div>

          <div className="p-6 border border-[#d4af37]/20 rounded-xl">
            <span className="text-4xl text-[#d4af37] font-bold">3</span>
            <p className="text-gray-300 mt-4">
              Chat with us and confirm your order details.
            </p>
          </div>

          <div className="p-6 border border-[#d4af37]/20 rounded-xl">
            <span className="text-4xl text-[#d4af37] font-bold">4</span>
            <p className="text-gray-300 mt-4">
              Make payment and get fast delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}