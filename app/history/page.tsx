import Navigation from "@/components/Navigation";

export default function HistoryPage() {
  const history = [
    { type: "Swap", desc: "100.00 USDC to ETH", date: "Apr 02, 2026", status: "Resolved", fee: "0.00042 ETH" },
    { type: "Bridge", desc: "500.00 USDC to Arbitrum", date: "Mar 30, 2026", status: "Resolved", fee: "$2.50" },
    { type: "Stake", desc: "1.50 WETH ➔ Lido", date: "Mar 28, 2026", status: "Resolved", fee: "0.00121 ETH" },
    { type: "Yield", desc: "Compound GLP Rewards", date: "Mar 25, 2026", status: "Resolved", fee: "0.00015 ETH" },
    { type: "Swap", desc: "50.00 ARB to USDC", date: "Mar 22, 2026", status: "Resolved", fee: "0.00840 ETH" },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-[var(--header-height)] min-h-screen bg-[#0a0a0a]">
        <div className="content-wrapper py-12">
          <div className="mb-12">
            <span className="text-[var(--primary-accent)] font-mono text-sm uppercase tracking-widest">Transaction Log</span>
            <h1 className="text-5xl font-serif mt-2">Past <em>Intents.</em></h1>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">A history of all intents resolved by the ArbiResolve agent. Each transaction is verifiable on the Arbitrum Explorer.</p>
          </div>

          <div className="bg-[#161616] p-8 rounded-[2rem] border border-[var(--border)] overflow-hidden shadow-2xl">
            <div className="space-y-4">
              {history.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-[#0a0a0a] rounded-2xl border border-[var(--border)] group hover:border-[var(--primary-accent)] transition-all animate-fade-in">
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--primary-accent)] transition-colors">
                      <span className="font-mono text-xs">{item.type}</span>
                    </div>
                    <div>
                      <p className="text-xl font-serif">{item.desc}</p>
                      <p className="text-sm text-[var(--text-muted)] tracking-wider mt-1">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-4 mt-6 md:mt-0 w-full md:w-auto pt-6 md:pt-0 border-t md:border-0 border-[var(--border)]">
                    <span className="px-3 py-1 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] text-xs font-mono rounded-full self-start md:self-auto">
                      {item.status}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] font-mono">Fee: {item.fee}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
