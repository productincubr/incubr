// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='bg-[#F19D38] h-[400px] flex justify-between items-center px-24'>
//       <div className='flex flex-col'>
//         <p className='recoleta-bold font-700 text-[75px] leading-18 w-[50%]'>Let’s </p>
//         <p  className='recoleta-bold font-700 text-[75px] leading-18 w-[60%]'>sit together sometime</p>
//       </div>
//       <div className='w-[50%]'>
//         <p className='font-semibold text-md'>Ready to step up your community management and show up more consistently online with relevant content?</p>
//         <button className='bg-white rounded-3xl mt-6 px-10 py-2 hover:border-1 hover:border-black hover:shadow-2xl cursor-pointer'>Contact Us</button>
//       </div>
//     </div>
//   )
// }

// export default Footer



import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F19D38] w-[107vw] lg:w-[99vw] flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 py-12 lg:py-12">
      
      {/* Left Text */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
        <p className="recoleta-bold font-bold text-[38px] sm:text-[48px] lg:text-[75px] leading-tight lg:leading-[1.1] w-full lg:w-[50%]">
          Let’s
        </p>
        <p className="recoleta-bold font-bold text-[38px] sm:text-[48px] lg:text-[75px] leading-tight lg:leading-[1.1] w-full lg:w-[60%]">
          sit together sometime
        </p>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[50%]">
        <p className="font-semibold text-base sm:text-md">
          Ready to step up your community management and show up more consistently online with relevant content?
        </p>
        <button className="bg-white rounded-3xl mt-6 px-8 sm:px-10 py-2 hover:border hover:border-black hover:shadow-2xl cursor-pointer">
          Contact Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;
