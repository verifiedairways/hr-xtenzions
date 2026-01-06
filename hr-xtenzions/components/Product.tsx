import Image from "next/image";

type ProductProps = {
  name: string;
  image: string;
};

export default function Product({ name, image }: ProductProps) {
  return (
    <div className="bg-neutral-800 p-4 rounded-lg text-center">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h3 className="mt-4 font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">
        Message us on WhatsApp for price
      </p>
    </div>
  );
}