import React, { useEffect, useState } from "react";

const ResponsiveScale = ({ children }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth / 1600);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div style={{
      width: "100vw",
      height: `${5619 * scale}px`,
      overflowX: "hidden",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: "1600px",
        height: "5619px",
      }}>
        {children}
      </div>
    </div>
  );
};

export default ResponsiveScale;