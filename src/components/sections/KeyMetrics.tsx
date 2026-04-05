"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Wallet, Landmark } from "lucide-react";

export function KeyMetrics() {
  const narrativeCards = [
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      title: "Explosive Growth",
      insight: "State GSDP is compounding at 10.7%, aggressively outpacing the national average. IT exports surged 16.6% YoY to hit ₹3.13 lakh crore.",
      stat: "10.7%",
      statLabel: "GSDP Scale"
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Deep Talent Pool",
      insight: "Driven by IIIT-H and 355+ GCCs, the engineering workforce expects to cross 10 lakh by 2026, offering massive scalability for founders.",
      stat: "1M+",
      statLabel: "Engineers by '26"
    },
    {
      icon: <Wallet className="h-6 w-6 text-teal-500" />,
      title: "Pure Cost Advantage",
      insight: "Premium commercial and 1BHK rents (₹18-32k) remain roughly 30% lower than Bangalore, extending early-stage runway significantly.",
      stat: "30%",
      statLabel: "Lower Burn Rate"
    },
    {
      icon: <Landmark className="h-6 w-6 text-indigo-400" />,
      title: "Aggressive Government Scaffolding",
      insight: "State policies uniquely act as the 'first customer' through T-AIM grand challenges, accompanied by robust R&D grants.",
      stat: "₹15L",
      statLabel: "State Pilot Grants"
    }
  ];

  return (
    <section id="metrics" className="py-24 relative bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">The Underlying Math</h2>
          
          <div className="insight-box">
            <p className="text-gray-700 text-lg sm:text-xl font-medium leading-relaxed m-0">
              <strong className="text-indigo-700 relative inline-block">
                T-Hub
                <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200/50 -z-10" />
              </strong> alone houses up to 1,000 startups. But it's not just volume—Hyderabad has effectively closed the tier-1 infrastructure gap while maintaining a drastic operational discount compared to peer ecosystems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {narrativeCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)] hover:border-indigo-300 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-gray-900">{card.stat}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-600">{card.statLabel}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{card.insight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
