"use client";

import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { InvestmentWatchlist } from "./InvestmentWatchlist";
import { NextFeatureCard } from "./NextFeatureCard";
import { PortfolioSection } from "./PortfolioSection";
import { StatCard } from "./StatCard";
import type { PortfolioCard } from "../types";
import {
    calculateCollectionValue,
    countOwnedCards,
    findBestPerformer,
    formatGbp,
    formatPercentage,
} from "../utils/portfolio-metrics";

type PortfolioDashboardProps = {
    initialCards: PortfolioCard[];
    watchlistItems: string[];
};

export function PortfolioDashboard({
                                       initialCards,
                                       watchlistItems,
                                   }: PortfolioDashboardProps) {
    const [cards, setCards] = useState(initialCards);
    function handleAddCard(cardName: string) {
        const trimmedCardName = cardName.trim();

        if (trimmedCardName.length === 0) {
            return;
        }

        const newCard: PortfolioCard = {
            id: `manual-${Date.now()}`,
            name: trimmedCardName,
            setName: "Manual entry",
            rarity: "Unknown",
            condition: "Near Mint",
            quantityOwned: 1,
            marketValueGbp: 0,
            priceChangePercentage: 0,
            accentClassName: "from-cyan-400 to-blue-500",
        };

        setCards((currentCards) => [newCard, ...currentCards]);
    }
    const totalValue = calculateCollectionValue(cards);
    const cardsTracked = countOwnedCards(cards);
    const bestPerformer = findBestPerformer(cards);

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100 sm:px-10">
            <section className="mx-auto flex max-w-7xl flex-col gap-8">
                <DashboardHeader onAddCard={handleAddCard} />

                <section className="grid gap-4 md:grid-cols-3">
                    <StatCard
                        helperText={`${formatGbp(38.2)} this month`}
                        helperTone="positive"
                        label="Collection value"
                        value={formatGbp(totalValue)}
                    />

                    <StatCard
                        helperText="Across raw and graded cards"
                        label="Items in collection"
                        value={cardsTracked.toString()}
                    />

                    <StatCard
                        helperText={
                            bestPerformer
                                ? `${formatPercentage(bestPerformer.priceChangePercentage)} this month`
                                : "Add your first card"
                        }
                        helperTone="positive"
                        label="Best performer"
                        value={bestPerformer?.name ?? "No cards yet"}
                    />
                </section>

                <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
                    <PortfolioSection cards={cards} />

                    <aside className="flex flex-col gap-6">
                        <InvestmentWatchlist items={watchlistItems} />
                        <NextFeatureCard />
                    </aside>
                </section>
            </section>
        </main>
    );
}