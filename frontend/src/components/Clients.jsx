// import React from 'react'
// import quotes from '../assets/quotes.png'
// import client1 from '../assets/client1.png'

// const Clients = () => {
//   return (
//     <div className="mt-48 mx-48 flex flex-col justify-center items-center">
//       <p className="nunito text-[35px] text-center underline">What the Clients Say</p>
//       <img src={quotes} alt="quotes" className='mt-8 h-16 relative top-0 right-80 z-1'/>
//       <div className='border border-2 border-black bg-white h-auto w-[750px] -mt-6 rounded-2xl p-16 relative'>
//         <p className='nunito text-[17px]'>Gopal is my mentor at the incubation program run by Atal Innovation Center - RNTU - Wadhwani Foundation. Top 3 traits that I absolutely admire about him:</p>
//             <ol className='mt-8 nunito text-[17px]'>
//                 <li className='mt-2'>1. His workshops leave you with direct action items customised to your needs</li>
//                 <li className='mt-2'>2. His suggestions are very practical and this is a testimony to the fact that the content of his workshop stems from his personal experience.</li>
//                 <li className='mt-2'>3. He never gives generic gyaan, he always targets a specific topic and backs it up with a bunch of real-life examples which makes it relatable and enjoyable for budding entrepreneurs like me.</li>
//             </ol>
//             <p className='nunito mt-8 text-[17px]'>Thank you Gopal for your mentorship. I've benefitted a lot by implementing your advice. I am definitely 2 steps ahead in my journey as a business owner.</p>
//       </div>
//       <img src={client1} alt="client1" className='mt-8 h-32 relative bottom-104 left-94 z-1'/>
//       <p className='nunito text-[26px] w-38 font-700 bg-white relative bottom-102 left-98 z-1'>Niharika Kolte Alekar</p>
//     </div>
//   )
// }

// export default Clients




import React from "react";
import quotes from "../assets/quotes.png";
import client1 from "../assets/client1.png";

const Clients = () => {
  return (
    <section className="mt-24 lg:mt-48 flex justify-center">
      {/* Wrapper */}
      <div className="relative w-full max-w-[900px] px-6 lg:px-12">

        {/* Heading */}
        <p className="nunito text-[30px] font-bold sm:text-[30px] lg:text-[35px] text-center lg:underline lg:mb-16">
          What the Clients Say
        </p>

        {/* Mobile: Client Image + Name (centered) */}
        <div className="lg:hidden flex flex-col items-center mt-6 mb-8">
          <img
            src={client1}
            alt="client"
            className="h-24 sm:h-28 shadow-lg"
          />
          <p className="nunito font-bold text-[20px] sm:text-[22px] mt-3 text-center">
            Niharika Kolte Alekar
          </p>
        </div>

        {/* Desktop: Quotes (outside card, top left) */}
        <img
          src={quotes}
          alt="quotes"
          className="h-10 sm:h-12 absolute left-8 top-[200px] sm:top-[270px]  lg:top-[85px] z-10"
        />

        {/* Desktop: Client Image (outside card, right side overlap) */}
        <img
          src={client1}
          alt="client"
          className="hidden lg:block absolute h-32 -right-8 top-[100px] z-20"
        />

        {/* Card with proper padding on desktop to avoid overlap */}
        <div className="
          border-2 border-black bg-white
          rounded-2xl
          p-6 sm:p-10 
          lg:pl-20 lg:pr-24 lg:pt-12 lg:pb-16
          mt-0 lg:mt-0
        ">
          <p className="nunito text-[14px] sm:text-[16px] lg:text-[17px]">
            Gopal is my mentor at the incubation program run by Atal Innovation Center - RNTU - Wadhwani Foundation. Top 3 traits that I absolutely admire about him:
          </p>

          <ol className="mt-6 nunito text-[14px] sm:text-[16px] lg:text-[17px] list-decimal list-inside space-y-2">
            <li>
              His workshops leave you with direct action items customised to your needs
            </li>
            <li>
              His suggestions are very practical and this is a testimony to the fact that the content of his workshop stems from his personal experience.
            </li>
            <li>
              He never gives generic gyaan, he always targets a specific topic and backs it up with real-life examples.
            </li>
          </ol>

          <p className="nunito mt-6 text-[14px] sm:text-[16px] lg:text-[17px]">
            Thank you Gopal for your mentorship. I've benefitted a lot by implementing your advice. I am definitely 2 steps ahead in my journey as a business owner.
          </p>
        </div>

        {/* Desktop: Client Name (below card, aligned with image) */}
        <p className="
          hidden lg:block
          nunito font-bold
          text-[24px]
          bg-white
          px-4 py-2
          absolute
          -right-12 top-[240px]
          text-center
          shadow-sm
          rounded-lg
        ">
          Niharika Kolte<br/>Alekar
        </p>

      </div>
    </section>
  );
};

