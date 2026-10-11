import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FFFAE4] py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Sprint Incubation | Zero to One
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            A 7-day sprint to turn an idea into a launch-ready brand.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An intensive, founder-led program to build the strategic, creative, and
            commercial foundation - fast, focused, and done right.
          </p>
          <p className="text-lg font-semibold text-[#F19D38] mt-4">
            Not acceleration. Preparation.
          </p>
        </motion.div>

        <motion.section className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Sprint Incubation</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Most brands fail not because of lack of effort, but because the foundation is weak.</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Sprint Incubation exists to bring clarity before capital, structure before scale, and direction before execution.</p>
            <p className="text-lg font-semibold text-[#F19D38]">We believe in building once - and building well.</p>
          </div>
        </motion.section>

        <motion.section className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Build (In 7 Days)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Brand', 'Positioning, purpose, narrative, visual and verbal brand guide'],
              ['Product', 'UX-UI thinking, MVP definition, website architecture'],
              ['Growth', 'Go-to-market strategy, sales framework, performance marketing logic'],
              ['Readiness', 'Launch checklist, 30-60 day execution roadmap'],
            ].map(([title, description]) => (
              <div className="bg-gradient-to-br from-[#F19D38]/10 to-[#E88B28]/10 rounded-2xl p-6 border-2 border-[#F19D38]/30 shadow-md" key={title}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold text-[#F19D38] mt-6">Everything essential. Nothing unnecessary.</p>
        </motion.section>

        <motion.section className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The 7-Day Structure</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <ul className="space-y-4 text-lg text-gray-700">
              {[
                ['Days 1-2:', 'Brand foundation and strategic clarity'],
                ['Day 3:', 'Product thinking and MVP structure'],
                ['Day 4:', 'Marketing strategy workshop'],
                ['Day 5:', 'Sales strategy workshop'],
                ['Day 6:', 'Performance marketing workshop'],
                ['Day 7:', 'Launch readiness and execution plan'],
              ].map(([day, description]) => <li className="flex items-start" key={day}><span className="font-bold text-[#F19D38] mr-3">{day}</span><span>{description}</span></li>)}
            </ul>
            <p className="text-center text-lg font-semibold text-[#F19D38] mt-6">Short. Focused. Outcome-driven.</p>
          </div>
        </motion.section>

        <motion.section className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who This Is For</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              {['Founders starting from scratch', 'Early-stage teams seeking clarity', 'Entrepreneurs who value structure', 'Brands that want to avoid expensive mistakes'].map((item) => <li className="flex items-center" key={item}><span className="w-2 h-2 bg-[#F19D38] rounded-full mr-3" />{item}</li>)}
            </ul>
            <p className="text-lg font-semibold text-[#F19D38]">If you prefer discipline over chaos, this is for you.</p>
          </div>
        </motion.section>

        <motion.section className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You Leave With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['A clearly positioned brand', 'A defined MVP and website structure', 'Marketing and sales clarity', 'A confident path to launch'].map((item) => <div className="bg-gradient-to-r from-[#F19D38] to-[#E88B28] rounded-xl p-6 text-white shadow-lg" key={item}><p className="text-lg font-medium">{item}</p></div>)}
          </div>
          <p className="text-center text-lg font-semibold text-[#F19D38] mt-6">You do not leave with ideas. You leave with direction.</p>
        </motion.section>

        <motion.section className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Belief</h2>
          <div className="bg-gradient-to-br from-[#F19D38]/20 to-[#E88B28]/20 rounded-2xl p-12 border-2 border-[#F19D38]/30 shadow-xl">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Good brands are not rushed.</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">They are prepared.</p>
            <p className="text-xl text-gray-700">Sprint Incubation is built on that principle.</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
