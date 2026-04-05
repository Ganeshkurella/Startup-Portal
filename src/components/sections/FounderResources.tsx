"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hyderabadData } from "@/app/data";
import { Building2, ShieldCheck } from "lucide-react";

export function FounderResources() {
  const [activeTab, setActiveTab] = useState<"incubators" | "policies">("incubators");

  return (
    <section id="policies" className="py-24 relative bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Zero-to-One Accelerants</h2>
          
          <div className="insight-box border-l-teal-500 bg-gray-50">
            <p className="text-gray-700 text-lg font-medium m-0">
              The government isn't just passing bills—it's actively acting as the <strong className="text-teal-700">"first customer"</strong> for DeepTech, subsidizing compute, and housing literally thousands of startups under the T-Hub umbrella.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-10 p-1.5 bg-gray-100 rounded-xl w-max">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("incubators")}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${
              activeTab === "incubators" ? "bg-white text-indigo-700 shadow-sm" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Incubators
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("policies")}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${
              activeTab === "policies" ? "bg-white text-indigo-700 shadow-sm" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            State Policies
          </motion.button>
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "incubators" && (
              <motion.div
                key="incubators"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {hyderabadData.resources.incubators.map((hub, i) => (
                  <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-2xl font-bold text-gray-900">{hub.name}</h4>
                      <span className="bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-wider py-1 px-3 rounded-full">
                        {hub.scale}
                      </span>
                    </div>
                    <div className="text-sm text-teal-600 font-bold mb-3">{hub.focus} Focus</div>
                    <p className="text-gray-600 leading-relaxed font-medium">{hub.details}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "policies" && (
              <motion.div
                key="policies"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {hyderabadData.resources.policies.map((policy, i) => (
                  <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                      <ShieldCheck className="text-teal-500 h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{policy.name}</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">{policy.impact}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
