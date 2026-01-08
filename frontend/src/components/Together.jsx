

import React from "react";

const Together = () => {
  return (
    <div className="relative w-full overflow-hidden py-16 lg:py-24 mt-24 lg:mt-32">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 wave-pattern"></div>

      {/* Scrolling Text */}
      <div className="relative z-10 flex whitespace-nowrap">
        <div className="marquee-smooth flex">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className="recoleta-bold font-extrabold gradient-text
                text-[60px] sm:text-[80px] lg:text-[130px]  hover-scale"
            >Together We Will ✨
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="glow-bottom"></div>
    </div>
  );
};

export default Together;
