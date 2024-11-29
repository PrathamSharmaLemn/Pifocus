import React, { useRef, useState } from 'react';

const Marquee = ({ text, speed = 10 }) => {
  const marqueeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative overflow-hidden bg-black text-white whitespace-nowrap group cursor-grab active:cursor-grabbing"
      ref={marqueeRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {/* Animated content */}
      <div
        className="inline-block px-8 transition-all group-hover:animate-paused"
        style={{
          animation: `marquee linear ${speed}s infinite`,
        }}
      >
        {text}
      </div>
      <div
        className="inline-block px-8 transition-all group-hover:animate-paused"
        style={{
          animation: `marquee linear ${speed}s infinite`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Marquee;
