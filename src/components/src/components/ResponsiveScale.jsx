import React, { useEffect, useRef, useState } from "react";

const ResponsiveScale = ({ children }) => {
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(0);
  const contentRef = useRef(null);
  const designWidth = 1600;

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const newScale = screenWidth / designWidth;
      setScale(newScale);
      if (contentRef.current) {
        const originalHeight = contentRef.current.offsetHeight;
        setScaledHeight(originalHeight * newScale);
      }
    };

    // Small delay to let content render first
    setTimeout(updateScale, 100);
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: scaledHeight || "auto",
        overflow: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        ref={contentRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: "1600px",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ResponsiveScale;