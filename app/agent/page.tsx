import Navigation from "@/components/Navigation";
import RoundedSection from "@/components/RoundedSection";

export default function AgentPage() {
  const agentAddress = "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432";

  return (
    <>
      <Navigation />
      <main className="pt-[var(--header-height)] min-h-screen bg-[#0a0a0a]">
        <div className="content-wrapper py-12">
          <div className="mb-12">
            <span className="text-[var(--primary-accent)] font-mono text-sm uppercase tracking-widest">Public Identity</span>
            <h1 className="text-5xl font-serif mt-2">Agent <em>Profile.</em></h1>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">Registered on Arbitrum One registry. Resolving intents since March 2026. Verified performance and uptime metrics.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Agent Info */}
            <div className="p-12 bg-[#161616] rounded-[3rem] border border-[var(--border)] shadow-2xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-24 h-24 rounded-full bg-[var(--primary-accent)]/10 border-2 border-[var(--primary-accent)]/20 flex items-center justify-center text-5xl font-serif text-[var(--primary-accent)]">
                  AR
                </div>
                <div>
                  <h2 className="text-3xl font-serif">ArbiResolve <em>#042</em></h2>
                  <p className="text-[var(--text-muted)] font-mono text-xs mt-2 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full inline-block">Arbitrum Native</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[var(--text-secondary)] text-sm mb-2">Registered Address (Arbitrum One)</p>
                  <code className="block p-4 bg-[#0a0a0a] rounded-xl border border-[var(--border)] text-[var(--primary-accent)] text-lg break-all">
                    {agentAddress}
                  </code>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-[var(--border)]">
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">Resolutions</p>
                    <p className="text-2xl font-serif">14,242<em>.</em></p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-[var(--border)]">
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">Status</p>
                    <p className="text-2xl font-serif text-[var(--primary-accent)]">Online<em>.</em></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="space-y-8">
              <div className="p-8 bg-[#161616] rounded-[2rem] border border-[var(--border)]">
                <h3 className="text-xl font-serif mb-6">Agent <em>Performance</em></h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-[var(--text-secondary)]">Resolution Speed</span>
                      <span className="text-[var(--primary-accent)] font-mono">99.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary-accent)] w-[99.8%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-[var(--text-secondary)]">Gas Efficiency</span>
                      <span className="text-[var(--primary-accent)] font-mono">94.2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary-accent)] w-[94.2%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-[var(--text-secondary)]">Transaction Uptime</span>
                      <span className="text-[var(--primary-accent)] font-mono">100.0%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary-accent)] w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#161616] rounded-[2rem] border border-[var(--border)]">
                <h3 className="text-xl font-serif mb-4">Core <em>Directives</em></h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)] list-none">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--primary-accent)] rounded-full"></span>
                    Always seek lowest slippage across all Arbitrum DEXs.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--primary-accent)] rounded-full"></span>
                    Prioritize yield harvesting on Camelot and GMX.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--primary-accent)] rounded-full"></span>
                    Validate safety parameters via ZK-Proof simulations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
