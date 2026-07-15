import type { PortfolioCard } from "../types";

export function calculateCollectionValue(cards: PortfolioCard[]) {
  return cards.reduce(
    (runningTotal, currentCard) =>
      runningTotal + currentCard.marketValueGbp * currentCard.quantityOwned,
    0,
  );
}

export function countOwnedCards(cards: PortfolioCard[]) {
  return cards.reduce(
    (runningTotal, currentCard) => runningTotal + currentCard.quantityOwned,
    0,
  );
}

export function findBestPerformer(cards: PortfolioCard[]) {
  if (cards.length === 0) {
    return undefined;
  }

  return cards.reduce((bestCard, currentCard) =>
    currentCard.priceChangePercentage > bestCard.priceChangePercentage
      ? currentCard
      : bestCard,
  );
}

export function formatGbp(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export function formatPercentage(value: number) {
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
}
