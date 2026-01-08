
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
        <p className="nunito text-[30px] font-bold sm:text-[35px] lg:text-[48px] text-center underline lg:underline">
          What We're Working on
        </p>

        {/* Cards Container */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mt-12 lg:mt-16 px-4 lg:px-0">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="h-[340px] w-[280px] sm:w-[240px] lg:w-[260px] border-2 border-[#F19D38] rounded-2xl hover:shadow-2xl flex flex-col bg-white transition-all duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="w-full h-[170px] object-cover rounded-t-xl"
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
