type InvestmentWatchlistProps = {
  items: string[];
};

export function InvestmentWatchlist({ items }: InvestmentWatchlistProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Investment watch
      </p>
      <h2 className="mt-2 text-2xl font-bold">Items to research</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
