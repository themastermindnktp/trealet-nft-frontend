import { CardGrid } from "../CardGrid";
import { AuctionCard } from "./AuctionCard";
import { auctions } from "./_data";
import { httpClient } from "../../service";
import { useEffect, useState } from "react";
import { Auction } from "../../type";

//TODO: we should write a custom hook for fetching and updating data
const getMyAuctions = async (setAuctions: (value: Auction[]) => void, setIsLoading: (value: boolean) => void) => {
  try {
    setIsLoading(true);
    const response = await httpClient.get("/my-auctions");
    //FYI: https://axios-http.com/docs/res_schema
    if(response.status === 200) {
      setAuctions(response.data);
    }
  } catch (e) {
    //TODO: for mocking only
    setAuctions(auctions);
    console.log(e)
  } finally {
    setIsLoading(false);
  }
}

export const MyAuctions: React.FunctionComponent = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getMyAuctions(setAuctions, setIsLoading)
  }, []);
  return (
    <CardGrid>
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </CardGrid>
  );
};
