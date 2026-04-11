"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { startupsDirectory } from "@/app/data";
import { Compass, Filter, Zap, ChevronDown, ChevronUp } from "lucide-react";

const sectors = ["All", "SaaS", "Fintech", "DeepTech", "Health"];

export function StartupExplorer() {
  const [activeSector, setActiveSector] = useState("All");
  const [expandedStartup, setExpandedStartup] = useState<string | null>(null);

  const filteredStartups = activeSector === "All" 
    ? startupsDirectory 
    : startupsDirectory.filter(s => s.sector === activeSector);

  return (
    <section id="startups" className="py-24 bg-gray-50 relative z-20">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-sm font-bold tracking-wide mb-6">
            <Compass size={16} /> Ecosystem Explorer
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Who is building what?
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            A real-time directory of the core operators scaling out of Hyderabad. Map your competitors, or find high-growth startups to join as early talent.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="hidden md:flex items-center gap-2 text-gray-400 font-bold mr-4 uppercase text-sm tracking-wider">
            <Filter size={16} /> Filter by Sector
          </div>
          {sectors.map(sector => (
            <motion.button
              key={sector}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSector(sector)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-colors border shadow-sm ${
                activeSector === sector 
                ? "bg-indigo-500 text-white border-indigo-600" 
                : "bg-white text-gray-700 border-gray-200 hover:border-indigo-300"
              }`}
            >
              {sector}
            </motion.button>
          ))}
        </div>

        {/* Grid View */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredStartups.map((startup, i) => {
              const isExpanded = expandedStartup === startup.name;
              return (
              <motion.div
                layout
                key={startup.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                onMouseEnter={() => setExpandedStartup(startup.name)}
                onMouseLeave={() => setExpandedStartup(null)}
                className={`bg-white p-8 rounded-3xl border transition-colors duration-500 group flex flex-col justify-between hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.15)] relative ${isExpanded ? 'border-indigo-300 ring-4 ring-indigo-50 z-50' : 'border-gray-100 hover:border-indigo-200 z-10'}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {startup.name}
                    </h3>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        startup.tag === "Unicorn" ? "bg-purple-100 text-purple-700 border-purple-200" :
                        startup.tag === "Soonicorn" ? "bg-blue-100 text-blue-700 border-blue-200" :
                        "bg-teal-100 text-teal-700 border-teal-200"
                      }`}
                    >
                      {startup.tag}
                    </motion.span>
                  </div>
                  <div className="inline-flex py-1 px-3 bg-gray-100 rounded-lg text-gray-700 font-bold text-xs tracking-wide uppercase mb-4">
                    {startup.sector}
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    {startup.detail}
                  </p>
                </div>
                
                <div 
                  className={`mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-bold transition-colors duration-500 select-none ${isExpanded ? 'text-indigo-600' : 'text-gray-500 group-hover:text-indigo-600'}`}
                >
                  <motion.div 
                    initial={false}
                    animate={{ x: isExpanded ? 4 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex items-center gap-2"
                  >
                    <Zap size={16} className={`transition-all duration-500 ${isExpanded ? "fill-indigo-500 drop-shadow-md scale-110" : ""}`} />
                    Quick Take Insights
                  </motion.div>
                  <ChevronDown size={18} className={`transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isExpanded ? 'rotate-180 text-indigo-500' : ''}`} />
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute top-[calc(100%+8px)] left-0 w-full min-w-[320px] bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/50 p-6 space-y-3 z-50"
                    >
                      {/* Actionable Fields */}
                      {(startup as any).whyItMatters && (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}
                          className="bg-indigo-50/70 hover:bg-indigo-50 p-4 rounded-2xl border border-indigo-100/50 transition-colors"
                        >
                          <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Why it matters
                          </p>
                          <p className="text-sm font-medium text-indigo-950 leading-relaxed">{(startup as any).whyItMatters}</p>
                        </motion.div>
                      )}
                      {(startup as any).whoShouldCare && (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                          className="bg-indigo-50/40 hover:bg-indigo-50/80 p-4 rounded-2xl border border-indigo-100/30 transition-colors"
                        >
                          <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Who should care
                          </p>
                          <p className="text-sm font-medium text-indigo-950 leading-relaxed">{(startup as any).whoShouldCare}</p>
                        </motion.div>
                      )}
                      {(startup as any).possibleOpportunity && (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
                          className="bg-teal-50/70 hover:bg-teal-50 p-4 rounded-2xl border border-teal-100/50 transition-colors"
                        >
                          <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Possible opportunity
                          </p>
                          <p className="text-sm font-medium text-teal-950 leading-relaxed">{(startup as any).possibleOpportunity}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
