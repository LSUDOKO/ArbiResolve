"use client";

import { useState } from "react";

export default function IntentBox() {
  const [intent, setIntent] = useState("");
  const [isResolving, setIsResolving] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleResolve = () => {
    if (!intent) return;
    setIsResolving(true);
    setResult(null);

    // Simulate resolution
    setTimeout(() => {
      setIsResolving(false);
      setResult("Optimal route found: Uniswap V3 (USDC/ETH) → 0.05% slippage. Proceeding with execution on Arbitrum One.");
    }, 2000);
  };

  return (
    <div className="bg-[#161616] p-8 md:p-12 rounded-[2rem] border border-[var(--border)] shadow-2xl backdrop-blur-xl">
      <h3 className="text-2xl mb-6 font-serif">What is your intent<em>?</em></h3>
      
      <div className="relative">
        <textarea
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          placeholder="e.g., Swap 100 USDC to ETH with the best yield on Arbitrum"
          className="w-full bg-[#0a0a0a] border border-[var(--border)] rounded-2xl p-6 text-xl min-h-[160px] focus:outline-none focus:border-[var(--primary-accent)] transition-colors resize-none"
        />
        
        <button
          onClick={handleResolve}
          disabled={isResolving || !intent}
          className="absolute bottom-6 right-6 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isResolving ? "Resolving..." : "Resolve Intent →"}
        </button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-[#0a0a0a] border-l-4 border-[var(--primary-accent)] rounded-r-xl fade-in active">
          <p className="text-[var(--primary-accent)] font-mono text-sm uppercase tracking-widest mb-2">Agent resolved</p>
          <p className="text-lg">{result}</p>
        </div>
      )}
    </div>
  );
}
