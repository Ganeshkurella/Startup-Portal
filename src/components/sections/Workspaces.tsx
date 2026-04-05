"use client";

import { motion } from "framer-motion";
import { workspacesData } from "@/app/data";
import { Building, Coffee, MapPin, ChevronRight } from "lucide-react";

export function Workspaces() {
  return (
    <section id="workspaces" className="py-24 bg-white relative overflow-hidden text-gray-900 border-t border-gray-100">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-bold tracking-wide mb-6 shadow-sm">
            <Building size={16} /> Physical Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Where to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Work & Meet</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            You can't build a startup entirely from your bedroom. Here are the precise locations to write code, meet co-founders, and pitch angels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Co-Working */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Building size={24} />
              </div>
              <h3 className="text-2xl font-bold">Hardcore Workspaces</h3>
            </div>
            {workspacesData.coworking.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-indigo-300 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-xl text-gray-900">{item.name}</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-white border border-gray-200 rounded-md text-gray-500 shadow-sm">{item.location}</span>
                </div>
                <div className="text-indigo-600 font-bold text-sm mb-3">
                  {item.cost}
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Cafes */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Coffee size={24} />
              </div>
              <h3 className="text-2xl font-bold">Founder Cafes</h3>
            </div>
            {workspacesData.cafes.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-teal-300 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-xl text-gray-900">{item.name}</h4>
                </div>
                <div className="inline-flex items-center gap-1 text-gray-500 font-bold text-xs mb-3 bg-white px-2 py-1 rounded-md border border-gray-200 shadow-sm">
                  <MapPin size={12} /> {item.location}
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 3: Zones */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-bold">Key Geographies</h3>
            </div>
            {workspacesData.zones.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-violet-300 transition-all group"
              >
                <div className="mb-3">
                  <h4 className="font-bold text-xl text-gray-900">{item.name}</h4>
                  <p className="text-violet-600 font-bold text-sm tracking-wide mt-1 uppercase">{item.role}</p>
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
