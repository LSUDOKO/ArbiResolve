import Navigation from "@/components/Navigation";
import RoundedSection from "@/components/RoundedSection";

export default function PortfolioPage() {
  const positions = [
    { name: "ETH", balance: "1.24", value: "$4,242.06", change: "+5.2%" },
    { name: "USDC", balance: "2,500.00", value: "$2,500.00", change: "0.0%" },
    { name: "ARB", balance: "1,200.00", value: "$2,208.50", change: "-1.4%" },
    { name: "GMX-GLP", balance: "850.42", value: "$1,120.15", change: "+0.8%" },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-[var(--header-height)] min-h-screen bg-[#0a0a0a]">
        <div className="content-wrapper py-12">
          <div className="mb-12">
            <span className="text-[var(--primary-accent)] font-mono text-sm uppercase tracking-widest">Global Status</span>
            <h1 className="text-5xl font-serif mt-2">Active <em>Portfolio.</em></h1>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">Manage your positions across the Arbitrum network. Our AI constantly monitors your yield and suggests adjustments for optimal performance.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-3">
              <div className="overflow-x-auto bg-[#161616] p-8 rounded-[2rem] border border-[var(--border)]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="pb-4 font-serif text-xl">Asset<em>.</em></th>
                      <th className="pb-4 font-serif text-xl">Balance<em>.</em></th>
                      <th className="pb-4 font-serif text-xl">Value<em>.</em></th>
                      <th className="pb-4 font-serif text-xl">24h Change<em>.</em></th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((pos) => (
                      <tr key={pos.name} className="border-b border-[var(--border)]/50 last:border-0 group hover:bg-white/[0.02] transition-colors">
                        <td className="py-6 font-medium text-lg">{pos.name}</td>
                        <td className="py-6 font-mono">{pos.balance}</td>
                        <td className="py-6 font-mono">{pos.value}</td>
                        <td className={`py-6 font-mono ${pos.change.startsWith('+') ? 'text-[var(--primary-accent)]' : pos.change.startsWith('-') ? 'text-red-500' : ''}`}>
                          {pos.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-[#161616] rounded-[2rem] border border-[var(--border)]">
                <h3 className="text-xl font-serif mb-6">AI <em>Suggestions</em></h3>
                <div className="space-y-4">
                  <div className="p-4 bg-[var(--primary-accent)]/5 rounded-xl border border-[var(--primary-accent)]/20">
                    <p className="text-sm font-medium text-[var(--primary-accent)] mb-2">High Yield Opportunity</p>
                    <p className="text-xs text-[var(--text-secondary)] mb-4">Camelot ETH/USDC pool APY rose to 18%. Potential +$42/mo by moving some idle USDC.</p>
                    <button className="text-xs font-mono underline hover:text-white">Execute Adjustment →</button>
                  </div>
                  <div className="p-4 bg-[var(--secondary-accent)]/5 rounded-xl border border-[var(--secondary-accent)]/20">
                    <p className="text-sm font-medium text-[var(--secondary-accent)] mb-2">Risk Alert</p>
                    <p className="text-xs text-[var(--text-secondary)] mb-4">GMX GLP utilization is peaking. Consider rebalancing to diversify risk.</p>
                    <button className="text-xs font-mono underline hover:text-white">Details →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
