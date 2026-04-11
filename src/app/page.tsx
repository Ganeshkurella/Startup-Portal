import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FounderGuidance } from "@/components/sections/FounderGuidance";
import { InvestmentGuide } from "@/components/sections/InvestmentGuide";
import { FounderResources } from "@/components/sections/FounderResources";
import { Workspaces } from "@/components/sections/Workspaces";
import { StartupExplorer } from "@/components/sections/StartupExplorer";
import { LivingInHyd } from "@/components/sections/LivingInHyd";
import { Community } from "@/components/sections/Community";
import { KeyMetrics } from "@/components/sections/KeyMetrics";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 font-sans antialiased">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <FounderGuidance />
        <InvestmentGuide />
        <FounderResources />
        <Workspaces />
        <StartupExplorer />
        <LivingInHyd />
        <Community />
        <KeyMetrics />
      </main>
      <footer className="border-t border-border/40 bg-background py-8 text-center text-sm text-muted-foreground relative z-20">
        <p>Hyderabad Startup Portal 2026. A hyper-local execution guide.</p>
      </footer>
    </div>
  );
}
