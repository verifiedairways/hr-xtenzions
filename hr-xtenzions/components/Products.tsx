import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <section className="bg-[#0b0b0b] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-[#d4af37] font-bold mb-12">
          Our Products
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}