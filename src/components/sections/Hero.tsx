"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { hyderabadData } from "@/app/data";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const opacityFade = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/20 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-teal-400/20 to-transparent blur-[80px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto text-center mt-16 pb-24">
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, mass: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 100 }}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass-card border border-indigo-200 shadow-sm text-indigo-700 text-sm font-semibold tracking-wide cursor-default cursor-crosshair"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            Live Intelligence Dash 2026
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Why Hyderabad is <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400">
              India's Next Startup Capital
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            From housing 355+ massive Global Capability Centers to commanding Asia's deepest AI infrastructure pool, discover the momentum dictating the next decade of tech.
          </p>

          <div className="flex flex-wrap justify-center gap-6 px-4">
            {hyderabadData.heroStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.06, y: -12, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-8 py-6 rounded-3xl relative group overflow-hidden border border-white hover:border-indigo-300 transition-colors cursor-default min-w-[200px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-indigo-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 relative z-10">
                  {stat.value}<span className="text-teal-500 font-bold">{stat.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold relative z-10 transition-colors group-hover:text-indigo-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
