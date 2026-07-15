import type { PortfolioCard } from "../types";
import { PortfolioCardItem } from "./PortfolioCardItem";

type PortfolioSectionProps = {
  cards: PortfolioCard[];
};

export function PortfolioSection({ cards }: PortfolioSectionProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Portfolio
          </p>
          <h2 className="mt-2 text-2xl font-bold">Your cards</h2>
        </div>
        <p className="text-sm text-slate-400">
          Sample prices for the MVP shell
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {cards.map((card) => (
          <PortfolioCardItem card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
