import React, { useState } from "react";
import categories from "data/categories";
import Title from "components/Title";
import favourites from "data/favourites";
import Favourites from "data/favourites";
function Category({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className=" relative rounded-md before:pt-[100%] before:block "
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[2%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
function WideCategory({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className=" relative rounded-md  "
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {favourites.title}
        </h3>
        <img
          src={favourites.cover}
          className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[2%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
function Search() {
  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediğin türler" />
        <div>
          {favourites.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </div>
      </section>

      <section>
        <Title title="Hepsine göz at" />

        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
