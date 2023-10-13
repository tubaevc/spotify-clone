import React, { useState, useRef, useEffect } from "react";
import categories from "data/categories";
import Title from "components/Title";
import { Icon } from "Icons";
import Category from "components/CategoryItem";
function Collection() {
  return (
    <div>
      <section>
        <Title title="Hepsine göz at" />

        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Collection;
