"use client";

import { motion } from "framer-motion";
import { communityEvents } from "@/app/data";
import { Users, CalendarDays, ExternalLink } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-bold tracking-wide mb-6 shadow-sm">
            <Users size={16} /> Networking & Community
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            How to enter the ecosystem.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Stop messaging people coldly on LinkedIn. Show up to these recurring communities in-person to meet your technical co-founders, early hires, and angel investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {communityEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-[0_12px_40px_rgb(225,29,72,0.08)] hover:border-indigo-300 transition-all flex gap-6 items-start group"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 group-hover:scale-110 transition-transform">
                <CalendarDays size={24} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 whitespace-nowrap">{event.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded-md uppercase tracking-widest whitespace-nowrap">
                    {event.frequency}
                  </span>
                </div>
                <p className="text-gray-600 font-medium text-[15px] leading-relaxed mb-6">
                  {event.detail}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer transition-colors bg-indigo-50 px-4 py-2 rounded-lg">
                  Join Community <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
