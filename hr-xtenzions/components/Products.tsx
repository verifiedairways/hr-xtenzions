import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Straight Hair",
    image: "/images/products/straight.jpg",
  },
  {
    id: 2,
    name: "Bone Straight",
    image: "/images/products/bone-straight.jpg",
  },
  {
    id: 3,
    name: "Body Wave",
    image: "/images/products/body-wave.jpg",
  },
  {
    id: 4,
    name: "Curly Hair",
    image: "/images/products/curly.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-16 bg-purple-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gold">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}