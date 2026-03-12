import React, { useEffect, useRef, useState } from "react";

const ResponsiveScale = ({ children }) => {
  const [scale, setScale] = useState(1);
  const designWidth = 1600; // your original design width

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const newScale = screenWidth / designWidth;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${1600}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ResponsiveScale;