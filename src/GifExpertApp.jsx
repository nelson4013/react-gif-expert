import React, { useState } from "react";
import { AddCatecory , GifGrid } from "./componets";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1> GifExpertApp</h1>

      <AddCatecory onNewCategory={(event) => onAddCategory(event)} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
