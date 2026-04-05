"use client";

import { motion } from "framer-motion";
import { investorsList } from "@/app/data";
import { Landmark, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export function InvestmentGuide() {
  return (
    <section id="funding" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-sm font-bold tracking-wide mb-6">
            <Landmark size={16} /> Funding Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Who funds startups in Hyderabad?
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Don't pitch blind. Understand exactly what stage of funding you're in, who operates in the city, and what they actually expect before writing you a check.
          </p>
        </div>

        <div className="space-y-6">
          {investorsList.map((investor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row gap-8 lg:items-center hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)] hover:border-indigo-300 transition-all cursor-pointer"
            >
              {/* Type and Stage Badge */}
              <div className="lg:w-1/4 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{investor.type}</h3>
                <div className="inline-flex py-1.5 px-3 bg-gray-100 rounded-lg text-gray-700 font-bold text-sm tracking-wide">
                  Target: {investor.stage}
                </div>
              </div>

              {/* Specific Hyderabad Entities */}
              <div className="lg:w-1/4 shrink-0">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Key Local Players</p>
                <p className="text-gray-900 font-bold leading-relaxed">
                  {investor.entities}
                </p>
              </div>

              {/* Expectations vs Advice */}
              <div className="lg:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
                  <p className="text-sm text-indigo-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <CheckCircle2 size={16} /> What they look for
                  </p>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">
                    {investor.focus}
                  </p>
                </div>
                <div className="bg-teal-50/50 p-5 rounded-2xl border border-teal-100">
                  <p className="text-sm text-teal-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <AlertCircle size={16} /> Harsh Advice
                  </p>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">
                    {investor.advice}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.a
            href="https://t-hub.co/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20 transition-all"
          >
            Apply to T-Fund (Govt Portal) <ArrowRight size={18} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
