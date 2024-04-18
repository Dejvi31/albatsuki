import React from "react";
import CategoryCard from "../cards/CategoryCard";

const Category = () => {
  return (
    <div className="my-6">
      <h1>Shop from TOP CATEGORIES</h1>

      <div className="grid grid-cols-4 gap-2">
        <CategoryCard title="Clothes" img="/images/clothes.jpg" />
        <CategoryCard title="Figures" img="/images/clothes.jpg" />
        <CategoryCard title="Posters" img="/images/clothes.jpg" />
        <CategoryCard title="Others" img="/images/clothes.jpg" />
      </div>
    </div>
  );
};

export default Category;
