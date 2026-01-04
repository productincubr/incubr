// import React,{ useState } from 'react'
// import logo from '../assets/logo.png'

// const Header = () => {
//     const [activeTab, setActiveTab] = useState("Services");

//   const tabs = ["Services", "Masterclass", "Contact Us"];

//   return (
//     <div className='flex justify-between items-center h-20 mx-24 mt-3 sticky top-0 bg-[#FFFAE4] z-50'>
//       <div>
//         <img src={logo} alt="Incubr Logo" className='h-8'/>
//       </div>
//      <div className="bg-[#D9D9D9] h-15 rounded-4xl flex justify-between gap-2 items-center py-3 px-3">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setActiveTab(tab)}
//           className={`
//             px-16 py-2 rounded-4xl transition-all duration-300
//             ${
//               activeTab === tab
//                 ? "bg-[#F19D38] text-white"
//                 : "text-gray-700 hover:text-gray-900"
//             }
//           `}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Header


import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

const Header = () => {
  const [activeTab, setActiveTab] = useState("Services");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = ["Services", "Masterclass", "Contact Us"];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFAE4]">
      <div className="flex items-center h-20 mx-4 md:mx-12 lg:mx-24 relative">
        
        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            md:static md:translate-x-0
          "
        >
          <img src={logo} alt="Incubr Logo" className="h-8" />
        </div>

        {/* Desktop / Tablet Tabs */}
        <div className="hidden md:flex ml-auto bg-[#D9D9D9] rounded-4xl items-center py-3 px-3 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-10 lg:px-16 py-2 rounded-4xl transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-[#F19D38] text-white"
                    : "text-gray-700 hover:text-gray-900"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFAE4] px-6 pb-6">
          <div className="bg-[#D9D9D9] rounded-2xl flex flex-col gap-3 p-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMenuOpen(false);
                }}
                className={`
                  py-3 rounded-xl text-center transition-all
                  ${
                    activeTab === tab
                      ? "bg-[#F19D38] text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
