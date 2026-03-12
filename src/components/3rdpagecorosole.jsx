import React, { useState } from "react";

const CarouselDarkVariantExample = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: "/Rectangle 9.png", alt: "slide 1" },
    { src: "/Rectangle 7.png", alt: "slide 2" },
    { src: "/Rectangle 10.png", alt: "slide 3" },
    { src: "/Rectangle 11.png", alt: "slide 4" },
  ];

  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="flex items-center gap-4">

      {/* Slide Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="block w-full h-full object-cover"
        />
      </div>

      {/* Right Arrow OUTSIDE the image box */}
      <button onClick={next} className="flex-shrink-0">
        <img
          src="/Arrow 1.png"
          alt="next"
          className="w-[38.59px] h-auto"
        />
      </button>

    </div>
  );
};

export default CarouselDarkVariantExample;