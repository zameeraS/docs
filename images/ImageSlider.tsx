import React, { useState } from "react";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={prevSlide}>⬅️</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} style={{ maxWidth: "100%", height: "auto" }} />
      <button onClick={nextSlide}>➡️</button>
    </div>
  );
};

export default ImageSlider;
