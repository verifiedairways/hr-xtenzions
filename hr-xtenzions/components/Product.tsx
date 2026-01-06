import Image from "next/image";

type ProductProps = {
  name: string;
  image: string;
};

export default function Product({ name, image }: ProductProps) {
  return (
    <div className="bg-neutral-900 p-4 rounded-lg text-center">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-md"
      />
      <h3 className="mt-4 font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">
        Message us on WhatsApp for price
      </p>
    </div>
  );
}