import React from "react";
import { motion } from "framer-motion";
import photogpt from "../assets/photogpt.png";
import strange from "../assets/strange.png";
import volar from "../assets/volar.png";
import ethi from "../assets/ethi.png";
import lean from "../assets/lean.png";

const Incubatees = () => {
  const firstRow = [
    { src: volar, alt: "volar", height: "h-8", link: "https://www.volaralta.com/", category: "Past" },
    { src: strange, alt: "strange", height: "h-24", link: "https://thestrangeco.com/", category: "Past" },
    { src: photogpt, alt: "photogpt", height: "h-8", link: "https://www.photogptai.com/", category: "Past" },
  ];

  const secondRow = [
    { src: "https://www.outblogai.com/logo.svg", alt: "placeholder", height: "h-8", link: "https://www.outblogai.com/", category: "Ongoing" },
    { src: ethi, alt: "ethi", height: "h-16", link: "https://ethi.in/", category: "Ongoing" },
    { src: lean, alt: "lean", height: "h-20", link: "#", category: "Ongoing" },
  ];

  // Animation variants for cards
  const cardVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -100,
    },
    hiddenRight: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const renderRow = (row, direction) => (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 mb-4">
      {row.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="incubatee-card border-2 border-black h-40 w-60 md:w-80 flex justify-center items-center relative group transition-all duration-700 overflow-hidden"
          
          // Framer Motion scroll-based animation - Repeatable & Reversible
          initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
          whileInView="visible"
          viewport={{ 
            once: false,  // Animation runs every time
            amount: 0.5,  // Trigger when 50% of card is visible
            margin: "0px 0px -100px 0px"  // Start animation slightly before card enters
          }}
          variants={cardVariants}
          transition={{
            delay: idx * 0.1,  // Staggered animation
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {/* Animated Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#feba68] to-[#fda343] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></div>
          
          {/* Image Container */}
          <div className="relative z-10 transition-all duration-300 group-hover:scale-110">
            {item.src && (
              <img 
                src={item.src} 
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`${item.height} transition-all duration-300`} 
              />
            )}
          </div>

          {/* Category Badge */}
          <span className="absolute bottom-3 right-3 z-10 bg-gradient-to-r from-[#F19D38] to-[#E88B28] text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {item.category}
          </span>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          </div>
        </motion.a>
      ))}
    </div>
  );

  return (
    <section className="mt-24 sm:mt-48 sm:mx-12 lg:mx-48">
      {/* Heading */}
      <motion.p 
        className="nunito text-[30px] lg:mb-12 font-bold sm:text-[35px] lg:text-[48px] text-center lg:underline"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Incubatees and Investments
      </motion.p>

      {/* First Row - Slide from Right */}
      {renderRow(firstRow, 'right')}

      {/* Second Row - Slide from Left */}
      {renderRow(secondRow, 'left')}
    </section>
  );
};

export default Incubatees;
