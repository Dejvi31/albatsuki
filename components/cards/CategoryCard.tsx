"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CategoryCard = ({ title, img }: { title: string; img: string }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`${title.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="rounded-full overflow-hidden m-2">
        <Image
          src={img}
          alt={title}
          width={100}
          height={50}
          onClick={handleClick}
        />
      </div>
      <Button
        className="bg-home-2 text-white  hover:text-home-1  rounded-full py-2 px-4 border border-transparent shadow-sm transition-all duration-300"
        onClick={handleClick}
      >
        {title}
      </Button>
    </div>
  );
};

export default CategoryCard;
