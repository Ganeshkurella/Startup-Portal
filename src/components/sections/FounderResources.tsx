"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Target, Sparkles, BrainCircuit } from "lucide-react";

const incubatorsData = [
  { 
    name: "T-Hub", 
    location: "Raidurg (Inorbit Mall Road)", 
    stage: "Idea through Series B", 
    perks: ["Access to T-Fund", "Free global SaaS credits (AWS/Azure)", "Direct corporate innovation wings"], 
    why: "India's largest incubation facility. Essential if you want to network aggressively, find co-founders, and hit the mainstream local radar immediately." 
  },
  { 
    name: "CIE IIIT-H", 
    location: "Gachibowli (Inside IIIT Campus)", 
    stage: "DeepTech / AI / Academic spinoffs", 
    perks: ["CVIT & Robotics lab access", "Direct elite talent pipeline", "Seed grants via DST (₹10-25L)"], 
    why: "Perfect if you are building hardcore IP, robotics, or computer vision requiring academic backing and deep academic validation." 
  },
  { 
    name: "ISB DLabs", 
    location: "Gachibowli (Inside ISB Campus)", 
    stage: "Pre-Seed / Seed", 
    perks: ["Elite ISB alumni network", "FinChAIn focus initiatives", "Business & GTM mentorship"], 
    why: "Choose this if your core tech is already built, and your primary roadblock is hardcore GTM strategy, pricing, or business model validation." 
  }
];

export function FounderResources() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {incubatorsData.map((hub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)] hover:border-indigo-300 transition-all flex flex-col h-full cursor-pointer"
            >
              <h4 className="text-3xl font-black text-gray-900 mb-4">{hub.name}</h4>
              
              <div className="flex flex-col gap-3 mb-6 flex-grow">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                  <MapPin size={16} className="text-indigo-500" /> {hub.location}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
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

              <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100/50 mt-auto">
                <h5 className="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Sparkles size={14} /> Why Choose Them
                </h5>
                <p className="text-indigo-900 font-medium text-sm leading-relaxed">
                  {hub.why}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
