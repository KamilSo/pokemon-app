"use client";

import { type FormEvent, useState } from "react";

type DashboardHeaderProps = {
  onAddCard: (cardName: string) => void;
};
export function DashboardHeader({ onAddCard }: DashboardHeaderProps) {
  const [isAddCardPanelOpen, setIsAddCardPanelOpen] = useState(false);
  const [cardName, setCardName] = useState("");
  function handleAddCardSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onAddCard(cardName);

    setCardName("");
    setIsAddCardPanelOpen(false);
  }
  return (
    <div className="flex flex-col gap-4">
      <nav className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            PokePortfolio
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            Track, value, and grow your Pokemon collection.
          </h1>
        </div>

        <div className="flex gap-3">
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
            Region: UK
          </button>
          <button
              className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950"
              onClick={() => setIsAddCardPanelOpen(true)}
          >
            Add card
          </button>
        </div>
      </nav>
      {isAddCardPanelOpen && (
          <form className="mt-4 space-y-4" onSubmit={handleAddCardSubmit}>
            <div>
              <label className="block text-sm font-semibold text-slate-200">
                Card name
              </label>

              <input
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none"
                  onChange={(event) => setCardName(event.target.value)}
                  placeholder="e.g. Charizard ex"
                  value={cardName}
              />
            </div>

            <p className="text-sm text-slate-300">
              Preview: {cardName || "No card name entered yet"}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                  className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={cardName.trim().length === 0}
                  type="submit"
              >
                Add to collection
              </button>

              <button
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200"
                  onClick={() => setIsAddCardPanelOpen(false)}
                  type="button"
              >
                Close
              </button>
            </div>
          </form>
      )}
    </div>
  );
}
