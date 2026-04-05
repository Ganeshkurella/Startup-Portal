"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hyderabadData } from "@/app/data";
import { Search, BarChart3, ListFilter } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const fundingGrowthData = [
  { year: '2020', funding: 100 },
  { year: '2021', funding: 350 },
  { year: '2022', funding: 800 },
  { year: '2023', funding: 1200 },
  { year: '2024', funding: 2500 },
  { year: '2025', funding: 4000 },
  { year: '2026', funding: 5800 },
];

export function Ecosystem() {
  const allSectors = Array.from(new Set(hyderabadData.startups.map((s) => s.sector)));
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"database" | "analytics">("database");

  const filteredStartups = hyderabadData.startups.filter((s) => {
    const matchesSector = activeSector ? s.sector === activeSector : true;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.keyDetail.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <section id="startups" className="py-24 relative bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Intelligence Database</h2>
          
          <div className="insight-box border-l-blue-500 bg-white">
            <p className="text-gray-700 text-lg font-medium m-0">
              Search the exact network topology driving the city's valuation metrics.
            </p>
          </div>
        </div>

        {/* Unified Search & Control Bar */}
        <div className="glass-card rounded-2xl p-4 mb-10 border border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center z-20 relative shadow-sm">
          <div className="flex w-full md:w-auto bg-gray-100/50 rounded-xl border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab("database")}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === "database" ? "bg-white text-indigo-700 shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <ListFilter className="w-4 h-4" />
              Database
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === "analytics" ? "bg-white text-indigo-700 shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </button>
          </div>

          {activeTab === "database" && (
            <div className="flex w-full md:w-1/2 gap-3 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search startups, sectors, or insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-gray-700"
              />
            </div>
          )}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "database" && (
              <motion.div
                key="database"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <button
                    onClick={() => setActiveSector(null)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                      activeSector === null ? "bg-indigo-50 border-indigo-200 text-indigo-700" : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    All
                  </button>
                  {allSectors.map((sector) => (
                    <button
                      key={sector}
                      onClick={() => setActiveSector(sector)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                        activeSector === sector ? "bg-indigo-50 border-indigo-200 text-indigo-700" : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {sector}
                    </button>
                  ))}
                </div>

                {/* Cards */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {filteredStartups.map((startup: any) => {
                      const isUnicorn = startup.valuation.includes("Unicorn");
                      
                      return (
                        <motion.div
                          layout
                          key={startup.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          whileHover={{ scale: 1.03, y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="glass-card bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all border border-gray-100 group relative cursor-pointer h-[200px]"
                        >
                          {/* Animated Border Top */}
                          <div className={`absolute top-0 left-0 w-full h-1 ${isUnicorn ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-transparent transition-colors group-hover:bg-teal-400'}`} />

                          <div className="p-6 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-2 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{startup.name}</h3>
                                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">{startup.sector}</span>
                              </div>
                              <div className={`text-[10px] uppercase font-bold px-2 py-1 rounded bg-gray-50 border ${isUnicorn ? 'text-indigo-600 border-indigo-200' : 'text-gray-500 border-gray-200'}`}>
                                {startup.valuation.split(" ")[0]} 
                              </div>
                            </div>
                            
                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Raised</div>
                              <div className="font-bold text-gray-800 text-lg">{startup.funding}</div>
                            </div>
                            
                            {/* Hidden Expandable Insight */}
                            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-gray-50 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t border-gray-100">
                              <p className="text-xs font-medium text-gray-600 leading-relaxed">
                                {startup.keyDetail}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-card bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Cumulative Startup Funding ($M)</h3>
                  <p className="text-gray-500 text-sm font-medium">Trajectory from 2020 to 2026</p>
                </div>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={fundingGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorFunding" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                        itemStyle={{ color: '#4f46e5', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="funding" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorFunding)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
