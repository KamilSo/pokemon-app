import type { PortfolioCard } from "../types";
import { formatGbp, formatPercentage } from "../utils/portfolio-metrics";

type PortfolioCardItemProps = {
  card: PortfolioCard;
};

export function PortfolioCardItem({ card }: PortfolioCardItemProps) {
  const trendClassName =
    card.priceChangePercentage >= 0 ? "text-emerald-300" : "text-rose-300";

  return (
    <article className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4 sm:grid-cols-[110px_1fr_auto] sm:items-center">
      <div
        className={`flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br ${card.accentClassName} text-sm font-black tracking-[0.3em] text-white shadow-lg`}
      >
        TCG
      </div>

      <div>
        <h3 className="text-xl font-bold">{card.name}</h3>
        <p className="mt-1 text-sm text-slate-400">
          {card.setName} · {card.rarity}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1">
            {card.condition}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            Owned: {card.quantityOwned}
          </span>
        </div>
      </div>

      <div className="text-left sm:text-right">
        <p className="text-2xl font-bold">{formatGbp(card.marketValueGbp)}</p>
        <p className={`text-sm ${trendClassName}`}>
          {formatPercentage(card.priceChangePercentage)}
        </p>
      </div>
    </article>
  );
}
