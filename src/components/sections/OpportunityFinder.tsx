"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Lightbulb, MapPin, TrendingUp, Handshake } from "lucide-react";

type Role = "Student" | "Developer" | "Founder" | null;

const insights = {
  Student: {
    opportunities: ["GenAI in Education", "Applied AI Research", "Hardware Prototyping"],
    actions: [
      "Learn AI/GenAI skills through T-AIM Challenges",
      "Apply to startups like BrightChamps",
      "Join academic incubators like CIE IIITH"
    ],
    ecosystem: ["T-Hub Student Hub", "IIIT-H Applied AI Labs", "T-Works Prototyping"],
    location: "Miyapur & Kukatpally (Budget: ₹14-20k, Red Line Metro)",
    highlight: "IIIT-H Applied AI labs funneling talent directly from academics to deeptech.",
    cta: "Explore EdTech Ecosystem"
  },
  Developer: {
    opportunities: ["Enterprise SaaS Architecture", "AI & GenAI Eng", "Cloud / Data"],
    actions: [
      "Target 355+ GCCs expanding engineering ownership",
      "Upskill in LLMs & Data Infra",
      "Join rapidly growing SaaS unicorns (Darwinbox, Zenoti)"
    ],
    ecosystem: ["NTT DATA 25,000 GPU Cluster", "TGDeX Public Infra", "HighRadius AI Finance"],
    location: "Kondapur & Madhapur (₹18-32k) - The IT Sweet Spot",
    highlight: "Avg IT Salary is ₹1,04,371/mo (12.5% higher net vs BLR) with high purchasing power.",
    cta: "View Tech Jobs & GCCs"
  },
  Founder: {
    opportunities: ["DeepTech / SpaceTech", "HealthTech", "B2B SaaS"],
    actions: [
      "Leverage GCC Policy & AI4TG Grants",
      "Incubate at T-Hub (India's largest)",
      "Tap into ₹48,000Cr+ total funding ecosystem"
    ],
    ecosystem: ["T-Hub", "Google for Startups Hub", "ISB DLabs (FinChAIn / GenAI)"],
    location: "Kokapet / Financial District (Premium, Networking hubs)",
    highlight: "Capital subsidies + single-window clearance for new ventures under 2nd ICT Policy.",
    cta: "Explore Founder Resources"
  }
};

const roles = [
  { id: "Student", icon: GraduationCap, label: "Student", desc: "Looking to learn and start" },
  { id: "Developer", icon: Briefcase, label: "Developer", desc: "Seeking high-growth tech roles" },
  { id: "Founder", icon: Lightbulb, label: "Founder", desc: "Building the next unicorn" }
];

export function OpportunityFinder() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            What Should You Do in Hyderabad?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Find opportunities tailored to your goals.
          </motion.p>
        </div>

        {/* Role Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRole(role.id as Role)}
                className={`p-6 rounded-3xl border transition-all duration-300 text-left flex flex-col items-start gap-4 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-indigo-300 group ${
                  isSelected 
                    ? "bg-blue-100 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-[1.02]" 
                    : "bg-muted/30 border-border/50 hover:bg-white"
                }`}
              >
                <div className={`p-3 rounded-2xl transition-colors ${isSelected ? 'bg-blue-100 text-blue-500' : 'bg-background text-foreground shadow-sm group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className={`text-xl font-medium mb-1 transition-colors ${isSelected ? '' : 'group-hover:text-indigo-700'}`}>{role.label}</h3>
                  <p className="text-sm text-muted-foreground">{role.desc}</p>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Dynamic Results */}
        <AnimatePresence mode="wait">
          {selectedRole && (
            <motion.div
              key={selectedRole}
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto overflow-hidden origin-top"
            >
              <div className="p-8 md:p-10 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-md shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 text-blue-500 mb-4">
                        <TrendingUp size={20} />
                        <h4 className="font-medium text-lg">Top Sectors for You</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {insights[selectedRole].opportunities.map((opp, i) => (
                          <span key={i} className="px-4 py-2 bg-muted/50 border border-border/50 rounded-full text-sm font-medium">
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-emerald-500 mb-4">
                        <Handshake size={20} />
                        <h4 className="font-medium text-lg">What You Should Do</h4>
                      </div>
                      <ul className="space-y-4">
                        {insights[selectedRole].actions.map((act, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-muted-foreground">{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 text-purple-500 mb-4">
                        <MapPin size={20} />
                        <h4 className="font-medium text-lg">Location Insight</h4>
                      </div>
                      <div className="p-5 rounded-2xl bg-muted/30 border border-border/50">
                        <p className="text-sm text-foreground/80 leading-relaxed">{insights[selectedRole].location}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-lg mb-4 text-foreground/90">Key Takeaway</h4>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                        <p className="text-lg font-medium text-foreground/90 relative z-10 leading-snug">
                          &quot;{insights[selectedRole].highlight}&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Removed non-functional CTA */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
