import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/albatsuki.jpg"
      alt="albaimg"
      width={400}
      height={200}
    />
  );
};

export default MainImage;
