import { PortfolioDashboard } from "@/features/portfolio/components/PortfolioDashboard";
import {
  investmentWatchlist,
  portfolioCards,
} from "@/features/portfolio/data/sample-portfolio";

export default function Home() {
  return (
      <PortfolioDashboard
          initialCards={portfolioCards}
          watchlistItems={investmentWatchlist}
      />
  );
}