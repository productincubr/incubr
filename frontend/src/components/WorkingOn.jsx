// import React from 'react'
// import workingon1 from '../assets/workingon1.png'
// import workingon2 from '../assets/workingon2.png'
// import workingon3 from '../assets/workingon3.png'
// import workingon4 from '../assets/workingon4.png'

// const WorkingOn = () => {
//   return (
//     <div className="mt-36">
//         <div className='bg-white w-[98.7vw] h-[380px] pt-16 mb-64'>
//             <p className="nunito text-[35px] text-center underline">What We’re Working on</p>
//             <div className='flex justify-center gap-4 items-center mt-16'>
//                 <div className='h-[300px] bg-white w-[220px] border border-3 rounded-2xl border-[#F19D38] hover:shadow-2xl'>
//                     <div className=''>
//                         <img src={workingon1} alt="Working on 1" className='w-full h-[150px] rounded-t-xl'/>
//                     </div>
//                     <div className='p-4 bg-white'>
//                         <p className='nunito font-bold mb-3'>Indoor AQI</p>
//                         <p className='nunito'>Improving indoor air quality in Delhi NCR</p>
//                     </div>
//                 </div>
//                 <div className='h-[300px] bg-white w-[220px] border border-3 rounded-2xl border-[#F19D38] hover:shadow-2xl'>
//                     <div className=''>
//                         <img src={workingon2} alt="Working on 2" className='w-full h-[150px] object-cover rounded-t-xl'/>
//                     </div>
//                     <div className='p-4'>
//                         <p className='nunito font-bold mb-3'>B2B CRM</p>
//                         <p className='nunito'>Collaborative tools for doctors and nutritionists to impact patient health</p>
//                     </div>
//                 </div>
//                 <div className='h-[300px] bg-white w-[220px] border border-3 rounded-2xl border-[#F19D38] hover:shadow-2xl'>
//                     <div className=''>
//                         <img src={workingon3} alt="Working on 3" className='w-full h-[150px] object-cover rounded-t-xl'/>
//                     </div>
//                     <div className='p-4'>
//                         <p className='nunito font-bold mb-3'>Powdered Supplements</p>
//                         <p className='nunito'>Research on Indian herbs to support fertility in men and women</p>
//                     </div>
//                 </div>
//                 <div className='h-[300px] bg-white w-[220px] border border-3 rounded-2xl border-[#F19D38] hover:shadow-2xl'>
//                     <div className=''>
//                         <img src={workingon4} alt="Working on 4" className='w-full h-[150px] object-cover rounded-t-xl'/>
//                     </div>
//                     <div className='p-4 bg-white'>
//                         <p className='nunito font-bold mb-3'>FunctionalFood</p>
//                         <p className='nunito'>Clean-label, Indian-style protein cookies</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default WorkingOn



import React from "react";
import workingon1 from "../assets/workingon1.png";
import workingon2 from "../assets/workingon2.png";
import workingon3 from "../assets/workingon3.png";
import workingon4 from "../assets/workingon4.png";

const cards = [
  {
    img: workingon1,
    title: "Indoor AQI",
    desc: "Improving indoor air quality in Delhi NCR",
  },
  {
    img: workingon2,
    title: "B2B CRM",
    desc: "Collaborative tools for doctors and nutritionists to impact patient health",
  },
  {
    img: workingon3,
    title: "Powdered Supplements",
    desc: "Research on Indian herbs to support fertility in men and women",
  },
  {
    img: workingon4,
    title: "FunctionalFood",
    desc: "Clean-label, Indian-style protein cookies",
  },
];

const WorkingOn = () => {
  return (
    <section className="mt-12 lg:mt-24">
      <div className="h-auto py-16 mb-24">
        <p className="nunito text-[30px] font-bold sm:text-[30px] lg:text-[35px] text-center lg:underline">
          What We’re Working on
        </p>

        {/* Cards Container */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mt-12 lg:mt-16 px-4 lg:px-0">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="h-[300px] w-[270px] sm:w-[220px] lg:w-[220px] border-2 border-[#F19D38] rounded-2xl hover:shadow-2xl flex flex-col bg-white"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[150px] object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col">
                <p className="nunito font-bold mb-2 sm:mb-3">{card.title}</p>
                <p className="nunito text-sm sm:text-[14px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingOn;
