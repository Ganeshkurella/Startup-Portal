import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OpportunityFinder } from "@/components/sections/OpportunityFinder";
import { KeyMetrics } from "@/components/sections/KeyMetrics";
import { Opportunities } from "@/components/sections/Opportunities";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { AIDeepTech } from "@/components/sections/AIDeepTech";
import { LivingInHyd } from "@/components/sections/LivingInHyd";
import { FounderActionGuide } from "@/components/sections/FounderActionGuide";
import { AIAssistant } from "@/components/ui/AIAssistant";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full mx-auto selection:bg-blue-500/30">
        <Hero />
        <OpportunityFinder />
        <KeyMetrics />
        <Opportunities />
        <Ecosystem />
        <AIDeepTech />
        <LivingInHyd />
        <FounderActionGuide />
      </main>
      <AIAssistant />
      <footer className="border-t border-border/40 bg-background py-8 text-center text-sm text-muted-foreground relative z-20">
        © 2026 Hyderabad Startup Portal. Built for the fastest growing ecosystem.
      </footer>
    </>
  );
}
