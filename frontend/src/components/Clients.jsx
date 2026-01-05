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

  // Create multiple copies for truly seamless infinite scroll
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials
  ];

  return (
    <section className="mt-24 lg:mt-48 py-8">
      {/* Heading */}
      <p className="nunito text-[30px] font-bold sm:text-[30px] lg:text-[35px] text-center lg:underline mb-12">
        What the Clients Say
      </p>

      {/* Centered Container with Fixed Max-Width */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Scrolling Container - Will-change for performance */}
        <div className="relative">
          <div className="flex gap-8 animate-scroll-left hover:pause-animation will-change-transform">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-80 sm:w-96 sm:h-96 group cursor-pointer p-2 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-black shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-scale-down"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
