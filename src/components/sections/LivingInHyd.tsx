"use client";

import { motion } from "framer-motion";
import { hyderabadData } from "@/app/data";
import { CheckCircle2 } from "lucide-react";

export function LivingInHyd() {
  return (
    <section id="living" className="py-24 relative bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Lifestyle Mathematics</h2>
          
          <div className="insight-box border-l-indigo-500 bg-white shadow-sm">
            <p className="text-gray-700 text-lg font-medium m-0">
              The ultimate retention tool for founders isn't just equity—it's the city itself. Hyderabad allows engineers to command top-tier salaries while dropping their <strong className="text-indigo-600">monthly burn rate by 30%</strong> compared to traditional ecosystems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {hyderabadData.living_data.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight min-h-[50px] flex items-start">
                {item.category}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-4 pb-4 border-b border-gray-100">
                <span className="text-3xl font-black text-indigo-600 font-outfit">
                  {item.cost.split(" ")[0]}
                </span>
                <span className="text-sm font-semibold text-gray-400">
                  {item.cost.split(" ").slice(1).join(" ")}
                </span>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-relaxed font-medium m-0">
                  {item.insight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
