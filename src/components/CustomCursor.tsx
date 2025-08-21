import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.match(/^(H1|H2|H3|H4|H5|H6|P|SPAN|A)$/)) {
        setIsHoveringText(true);
      } else {
        setIsHoveringText(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-150 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Outer ring */}
      <div className="w-10 h-10 rounded-full border-2 border-primary opacity-50 animate-ping" />

      {/* Inner dot (becomes transparent when hovering text) */}
      <div
        className={`w-3 h-3 -mt-6 -ml-6 rounded-full transition-colors duration-300 ${
          isHoveringText ? "bg-transparent" : "bg-primary"
        }`}
      />
    </div>
  );
};

export default CustomCursor;
