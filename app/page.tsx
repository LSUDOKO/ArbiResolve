import Navigation from "@/components/Navigation";
import RoundedSection from "@/components/RoundedSection";
import Ribbon from "@/components/Ribbon";
import IntentBox from "@/components/IntentBox";
import Link from "next/link";

export default function Home() {
  const protocols = [
    "Uniswap V3", "Camelot", "GMX", "Aave", "Stargate", "Radiant", "Curve", "Lido", "Pendle", "Arbitrum"
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-[var(--header-height)]">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,255,136,0.05)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="content-wrapper text-center z-10">
            <h1 className="headline-pattern">
              You speak.
              <em>Arbitrum listens.</em>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              One sentence. The best DeFi route. Executed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app" className="btn btn-primary text-lg">
                Launch the agent →
              </Link>
              <Link href="/protocols" className="btn bg-white/5 border border-[var(--border)] text-lg hover:bg-white/10">
                Explore protocols
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section - Overlapping Rounded */}
        <RoundedSection darker className="z-10">
          <div className="content">
            <h2 className="headline-pattern">
              Intent in.
              <em>DeFi out.</em>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              ArbiResolve resolves the complexity of multi-protocol interactions on Arbitrum. 
              No more manually swapping, bridging, or calculating slippage. Just tell the agent what you want to achieve, and let the Arbitrum orbit do the work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-[#1a1a1a] rounded-3xl border border-[var(--border)] group hover:border-[var(--primary-accent)] transition-colors">
                <span className="text-sm font-mono text-[var(--primary-accent)] uppercase tracking-widest block mb-4">01. Intent Parsing</span>
                <h3 className="text-2xl mb-4 font-serif">Natural Language AI</h3>
                <p className="text-[var(--text-secondary)]">Our agent understands plain English. "Compound my GMX rewards into GLP" is a command, not a sequence of clicks.</p>
              </div>
              <div className="p-8 bg-[#1a1a1a] rounded-3xl border border-[var(--border)] group hover:border-[var(--primary-accent)] transition-colors">
                <span className="text-sm font-mono text-[var(--primary-accent)] uppercase tracking-widest block mb-4">02. Route Optimization</span>
                <h3 className="text-2xl mb-4 font-serif">Best Execution Only</h3>
                <p className="text-[var(--text-secondary)]">ArbiResolve scans the entire Arbitrum ecosystem — Uniswap, Camelot, GMX, and more — to find the most efficient path.</p>
              </div>
            </div>
          </div>
        </RoundedSection>

        {/* Intent Demo Section */}
        <RoundedSection className="z-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl mb-6">Experience the <em>resolution.</em></h2>
              <p className="text-xl text-[var(--text-secondary)]">Try the AI agent below. No wallet connection required for simulation.</p>
            </div>
            
            <IntentBox />
            
            <div className="mt-20 text-center">
              <p className="text-sm text-[var(--text-muted)] uppercase tracking-[0.3em] font-mono mb-8">Integrated with the best of Arbitrum</p>
              <Ribbon items={protocols} />
            </div>
          </div>
        </RoundedSection>

        {/* Closing/Get Started */}
        <RoundedSection darker className="z-30 text-center pb-32">
          <h2 className="headline-pattern">
            You have an intent.
            <em>We resolve it.</em>
          </h2>
          <Link href="/app" className="btn btn-primary text-xl mt-12 px-12 py-5">
            Launch Agent Workspace →
          </Link>
          <div className="mt-24 pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center text-[var(--text-secondary)] text-sm">
            <p>© 2026 ArbiResolve. Built for the Arbitrum Hackathon.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <Link href="/agent" className="hover:text-white">Public Agent Profile</Link>
              <Link href="https://github.com/arbiresolve" className="hover:text-white">Github</Link>
              <Link href="#" className="hover:text-white">Docs</Link>
            </div>
          </div>
        </RoundedSection>
      </main>
    </>
  );
}
