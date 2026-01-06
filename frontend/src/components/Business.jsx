

import React from "react";
import logoprodman02 from "../assets/logoprodman02.png";
import logoprodman03 from "../assets/logoprodman03.png";
import logoprodman04 from "../assets/logoprodman04.png";

const Business = () => {
  return (
    <section className="mt-20 lg:mt-36 mx-6 sm:mx-12 lg:mx-48">
      
      {/* Heading */}
      <p className="nunito text-[40px] font-bold sm:text-[30px] lg:text-[35px] text-center underline lg:underline">
        Our Businesses
      </p>

      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 mt-12 lg:mt-20 mb-12">
        
        <div className="text-center lg:text-left cursor-pointer">
          <img
            src={logoprodman04}
            alt="logo4"
            className="h-12 lg:h-20 mb-3 mx-auto lg:mx-0"
          />
          <a
            href="https://work-life-desk-vpn3.vercel.app/"
            target="_blank"
            className="inline-flex items-center mt-4 text-base lg:text-lg hover:text-[#F19D38]"
          >
            Coworking & Managed Offices
            <span className="material-symbols-outlined ml-2">
              arrow_outward
            </span>
          </a>
        </div>

        <div className="text-center lg:text-left">
          <img
            src={logoprodman03}
            alt="logo3"
            className="h-12 lg:h-20 mb-3 mx-auto lg:mx-0"
          />
          <a
            href="https://prodmaninc.com/design/"
            target="_blank"
            className="inline-flex items-center mt-4 text-base lg:text-lg hover:text-[#F19D38]"
          >
            Product & MVP Dev. & GTM
            <span className="material-symbols-outlined ml-2">
              arrow_outward
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Center Item */}
      <div className="flex justify-center">
        <div className="text-center lg:text-left">
          <img
            src={logoprodman02}
            alt="logo2"
            className="h-12 lg:h-20 mx-auto lg:mx-0"
          />
          <a
            href="https://prodmaninc.com/studio"
            target="_blank"
            className="inline-flex items-center mt-4 text-base lg:text-lg hover:text-[#F19D38]"
          >
            Media & Podcast Sets
            <span className="material-symbols-outlined ml-2">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Business;
