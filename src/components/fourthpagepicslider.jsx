import React, { useState } from "react";

const slidePics = [
  { src: "/Rectangle 2.png", alt: "pic1" },
  { src: "/Rectangle 20.png", alt: "pic2" },
  { src: "/Rectangle 16.png", alt: "pic3" },
  { src: "/Rectangle 17.png", alt: "pic4" },
  { src: "/Rectangle 23.png", alt: "pic5" },
  { src: "/Rectangle 7.png", alt: "pic6" },
  { src: "/Rectangle 10.png", alt: "pic7" },
  { src: "/Rectangle 9.png", alt: "pic8" },
];

const leftPositions = ["31px", "378px", "725px", "1072px"];

const PictureSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % slidePics.length);
  };

  const visiblePics = [0, 1, 2, 3].map(
    (i) => slidePics[(startIndex + i) % slidePics.length]
  );

  return (
    <div className="absolute top-[4130px] left-0 w-full">

      {/* Horizontal Line */}
      <hr className="absolute w-[1450px] h-[0px] top-[-38.5px] left-[35px] border-t border-[#000000] opacity-100" />

      <div className="relative h-[427px]">
        {visiblePics.map((pic, index) => (
          <img
            key={index}
            src={pic.src}
            alt={pic.alt}
            style={{ left: leftPositions[index] }}
            className="absolute top-0 w-[330px] h-[427px] rounded-[9px] object-cover opacity-100"
          />
        ))}

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black text-2xl px-3 py-1 rounded-full z-10"
        >
          ›
        </button>
      </div>
      
    </div>
  );
};

export default PictureSlider;