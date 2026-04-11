"use client";

import { motion } from "framer-motion";
import { workspacesData } from "@/app/data";
import { Building, Coffee, MapPin, Target, Clock, Zap, Map } from "lucide-react";

export function Workspaces() {
  return (
    <section id="workspaces" className="py-24 bg-gray-50/50 relative overflow-hidden text-gray-900 border-t border-gray-100">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-bold tracking-wide mb-6 shadow-sm cursor-default"
          >
            <Building size={16} /> Ecosystem Maps
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Where Founders Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Work & Build</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Make your time count. Know exactly where to position yourself to write code, meet co-founders, and pitch angels.
          </p>
        </div>

        {/* Horizontal scroll container for mobile, standard grid for desktop */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 lg:overflow-visible gap-6 lg:gap-10 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Column 1: Co-Working */}
          <div className="w-[85vw] sm:w-[400px] shrink-0 lg:w-auto lg:shrink space-y-6 snap-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm border border-indigo-100">
                <Building size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Coworking Spaces</h3>
            </div>
            <div className="flex flex-col gap-5">
              {workspacesData.coworking.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border border-gray-200 p-6 rounded-3xl hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-300 transition-all duration-300 group flex-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-xl text-gray-900 group-hover:text-indigo-700 transition-colors">{item.name}</h4>
                    <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-gray-600 shadow-sm group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-700 transition-colors">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-3">
                    <Target size={14} /> {item.bestFor}
                  </div>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed border-t border-gray-100 pt-3">
                    <span className="font-semibold text-gray-900 block mb-1">Why founders use it:</span>
                    {item.whyFoundersUseIt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Cafes */}
          <div className="w-[85vw] sm:w-[400px] shrink-0 lg:w-auto lg:shrink space-y-6 snap-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 text-teal-700 flex items-center justify-center shadow-sm border border-teal-100">
                <Coffee size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Startup Cafes</h3>
            </div>
            <div className="flex flex-col gap-5">
              {workspacesData.cafes.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border border-gray-200 p-6 rounded-3xl hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-teal-300 transition-all duration-300 group flex-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-xl text-gray-900 group-hover:text-teal-700 transition-colors">{item.name}</h4>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 font-bold text-xs mb-4 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200 shadow-sm w-fit group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-700 transition-colors">
                    <MapPin size={12} /> {item.area}
                  </div>
                  
                  <div className="space-y-3 border-t border-gray-100 pt-4">
                    <div className="flex items-start gap-2 bg-teal-50/50 p-2.5 rounded-xl border border-teal-50/50 group-hover:border-teal-100/50 transition-colors">
                      <Zap size={16} className="text-teal-600 mt-0.5 shrink-0" />
                      <p className="text-sm font-medium text-gray-700 leading-snug"><span className="font-semibold text-gray-900 block pb-0.5">Best For:</span> {item.bestUse}</p>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50 group-hover:bg-teal-50/30 transition-colors">
                      <Clock size={16} className="text-teal-600 mt-0.5 shrink-0" />
                      <p className="text-sm font-medium text-gray-700 leading-snug"><span className="font-semibold text-gray-900 block pb-0.5">Time:</span> {item.timeSuitability}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Zones */}
          <div className="w-[85vw] sm:w-[400px] shrink-0 lg:w-auto lg:shrink space-y-6 snap-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-50 text-violet-600 flex items-center justify-center shadow-sm border border-violet-100">
                <Map size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Startup Zones Map</h3>
            </div>
            <div className="flex flex-col gap-5">
              {workspacesData.zones.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border border-gray-200 p-6 rounded-3xl hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-violet-300 transition-all duration-300 group flex-1"
                >
                  <div className="mb-5">
                    <h4 className="font-bold text-2xl text-gray-900 group-hover:text-violet-700 transition-colors mb-3">{item.name}</h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 border border-violet-100 text-violet-700 font-bold text-xs rounded-full shadow-sm">
                      <Target size={12} /> {item.knownFor}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 group-hover:bg-violet-50/40 transition-colors">
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">
                      <span className="font-semibold text-gray-900 block mb-1">Target Audience:</span>
                      {item.whoShouldGoThere}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
