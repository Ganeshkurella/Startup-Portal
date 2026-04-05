"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  Lightbulb, 
  Code, 
  TrendingUp, 
  Briefcase, 
  HeartPulse, 
  Wallet, 
  Cpu, 
  MapPin, 
  AlertTriangle,
  ArrowLeft
} from "lucide-react";

type Stage = "Idea" | "MVP" | "EarlyTraction" | null;
type Domain = "AI" | "SaaS" | "HealthTech" | "FinTech" | "Other" | null;

const guidanceData = {
  Idea: {
    steps: [
      "Talk to 10 potential users in your target market.",
      "Define the exact problem you are solving in one sentence.",
      "Build a low-fidelity no-code MVP to test the hypothesis."
    ],
    whereToGo: [
      { name: "T-Hub Student Hub", reason: "Best for raw idea incubation and peer networking." },
      { name: "CIE IIIT-H", reason: "Ideal if your idea relies heavily on deep tech or academic research." }
    ],
    fundingPath: "Do NOT pitch VCs yet. Focus exclusively on validation and leveraging free govt incubators. Look into T-AIM grand challenges if AI-focused.",
    realityCheck: { time: "3-6 months to validate", warning: "Highest failure rate occurs from building before talking to users." }
  },
  MVP: {
    steps: [
      "Launch your MVP to beta testers immediately.",
      "Fix critical bugs blocking user adoption.",
      "Secure your first 10 paying or highly active users."
    ],
    whereToGo: [
      { name: "T-Works", reason: "Crucial if you need physical hardware prototyping." },
      { name: "ISB DLabs", reason: "Strong commercialization pipeline to help monetize your MVP." }
    ],
    fundingPath: "Target Angel Investors or early grants (like T-Fund). Focus on demonstrating user traction rather than inflated valuations.",
    realityCheck: { time: "6-12 months to find Product-Market Fit", warning: "Expect to pivot. Your first MVP is rarely the final product." }
  },
  EarlyTraction: {
    steps: [
      "Standardize your marketing & sales pipeline.",
      "Establish a core technical and operational team.",
      "Prepare a data-backed Seed pitch deck."
    ],
    whereToGo: [
      { name: "T-Hub Scaling Programs", reason: "Perfect for scaling operations and accessing corporate networks." },
      { name: "Google for Startups Hub", reason: "Excellent for accelerating tech and GTM strategies." }
    ],
    fundingPath: "You are ready for Seed or Pre-Series A. Engage micro-VCs. Base your pitch heavily on Monthly Recurring Revenue (MRR) growth curves.",
    realityCheck: { time: "12-24 months of high-stress growth", warning: "Recruiting and managing a team will suddenly consume 40% of your time." }
  }
};

const domainData = {
  AI: "Leverage the massive 25,000 GPU cluster being built by NTT DATA locally. Tap into TGDeX for digital public infrastructure.",
  SaaS: "An incredible B2B market. Sell your SaaS to the 355+ GCCs (Global Capability Centers) headquartered right here in Hyderabad.",
  HealthTech: "Utilize the Genome Valley ecosystem. Focus on integration with existing massive diagnostic networks like NephroPlus.",
  FinTech: "Tap into the ISB DLabs FinChAIn initiatives and build alongside unicorns like HighRadius.",
  Other: "Hyderabad's 2nd ICT policy provides broad foundational support, including stamp duty rebates and rapid single-window clearances."
};

const stages = [
  { id: "Idea", label: "Idea", icon: Lightbulb, desc: "I just have a concept." },
  { id: "MVP", label: "MVP Built", icon: Code, desc: "I have a basic working product." },
  { id: "EarlyTraction", label: "Early Traction", icon: TrendingUp, desc: "I have some users or revenue." }
] as const;

const domains = [
  { id: "AI", label: "AI / GenAI", icon: Cpu },
  { id: "SaaS", label: "B2B SaaS", icon: Briefcase },
  { id: "HealthTech", label: "Health & Pharma", icon: HeartPulse },
  { id: "FinTech", label: "FinTech", icon: Wallet },
  { id: "Other", label: "Other / DeepTech", icon: Rocket }
] as const;

