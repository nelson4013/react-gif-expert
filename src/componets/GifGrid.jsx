import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
export const GifGrid = ({ category }) => {
  const { images, isloading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isloading && (<h2>Cargando...</h2>) }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            // agregan todas las propiedades de image se recomienda cuando se tienen muchas propiedades
            {...image}
          />
        ))}
      </div>
    </>
  );
};
