import { CardGrid } from "../CardGrid";
import { AuctionCard } from "./AuctionCard";
import { auctions } from "./_data";

export const MyAuctions: React.FunctionComponent = () => {
  return (
    <CardGrid>
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </CardGrid>
  );
};
