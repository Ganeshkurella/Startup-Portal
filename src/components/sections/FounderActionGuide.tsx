"use client";

import { motion } from "framer-motion";
import { hyderabadData } from "@/app/data";
import { Lightbulb, FileText, Building2, Banknote, Rocket, CheckCircle2, MapPin, Users, Calendar, ArrowRight } from "lucide-react";

const stepIcons = [Lightbulb, FileText, Building2, Banknote, Rocket];
const navIcons = [Users, Calendar, MapPin];

export function FounderActionGuide() {
  return (
    <section id="founder-guide" className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Start Your Startup in <span className="text-indigo-600">Hyderabad</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Don't just observe the ecosystem—build inside it. Follow this action-oriented guide mapping exactly what to do, where to go, and who to connect with.
          </motion.p>
        </div>

        {/* 1. Startup Roadmap Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">1</span> 
            The Action Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {hyderabadData.startupSteps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-muted/30 border border-border/50 relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/0 group-hover:bg-indigo-500 transition-colors" />
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                    <Icon strokeWidth={2} className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2">Step {idx + 1}</div>
                  <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-6 h-16">{step.desc}</p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg"
                  >
                    {step.action} <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. Incubator Support */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm">2</span> 
            Incubator & Support Network
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hyderabadData.extendedIncubators.map((incubator, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <h4 className="text-3xl font-extrabold text-foreground mb-4">{incubator.name}</h4>
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 font-semibold text-xs rounded-md border border-teal-100">
                    {incubator.stage}
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold text-xs rounded-md border border-indigo-100">
                    {incubator.who}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium mb-6">{incubator.offer}</p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground cursor-pointer hover:text-indigo-600 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Apply to Cohort
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two-Column Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 3. Funding Guide */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">3</span> 
              Funding Guide
            </h3>
            <div className="space-y-4">
              {hyderabadData.fundingFlow.map((flow, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 transition-colors shadow-sm"
                >
                  <div className="w-40 font-bold text-amber-600 uppercase tracking-wide text-sm flex-shrink-0">
                    {flow.stage}
                  </div>
                  <div className="flex-1 font-medium text-foreground">
                    {flow.players}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-amber-50/50 border border-amber-100 text-sm font-medium text-amber-800">
              <span className="font-bold">Insight:</span> The ecosystem handles deals from Pre-Seed grants (T-Fund) all the way to Series B+ institutional rounds natively.
            </div>
          </div>

          {/* 4. Ecosystem Navigator */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">4</span> 
              Ecosystem Navigator
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hyderabadData.ecosystemNavigator.map((nav, idx) => {
                const Icon = navIcons[idx];
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-2xl border bg-white ${idx === 2 ? 'sm:col-span-2' : ''}`}
                  >
                    <Icon className="w-6 h-6 text-purple-500 mb-4" />
                    <h4 className="font-bold text-lg mb-2">{nav.category}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{nav.desc}</p>
                  </motion.div>
                );
              })}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center group cursor-pointer shadow-lg shadow-purple-500/20"
              >
                <div>
                  <h4 className="font-bold text-lg">Where to go as a founder</h4>
                  <p className="text-purple-100 text-sm mt-1">Get custom mapping into the ecosystem.</p>
                </div>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