export function FounderGuidance() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [stage, setStage] = useState<Stage>(null);
  const [domain, setDomain] = useState<Domain>(null);

  const reset = () => {
    setStep(0);
    setStage(null);
    setDomain(null);
  };

  const handleStageSelect = (s: Stage) => {
    setStage(s);
    setStep(2);
  };

  const handleDomainSelect = (d: Domain) => {
    setDomain(d);
    setStep(3);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-[500px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container px-4 mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {/* STEP 0: ENTRY */}
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              className="max-w-3xl mx-auto text-center py-12"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide shadow-sm">
                <Rocket className="w-4 h-4" /> Founder Guidance Engine
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-[1.1]">
                Have a startup idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Let's build it in Hyderabad.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                Get a clear, step-by-step path tailored strictly to where you are right now. No fluff, just absolute clarity on your next actions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(1)}
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-indigo-500/20 hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto"
              >
                Start Guidance <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {/* STEP 1: STAGE */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Where are you right now?</h3>
                <p className="text-gray-500 font-medium text-lg">Select your exact current stage of progress.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stages.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.button
                      key={s.id}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleStageSelect(s.id)}
                      className="p-8 bg-white border border-gray-200 rounded-3xl text-left shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.1)] hover:border-indigo-300 transition-all flex flex-col items-start gap-4"
                    >
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{s.label}</h4>
                        <p className="text-sm text-gray-500 mt-1 font-medium">{s.desc}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              <button onClick={reset} className="mt-12 text-gray-400 hover:text-gray-900 flex items-center gap-2 mx-auto font-medium transition-colors">
                <ArrowLeft size={16} /> Back to start
              </button>
            </motion.div>
          )}

          {/* STEP 2: DOMAIN */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">What are you building?</h3>
                <p className="text-gray-500 font-medium text-lg">Select your primary sector to hyper-localize the advice.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {domains.map((d) => {
                  const Icon = d.icon;
                  return (
                    <motion.button
                      key={d.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDomainSelect(d.id)}
                      className="p-6 bg-white border border-gray-200 rounded-2xl text-center shadow-sm hover:shadow-[0_8px_20px_rgb(20,184,166,0.15)] hover:border-teal-300 transition-all flex flex-col items-center gap-3"
                    >
                      <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                        <Icon size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm whitespace-nowrap">{d.label}</h4>
                    </motion.button>
                  );
                })}
              </div>
              <button onClick={() => setStep(1)} className="mt-12 text-gray-400 hover:text-gray-900 flex items-center gap-2 mx-auto font-medium transition-colors">
                <ArrowLeft size={16} /> Back to stages
              </button>
            </motion.div>
          )}

          {/* STEP 3: RESULTS */}
          {step === 3 && stage && domain && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">Your Action Plan</h3>
                  <p className="text-gray-500 font-medium mt-1">
                    Customized for <span className="text-indigo-600 font-bold">{domains.find(d => d.id === domain)?.label}</span> at the <span className="text-teal-600 font-bold">{stages.find(s => s.id === stage)?.label}</span> stage.
                  </p>
                </div>
                <button onClick={() => setStep(1)} className="px-4 py-2 text-sm font-bold bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  Retake Assessment
                </button>
              </div>

              <div className="space-y-8">
                
                {/* Top Section (Core Actions - Full Width 3 Cols) */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-lg shadow-sm">1</span>
                    Your Exact Next 3 Steps
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {guidanceData[stage].steps.map((stop, i) => (
                      <div key={i} className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100/50 relative">
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-500 border-4 border-white flex items-center justify-center text-white font-bold text-sm shadow-sm">
                          {i+1}
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed mt-2">{stop}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2x2 Grid Section (Details & Insights) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Section B: Where to Go */}
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden hover:border-teal-200 transition-colors">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <MapPin className="text-teal-500" /> Target Locations
                    </h4>
                    <div className="space-y-4">
                      {guidanceData[stage].whereToGo.map((place, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                          <h5 className="font-bold text-gray-900 text-lg mb-1">{place.name}</h5>
                          <p className="text-sm text-gray-600 font-medium leading-relaxed">{place.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section C: Funding Path */}
                  <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl border border-indigo-100 shadow-sm">
                    <h4 className="text-xl font-bold text-indigo-900 mb-5 flex items-center gap-2">
                      <Wallet className="text-indigo-500" /> Funding Path
                    </h4>
                    <div className="p-5 bg-white/60 rounded-2xl border border-indigo-50">
                      <p className="text-indigo-800 text-[15px] leading-relaxed font-semibold">
                        {guidanceData[stage].fundingPath}
                      </p>
                    </div>
                  </div>

                  {/* Section D: Domain Specific */}
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
                    <h4 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <TrendingUp className="text-emerald-500" /> Local Opportunity
                    </h4>
                    <p className="text-gray-600 text-[15px] leading-relaxed font-medium p-5 bg-gray-50 rounded-2xl border border-gray-100">
                      {domainData[domain]}
                    </p>
                  </div>

                  {/* Section E: Reality Check */}
                  <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm">
                    <h4 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                      <AlertTriangle className="text-red-500" /> Reality Focus
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/70 p-5 rounded-2xl border border-red-100 shadow-sm">
                        <span className="block text-xs uppercase tracking-wider text-red-500 font-bold mb-1">Time Expectation</span>
                        <span className="font-extrabold text-red-950 text-[15px]">{guidanceData[stage].realityCheck.time}</span>
                      </div>
                      <div className="bg-white/70 p-5 rounded-2xl border border-red-100 shadow-sm">
                        <span className="block text-xs uppercase tracking-wider text-red-500 font-bold mb-1">Crucial Warning</span>
                        <span className="font-extrabold text-red-950 text-[15px]">{guidanceData[stage].realityCheck.warning}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
