import React from 'react';
import { BookOpen } from 'lucide-react';

const Masterclass = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#FFFAE4] flex items-center justify-center px-4 py-16">
      <div className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-[#F19D38] to-[#E88B28] rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <BookOpen className="text-white" size={64} />
          </div>
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F19D38] to-[#E88B28] bg-clip-text text-transparent pb-4 ">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-xl md:text-[28px] text-gray-700 mb-4">
          Our Masterclass section is under development
        </p>
        <p className="text-lg text-gray-600">
          Stay tuned for amazing learning experiences!
        </p>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-3">
          <div className="w-3 h-3 bg-[#F19D38] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-[#F19D38] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-[#F19D38] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Masterclass;
