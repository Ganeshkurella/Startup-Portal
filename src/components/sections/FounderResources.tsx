"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, MapPin, Target, Sparkles, BrainCircuit, Check, X, ChevronDown, ChevronUp } from "lucide-react";

const incubatorsData = [
  { 
    name: "T-Hub", 
    location: "Raidurg (Inorbit Mall Road)", 
    stage: "Idea through Series B", 
    perks: ["Access to T-Fund", "Free global SaaS credits (AWS/Azure)", "Direct corporate innovation wings"], 
    why: "India's largest incubation facility. Essential if you want to network aggressively, find co-founders, and hit the mainstream local radar immediately.",
    applyIf: "You are building a B2B SaaS or need corporate customer intros immediately.",
    notSuitableIf: "You need absolute quiet focus, or you are building extremely niche biotech IP."
  },
  { 
    name: "CIE IIIT-H", 
    location: "Gachibowli (Inside IIIT Campus)", 
    stage: "DeepTech / AI / Academic spinoffs", 
    perks: ["CVIT & Robotics lab access", "Direct elite talent pipeline", "Seed grants via DST (₹10-25L)"], 
    why: "Perfect if you are building hardcore IP, robotics, or computer vision requiring academic backing and deep academic validation.",
    applyIf: "You are building AI/Robotics requiring professor-level mentorship and R&D lab access.",
    notSuitableIf: "You are building a D2C e-commerce brand, crypto token, or standard retail app."
  },
  { 
    name: "ISB DLabs", 
    location: "Gachibowli (Inside ISB Campus)", 
    stage: "Pre-Seed / Seed", 
    perks: ["Elite ISB alumni network", "FinChAIn focus initiatives", "Business & GTM mentorship"], 
    why: "Choose this if your core tech is already built, and your primary roadblock is hardcore GTM strategy, pricing, or business model validation.",
    applyIf: "You have a technical working product but your GTM and monetization models are failing.",
    notSuitableIf: "You need massive hardware prototyping facilities or deeptech algorithm validations."
  }
];

export function FounderResources() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="incubators" className="py-24 relative bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-sm font-bold tracking-wide mb-6">
            <BrainCircuit size={16} /> Institutional Support
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Institutional Accelerants.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Hyderabad is unique because the government acts as a massive institutional backer. Here are the precise launchpads you should target based on your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {incubatorsData.map((hub, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`bg-white rounded-3xl border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer overflow-hidden group ${isExpanded ? 'border-indigo-400 ring-4 ring-indigo-50 shadow-md scale-[1.02]' : 'border-gray-100 hover:border-indigo-300'} p-8 `}
              >
                <h4 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{hub.name}</h4>
                
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-200">
                    <MapPin size={16} className="text-indigo-500" /> {hub.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 transition-colors group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-200">
                    <Target size={16} className="text-teal-500" /> {hub.stage}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">Core Perks</h5>
                  <ul className="space-y-2">
                    {hub.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm font-medium text-gray-600">
                        <ShieldCheck size={16} className="text-teal-500 mt-0.5 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50 mb-4">
                  <h5 className="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} /> Why Choose Them
                  </h5>
                  <p className="text-indigo-900 font-medium text-sm leading-relaxed">
                    {hub.why}
                  </p>
                </div>

                {/* Expansion Toggle */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {isExpanded ? "Hide Evaluation" : "Evaluate Fit"}
                  </span>
                  {isExpanded ? <ChevronUp className="text-indigo-500" /> : <ChevronDown className="text-gray-400 group-hover:text-indigo-400" />}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden space-y-3"
                    >
                      <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Check size={14} /> Apply if...
                        </p>
                        <p className="text-sm text-emerald-950 font-medium leading-relaxed">{hub.applyIf}</p>
                      </div>
                      
                      <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                        <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <X size={14} /> Not suitable if...
                        </p>
                        <p className="text-sm text-red-950 font-medium leading-relaxed">{hub.notSuitableIf}</p>
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
