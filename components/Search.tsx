import React from "react";

const Search = () => {
  return (
    <section className="flex items-center justify-center w-full">
      <input
        type="text"
        name="search"
        className="flex text-home-3 bg-home-1 border-b-2 w-9/12 border-home-3 rounded-md mt-2 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-home-3 focus:outline-none 1 sm:text-sm"
        placeholder="Search a product..."
      />
    </section>
  );
};

export default Search;
