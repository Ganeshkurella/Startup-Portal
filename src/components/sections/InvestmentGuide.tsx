"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { investorsList } from "@/app/data";
import { Landmark, ArrowRight, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Clock, XOctagon, FileWarning } from "lucide-react";

export function InvestmentGuide() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="funding" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          {investorsList.map((investor: any, index: number) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group bg-white text-left rounded-3xl p-8 border transition-colors duration-500 cursor-pointer ${isExpanded ? 'border-indigo-300 shadow-xl ring-4 ring-indigo-50 z-20' : 'border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] hover:border-indigo-200 z-10'} relative`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                  {/* Type and Stage Badge */}
                  <div className="lg:w-1/4 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{investor.type}</h3>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex py-1.5 px-3 bg-gray-100 rounded-lg text-gray-700 font-bold text-sm tracking-wide mb-4 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700"
                    >
                      Target: {investor.stage}
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 transition-colors group-hover:text-indigo-400">Key Players</p>
                      <p className="text-gray-700 font-semibold text-sm leading-snug">
                        {investor.entities}
                      </p>
                    </div>
                  </div>

                  {/* Expectations vs Advice */}
                  <div className="lg:w-3/4 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-indigo-50/30 p-5 rounded-2xl border border-slate-100 group-hover:border-indigo-100/50">
                        <p className="text-sm text-slate-700 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 transition-colors group-hover:text-indigo-700">
                          <CheckCircle2 size={16} className="text-slate-500 group-hover:text-indigo-500 transition-colors" /> What they look for
                        </p>
                        <p className="text-gray-700 font-medium text-sm leading-relaxed">
                          {investor.focus}
                        </p>
                      </div>
                      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-teal-50/30 p-5 rounded-2xl border border-slate-100 group-hover:border-teal-100/50 flex flex-col justify-between">
                        <div>
                          <p className="text-sm text-slate-700 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 transition-colors group-hover:text-teal-700">
                            <AlertCircle size={16} className="text-slate-500 group-hover:text-teal-500 transition-colors" /> General Advice
                          </p>
                          <p className="text-gray-700 font-medium text-sm leading-relaxed">
                            {investor.advice}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expand Toggle */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-2">
                      <span className={`text-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-300 ${isExpanded ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}`}>
                        Tactical Playbook
                      </span>
                      <ChevronDown size={18} className={`transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isExpanded ? 'rotate-180 text-indigo-500' : 'text-gray-300 group-hover:text-indigo-400'}`} />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                          animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                          exit={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 pb-2">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl relative overflow-hidden transition-colors hover:bg-indigo-50">
                              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                              <p className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <Clock size={14} /> When to approach
                              </p>
                              <p className="text-sm text-indigo-950 font-medium leading-relaxed">{investor.whenToApproach}</p>
                            </motion.div>
                            
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-red-50/50 border border-red-100 p-4 rounded-xl relative overflow-hidden transition-colors hover:bg-red-50">
                              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                              <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <XOctagon size={14} /> What NOT to do
                              </p>
                              <p className="text-sm text-red-950 font-medium leading-relaxed">{investor.whatNotToDo}</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-orange-50/50 border border-orange-100 p-4 rounded-xl relative overflow-hidden transition-colors hover:bg-orange-50">
                              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                              <p className="text-xs font-bold text-orange-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <FileWarning size={14} /> Example Mistake
                              </p>
                              <p className="text-sm text-orange-950 font-medium leading-relaxed">{investor.exampleMistakes}</p>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )
          })}
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