export default Clients;





// import React from "react";
// import quotes from "../assets/quotes.png";
// import client1 from "../assets/client1.png";

// const Clients = () => {
//   return (
//     <section className="mt-24 sm:mt-48 flex flex-col items-center justify-center mx-6 sm:mx-12 lg:mx-48">
      
//       {/* Heading */}
//       <p className="nunito text-[35px] -mx-6 font-bold sm:text-[30px] lg:text-[35px] text-center lg:underline">
//         What the Clients Say
//       </p>

//       {/* Quotes Image */}
//       <img
//         src={quotes}
//         alt="quotes"
//         className="mt-4 sm:mt-8 h-8 sm:h-16 relative top-8 right-36 lg:relative lg:top-10 lg:right-80 md:right-64 sm:right-64 z-10"
//       />

//       {/* Testimonial Card */}
//       <div className="border-2 border-black bg-white h-auto w-full sm:w-[600px] lg:w-[750px] mt-4 -mt-6 rounded-2xl p-8 pt-20 sm:p-16 relative">
//         <p className="nunito text-[15px] sm:text-[17px]">
//           Gopal is my mentor at the incubation program run by Atal Innovation Center - RNTU - Wadhwani Foundation. Top 3 traits that I absolutely admire about him:
//         </p>

//         <ol className="mt-4 sm:mt-8 nunito text-[15px] sm:text-[17px] list-decimal list-inside">
//           <li className="mt-2">
//             His workshops leave you with direct action items customised to your needs
//           </li>
//           <li className="mt-2">
//             His suggestions are very practical and this is a testimony to the fact that the content of his workshop stems from his personal experience.
//           </li>
//           <li className="mt-2">
//             He never gives generic gyaan, he always targets a specific topic and backs it up with a bunch of real-life examples which makes it relatable and enjoyable for budding entrepreneurs like me.
//           </li>
//         </ol>

//         <p className="nunito mt-4 sm:mt-8 text-[15px] sm:text-[17px]">
//           Thank you Gopal for your mentorship. I've benefitted a lot by implementing your advice. I am definitely 2 steps ahead in my journey as a business owner.
//         </p>
//       </div>

//       {/* Client Image */}
//       <img
//         src={client1}
//         alt="client1"
//         className="mt-4 sm:mt-8 h-18 sm:h-32 z-10 relative bottom-180 left-38 lg:bottom-104 lg:left-94 md:bottom-180 md:left-72 sm:bottom-182 sm:left-58 xs:bottom-160 mx-auto"
//       />

//       {/* Client Name */}
//       <p className="nunito text-[20px] lg:w-38 lg:text-left sm:text-[26px] font-bold lg:bg-white z-10 relative bottom-164 left-22 bg-white md:bottom-182 md:left-76 sm:bottom-184 sm:left-48 lg:bottom-102 lg:left-98 mx-auto mt-2 sm:mt-0 text-center">
//         Niharika Kolte Alekar
//       </p>
//     </section>
//   );
// };

// export default Clients;
