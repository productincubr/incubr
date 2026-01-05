import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F19D38] w-full flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 py-12 lg:py-12">
      
      {/* Left Text */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
        <p className="recoleta-bold font-bold text-[38px] sm:text-[48px] lg:text-[75px] leading-tight lg:leading-[1.1] w-full lg:w-[60%]">
        Let’s Connect
        </p>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-3 items-center justify-center text-center lg:items-start   lg:text-left w-full lg:w-[50%]">
        <p className="font-semibold text-base sm:text-md">
        We are eager to learn, help, <br /> collaborate leveraging tech and creativity. <br /> Let’s connect to create impact.
        </p>
        <Link to='/contact' className="bg-white rounded-3xl mt-6 px-8 sm:px-10 py-2 hover:shadow-2xl cursor-pointer">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
