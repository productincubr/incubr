// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='flex justify-around items-center mx-24 mt-24'>
//         <div className='w-[55%]'>
//             <p className='recoleta-bold font-700 text-[75px] leading-18'>An environment designed to make ideas real</p>
//             <p className='nunito mt-8 font-400 text-[28px] leading-8'><span className='bg-[#F19D38]'>A flexible workspace</span> where founders turn ideas into MVPs. <span className='bg-[#F19D38]'>Built for fast execution</span> and real world launch.</p>
//         </div>
//         <div className='w-[45%]'>
//             <img/>
//         </div>
//     </div>
//   )
// }

// export default Hero


import React from "react";
import herovideo from '../assets/FINAL.mp4'

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-around items-center mx-6 sm:mx-12 lg:mx-24 mt-4 lg:mt-12 gap-12">
      
      {/* TEXT */}
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <p className="recoleta-bold font-bold text-[38px] sm:text-[48px] lg:text-[75px] leading-tight lg:leading-[1.1]">
          An environment designed to make ideas real
        </p>

        <p className="nunito mt-6 lg:mt-8 font-normal text-[18px] sm:text-[22px] lg:text-[28px] leading-7 lg:leading-8">
          <span className="bg-[#F19D38] px-1">A flexible workspace</span> where
          founders turn ideas into MVPs.{" "}
          <span className="bg-[#F19D38] px-1">Built for fast execution</span> and
          real world launch.
        </p>
      </div>

      {/* IMAGE */}
      <div className="w-full sm:w-[28%] lg:w-[28%] flex justify-center">
        <video
          src={herovideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-sm lg:max-w-md rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

