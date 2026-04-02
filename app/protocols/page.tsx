import Navigation from "@/components/Navigation";
import Ribbon from "@/components/Ribbon";

export default function ProtocolsPage() {
  const integrationList = [
    { name: "Uniswap V3", category: "DEX", desc: "Concentrated liquidity for optimal swap execution on Arbitrum.", apy: "0.05% - 1.0%" },
    { name: "Camelot", category: "Yield", desc: "Efficiency-driven decentralized exchange and launchpad.", apy: "5% - 40%" },
    { name: "GMX", category: "Perpetuals", desc: "Decentralized spot and perpetual exchange with low fees.", apy: "8% - 12%" },
    { name: "Aave", category: "Lending", desc: "The world's largest liquidity protocol for lending and borrowing.", apy: "1% - 6%" },
    { name: "Curve", category: "Stablecoins", desc: "Efficient stablecoin swaps with low slippage.", apy: "2% - 8%" },
    { name: "Stargate", category: "Bridging", desc: "Fully composable native asset bridge.", apy: "N/A" },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-[var(--header-height)] min-h-screen bg-[#0a0a0a]">
        <div className="content-wrapper py-12">
          <div className="mb-20">
            <span className="text-[var(--primary-accent)] font-mono text-sm uppercase tracking-widest">Ecosystem</span>
            <h1 className="text-5xl font-serif mt-2">Supported <em>Protocols.</em></h1>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">ArbiResolve is built on the shoulders of the most robust protocols on Arbitrum. We integrate them into a single, unified interface for your intents.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationList.map((proto, i) => (
              <div key={i} className="p-10 bg-[#161616] rounded-[3rem] border border-[var(--border)] group hover:border-[var(--primary-accent)] transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl font-serif text-[var(--primary-accent)]">
                    {proto.name[0]}
                  </div>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--primary-accent)] transition-colors">
                    {proto.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif mb-4">{proto.name}<em>.</em></h3>
                <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed">{proto.desc}</p>
                <div className="flex justify-between items-center pt-8 border-t border-[var(--border)]">
                  <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest">Est. APY</span>
                  <span className="text-[var(--primary-accent)] font-mono">{proto.apy}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 pb-20">
            <h2 className="text-center font-serif text-3xl mb-12">More coming <em>soon.</em></h2>
            <Ribbon items={integrationList.map(p => p.name)} />
          </div>
        </div>
      </main>
    </>
  );
}
