"use client";

import { motion } from "framer-motion";
import { hyderabadData } from "@/app/data";

export function AIDeepTech() {
  return (
    <section id="ai-deeptech" className="py-24 relative bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">AI Infrastructure Grid</h2>
          
          <div className="insight-box border-l-teal-500">
            <p className="text-gray-700 text-lg font-medium m-0">
              India's first state-led digital public infra for AI. With a <strong className="text-teal-700">25,000 GPU cluster</strong> powering up, the city guarantees extreme compute scale for foundational modeling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {hyderabadData.ai_ecosystem.map((node: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-teal-300 transition-all duration-300 border border-gray-200 flex-1"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold tracking-wider uppercase">
                  {node.role}
                </span>
                <span className="text-2xl font-black text-gray-200 group-hover:text-teal-100 transition-colors">
                  {node.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                {node.entity}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-medium">
                {node.insight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
