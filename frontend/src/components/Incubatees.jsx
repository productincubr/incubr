// import React from 'react'
// import photogpt from '../assets/photogpt.png'
// import strange from '../assets/strange.png'
// import volar from '../assets/volar.png'
// import ethi from '../assets/ethi.png'
// import lean from '../assets/lean.png'

// const Incubatees = () => {
//   return (
//     <div className="mt-48 mx-48">
//       <p className="nunito text-[35px] text-center underline">Our Incubatees and some Investments</p>
//       <div className='flex justify-center gap-4 mt-20 mb-4'>
//         <div className='border border-1 border-black hover:shadow-2xl bg-white h-40 w-80 flex justify-center items-center'>
//             <img src={volar} alt='volar' className='h-8'/>
//         </div>
//         <div className='border border-1 border-black hover:shadow-2xl bg-white h-40 w-80 flex justify-center items-center'>
//             {/* <img  alt='volar' className='h-8'/> */}
//         </div>
//         <div className='border border-1 border-black hover:shadow-2xl bg-white h-40 w-80 flex justify-center items-center'>
//             <img src={photogpt} alt='volar' className='h-8'/>
//         </div>
//       </div>
//       <div className='flex justify-center gap-4 mt-4 mb-12'>
//         <div className='border border-1 border-black hover:shadow-2xl bg-white h-40 w-80 flex justify-center items-center'>
//             <img src={strange} alt='volar' className='h-24'/>
//         </div>
//         <div className='border border-1 border-black hover:shadow-2xl bg-white h-40 w-80 flex justify-center items-center'>
//             <img src={ethi}  alt='volar' className='h-16'/>
//         </div>
//         <div className='border border-1 border-black hover:shadow-2xl bg-white h-40 w-80 flex justify-center items-center'>
//             <img src={lean} alt='volar' className='h-20'/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Incubatees



import React from "react";
import photogpt from "../assets/photogpt.png";
import strange from "../assets/strange.png";
import volar from "../assets/volar.png";
import ethi from "../assets/ethi.png";
import lean from "../assets/lean.png";

const Incubatees = () => {
  const firstRow = [
    { src: volar, alt: "volar", height: "h-8" },
    { src: "", alt: "placeholder", height: "h-8" },
    { src: photogpt, alt: "photogpt", height: "h-8" },
  ];

  const secondRow = [
    { src: strange, alt: "strange", height: "h-24" },
    { src: ethi, alt: "ethi", height: "h-16" },
    { src: lean, alt: "lean", height: "h-20" },
  ];

  const renderRow = (row) => (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 ">
      {row.map((item, idx) => (
        <div
          key={idx}
          className="border border-black hover:shadow-2xl bg-white h-40 w-60 md:w-80 flex justify-center items-center"
        >
          {item.src && <img src={item.src} alt={item.alt} className={`${item.height}`} />}
        </div>
      ))}
    </div>
  );

  return (
    <section className="mt-24 sm:mt-48 sm:mx-12 lg:mx-48">
      <p className="nunito text-[30px] lg:mb-24 font-bold sm:text-[30px] lg:text-[35px] text-center lg:underline">
        Our Incubatees and some Investments
      </p>

      {/* First Row */}
      {renderRow(firstRow)}

      {/* Second Row */}
      {renderRow(secondRow)}
    </section>
  );
};

export default Incubatees;
