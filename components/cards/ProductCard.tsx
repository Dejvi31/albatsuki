import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex flex-col max-w-[230px] items-center border border-gray-300 p-4 rounded-md shadow-md">
      <div className="mb-4 bg-gray-200 p-6 rounded-md">
        <Image src="/images/clothes.jpg" alt="product" width={80} height={50} />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Akatsuki Hoodie</h1>
        <h2 className="text-sm ">
          $45 <span className="line-through">$65</span>
        </h2>
        <hr className="my-2" />
        <h2 className="text-sm font-semibold">Save - $20</h2>
      </div>
    </div>
  );
};

export default ProductCard;
