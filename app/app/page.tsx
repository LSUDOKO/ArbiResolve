import Navigation from "@/components/Navigation";
import IntentBox from "@/components/IntentBox";

export default function AppPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[var(--header-height)] min-h-screen bg-[#0a0a0a]">
        <div className="content-wrapper py-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[var(--primary-accent)] font-mono text-sm uppercase tracking-widest">Workspace</span>
              <h1 className="text-5xl font-serif mt-2">Agent <em>Workspace.</em></h1>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-[var(--text-muted)] text-sm uppercase tracking-wider">Status</p>
                <p className="text-[var(--primary-accent)] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--primary-accent)] rounded-full animate-pulse"></span>
                  Connected to Arbitrum
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Intent Area */}
            <div className="lg:col-span-2">
              <IntentBox />
              
              <div className="mt-8 p-8 bg-[#161616] rounded-[2rem] border border-[var(--border)]">
                <h3 className="text-xl font-serif mb-6">Recent <em>Activity</em></h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-[#0a0a0a] rounded-xl border border-[var(--border)]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--primary-accent)]/10 flex items-center justify-center text-[var(--primary-accent)]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div>
                          <p className="font-medium">Swap 500 USDC → ARB</p>
                          <p className="text-xs text-[var(--text-muted)]">Completed 2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-sm font-mono text-[var(--text-secondary)]">0.421 ETH</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="p-8 bg-[#161616] rounded-[2rem] border border-[var(--border)]">
                <h3 className="text-xl font-serif mb-6">Market <em>Overview</em></h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">ETH Price</span>
                    <span className="font-mono">$3,421.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">ARB Price</span>
                    <span className="font-mono">$1.84</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">Gas Price</span>
                    <span className="text-[var(--primary-accent)] font-mono">0.1 Gwei</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#161616] rounded-[2rem] border border-[var(--border)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-accent)]/5 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-4">Security <em>Check</em></h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">All transactions are simulated and verified via the ZK-circuit before execution.</p>
                <div className="py-2 px-4 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] text-xs font-mono rounded-lg inline-block">
                  VERIFIED AGENT #042
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
