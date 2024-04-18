import React from "react";
import { Button } from "../ui/button";

const MainText = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-home-2 py-4">Albatsuki</h1>
      <p className="font-bold text-home-3 py-6">
        Dive Into Our Meticulously Curated Collection Of Premium Merchandise,
        <br /> Where You'll Find <span className="underline"> EVERYTHING</span>.
      </p>

      <Button className="bg-home-2 text-white  hover:text-home-1  rounded-full py-2 px-4 border border-transparent shadow-sm transition-all duration-300">
        Explore NOW
      </Button>
    </div>
  );
};

export default MainText;
