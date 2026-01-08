import React from "react";
import client1 from "../assets/niharika.jpeg";
import client2 from '../assets/NistantTesti.jpeg';
import client3 from '../assets/parulTesti.jpeg';
import client4 from '../assets/sanghaTesti.jpeg';
import client5 from '../assets/sumeetTesti.jpeg';
import client6 from '../assets/vasiTesti.jpeg';

const Clients = () => {
  const testimonials = [
    { img: client1, name: "Client 1" },
    { img: client2, name: "Client 2" },
    { img: client3, name: "Client 3" },
    { img: client4, name: "Client 4" },
    { img: client5, name: "Client 5" },
    { img: client6, name: "Client 6" },
  ];

  // This is the key: duplicate the array to create a seamless loop.
  // The structure becomes [A,B,C...A,B,C...].
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="mt-24 lg:mt-48 py-8">
      <p className="nunito text-[30px] font-bold sm:text-[35px] lg:text-[48px] text-center underline lg:underline mb-12">
        What the Clients Say
      </p>

      <div
        className="w-full overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max animate-scroll-testimonial hover-pause-scroll">
          {/* Render the duplicated list. The CSS animation will do the rest. */}
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="flex-shrink-0 w-80 h-80 sm:w-96 sm:h-96 group cursor-pointer p-4"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-black bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-scale-down"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
