// import React from 'react'

// const Together = () => {
//   return (
//     <div>
//       <p className='recoleta-bold lg:-mt-12 text-black py-4 font-900 text-center lg:text-[130px] text-[70px] mt-28'>We will * Together</p>
//     </div>
//   )
// }

// export default Together


import React from "react";

const Together = () => {
  return (
    <div className="w-full overflow-hidden py-2 mt-24 lg:mt-32">
      <div className="marquee flex whitespace-nowrap">
        <span className="recoleta-bold font-extrabold text-black
          text-[60px] sm:text-[80px] lg:text-[130px] px-10">
          We will * Together
        </span>

        {/* duplicate text for infinite effect */}
        <span className="recoleta-bold font-extrabold text-black
          text-[60px] sm:text-[80px] lg:text-[130px] px-10">
          We will * Together
        </span>
      </div>
    </div>
  );
};

export default Together;
