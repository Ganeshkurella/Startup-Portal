"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hyderabadData } from "@/app/data";
import { ArrowRight, ChevronDown, ChevronUp, UserCheck, Flame, Briefcase } from "lucide-react";

export function Opportunities() {
  const [expandedOpp, setExpandedOpp] = useState<number | null>(null);

  return (
    <section id="opportunities" className="py-24 relative bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">The Talent Frontier</h2>
          
          <div className="insight-box border-l-orange-500 bg-orange-50 p-5 rounded-2xl border border-orange-100">
            <p className="text-gray-800 text-lg font-medium m-0">
              Skyroot's rocketry launches and massive micro-chip fab demands have morphed the job market. This isn't just software anymore—<strong className="text-orange-600">hardware is eating the city's talent pool.</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          {hyderabadData.opportunities.map((opp: any, i: number) => {
            const isExpanded = expandedOpp === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group flex flex-col p-6 bg-gray-50/50 border rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-300 transition-all duration-300 cursor-pointer ${isExpanded ? 'border-orange-300 shadow-md ring-4 ring-orange-50 bg-white' : 'border-gray-200'}`}
                onClick={() => setExpandedOpp(isExpanded ? null : i)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {opp.role}
                    </h3>
                  </div>
                  
                  <div className="md:w-1/6">
                    <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 shadow-sm transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200">
                      {opp.demand} Demand
                    </span>
                  </div>
                  
                  <div className="md:w-1/2 flex items-center justify-between">
                    <p className="text-gray-600 font-medium text-sm leading-relaxed pr-4">
                      {opp.insight}
                    </p>
                    {isExpanded ? <ChevronUp className="h-6 w-6 text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0" /> : <ChevronDown className="h-6 w-6 text-gray-300 group-hover:text-indigo-500 transition-colors shrink-0" />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                            <UserCheck size={14} className="text-slate-400" /> Entry Difficulty
                          </p>
                          <p className={`text-lg font-bold ${opp.entryDifficulty === 'Very Hard' ? 'text-red-600' : opp.entryDifficulty === 'Hard' ? 'text-orange-600' : 'text-emerald-600'}`}>
                            {opp.entryDifficulty}
                          </p>
                        </div>

                        <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                            <Flame size={14} className="text-indigo-400" /> Opportunity Level
                          </p>
                          <p className="text-lg font-bold text-indigo-700">
                            {opp.opportunityLevel}
                          </p>
                        </div>

                        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                          <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                            <Briefcase size={14} className="text-emerald-400" /> Hiring Potential
                          </p>
                          <p className="text-lg font-bold text-emerald-700">
                            {opp.hiringPotential}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
