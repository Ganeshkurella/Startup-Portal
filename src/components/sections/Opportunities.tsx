"use client";

import { motion } from "framer-motion";
import { hyderabadData } from "@/app/data";
import { ArrowRight } from "lucide-react";

export function Opportunities() {
  return (
    <section id="opportunities" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">The Talent Frontier</h2>
          
          <div className="insight-box border-l-orange-500">
            <p className="text-gray-700 text-lg font-medium m-0">
              Skyroot's rocketry launches and massive micro-chip fab demands have morphed the job market. This isn't just software anymore—<strong className="text-orange-600">hardware is eating the city's talent pool.</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          {hyderabadData.opportunities.map((opp: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50/50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {opp.role}
                </h3>
              </div>
              
              <div className="md:w-1/6 mb-4 md:mb-0">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 shadow-sm group-hover:border-orange-200 transition-colors">
                  {opp.demand} Demand
                </span>
              </div>
              
              <div className="md:w-1/2 flex items-center justify-between">
                <p className="text-gray-600 font-medium text-sm leading-relaxed pr-4">
                  {opp.insight}
                </p>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-indigo-500 transition-colors shrink-0 -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
