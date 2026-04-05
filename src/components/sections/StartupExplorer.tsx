"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { startupsDirectory } from "@/app/data";
import { Compass, Filter, Zap } from "lucide-react";

const sectors = ["All", "SaaS", "Fintech", "DeepTech", "Health"];

export function StartupExplorer() {
  const [activeSector, setActiveSector] = useState("All");

  const filteredStartups = activeSector === "All" 
    ? startupsDirectory 
    : startupsDirectory.filter(s => s.sector === activeSector);

  return (
    <section id="startups" className="py-24 bg-gray-50 relative overflow-hidden">
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStartups.map((startup, i) => (
              <motion.div
                layout
                key={startup.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.1)] hover:border-indigo-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {startup.name}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      startup.tag === "Unicorn" ? "bg-purple-100 text-purple-700 border-purple-200" :
                      startup.tag === "Soonicorn" ? "bg-blue-100 text-blue-700 border-blue-200" :
                      "bg-emerald-100 text-emerald-700 border-emerald-200"
                    }`}>
                      {startup.tag}
                    </span>
                  </div>
                  <div className="inline-flex py-1 px-3 bg-gray-100 rounded-lg text-gray-700 font-bold text-xs tracking-wide uppercase mb-4">
                    {startup.sector}
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm">
                    {startup.detail}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-sm font-bold text-gray-400 group-hover:text-orange-500 transition-colors cursor-pointer gap-2">
                  <Zap size={16} /> View Profile/Careers
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
