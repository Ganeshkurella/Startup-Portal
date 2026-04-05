"use client";

import { motion } from "framer-motion";
import { hyderabadData } from "@/app/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scale } from "lucide-react";

export function Policies() {
  return (
    <section id="policies" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-outfit mb-4">Governance & Policy Framework</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">The proactive state interventions actively shaping Hyderabad's global acceleration.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-4xl mx-auto rounded-xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm">
            <Accordion type="single" collapsible className="w-full">
              {hyderabadData.policies.map((policy: any, i: number) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-lg font-semibold hover:text-blue-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <Scale className="h-5 w-5 text-emerald-400" />
                      {policy.name}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-8">
                    {policy.impact}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
