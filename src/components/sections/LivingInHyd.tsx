"use client";

import { motion } from "framer-motion";
import { Home, Wallet, CheckCircle2, TrendingDown } from "lucide-react";

const rentData = [
  { area: "Madhapur / Kondapur", type: "1 BHK", rent: "₹20,000 - ₹28,000", verdict: "The Sweet Spot. High startup density, literal walking distance to major tech parks." },
  { area: "Gachibowli / Nanakramguda", type: "2 BHK", rent: "₹30,000 - ₹45,000", verdict: "Space & Quiet. Better for founders with families or hardware deeptech engineering setups." },
  { area: "Jubilee Hills", type: "1 BHK Studio", rent: "₹35,000 - ₹50,000+", verdict: "Premium lifestyle. Stay here if you host VCs constantly or operate in consumer luxury." },
  { area: "Kukatpally / Miyapur", type: "2 BHK", rent: "₹16,000 - ₹25,000", verdict: "Strict bootstrapper budget. Direct Red Line metro access drops you straight into Hitech City." }
];

export function LivingInHyd() {
  return (
    <section id="living" className="py-24 relative bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-bold tracking-wide mb-6 shadow-sm">
            <Home size={16} /> Living & Cost Guide
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Burn Rate Dynamics.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            The ultimate competitive advantage of building in Hyderabad isn't just the IT policy—it's the mathematically superior cost of living. Extend your runway effortlessly.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-gradient-to-br from-teal-500 to-emerald-600 p-8 rounded-3xl text-white shadow-lg flex items-center justify-between">
            <div>
              <p className="text-teal-100 font-bold uppercase tracking-widest text-sm mb-1">vs Bangalore</p>
              <h3 className="text-4xl font-black">-30% Burn Rate</h3>
            </div>
            <TrendingDown size={48} className="text-teal-200 opacity-50" />
          </div>
          <div className="flex-1 bg-gray-900 p-8 rounded-3xl text-white shadow-lg">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-1">Standard Dev Salary</p>
            <h3 className="text-4xl font-black mb-2">₹1.04L <span className="text-xl text-gray-500 font-medium">/mo median</span></h3>
            <p className="text-sm font-medium text-gray-400">12.5% higher net disposable income due to lower housing caps.</p>
          </div>
        </div>

        {/* Rent Grid */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Wallet className="text-teal-600" /> Where should a founder live?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rentData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{item.area}</h4>
                <span className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm transition-colors group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-200">
                  {item.type}
                </span>
              </div>
              <div className="text-3xl font-black text-teal-600 mb-4 font-outfit">
                {item.rent}
              </div>
              <div className="flex items-start gap-2 bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed font-medium m-0">
                  {item.verdict}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
