
import React, { useEffect, useRef } from "react";
import herovideo from '../assets/incubrherovideo.mp4'

const Hero = () => {
  const videoRef = useRef(null);
  const [shouldPlay, setShouldPlay] = React.useState(false);

  useEffect(() => {
    // Intersection Observer for lazy loading video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.load();
            setTimeout(() => {
              setShouldPlay(true);
              videoRef.current.play();
            }, 500);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-around items-center mx-6 sm:mx-12 lg:mx-24 mt-4 lg:mt-12 gap-12">
      
      {/* TEXT */}
      {/* yha es An enviroment mein ye font family use hogi = FONTSPRING DEMO - Recoleta Alt Bold */}
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <p className="recoleta-bold font-bold text-[38px] sm:text-[42px] lg:text-[60px] leading-tight lg:leading-[1.1]">
          An environment designed to make ideas real
        </p>

        <p className="nunito mt-6 lg:mt-8 font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.5] sm:leading-[1.7] lg:leading-[1.6]">
          <span className="bg-[#F19D38] px-1 mb-3">A flexible workspace</span> where
          founders turn ideas into MVPs.{" "}
          <span className="bg-[#F19D38] px-1">Built for fast execution</span> and
          real world launch.
        </p>
      </div>

      {/* VIDEO */}
      <div className="w-full sm:w-[28%] lg:w-[28%] flex justify-center">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className="w-full max-w-sm lg:max-w-md rounded-xl shadow-lg"
          style={{ backgroundColor: '#FFFAE4' }}
        >
          <source src={herovideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;

