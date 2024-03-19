// const apiKey = "6a8243da-dfda-41db-a53f-464cf13a68dc";
import React, { useEffect, useState } from "react";

const CurrencyInfo = () => {
  const [solanaData, setSolanaData] = useState(null);

  useEffect(() => {
    const fetchSolanaData = async () => {
      try {
        const apiKey = "6a8243da-dfda-41db-a53f-464cf13a68dc"; // Replace with your CoinMarketCap API key
        const headers = {
          'x-api-key': apiKey
        };

        const response = await fetch(
          "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=100&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all&audited=false",
          { headers }
        );
        const data = await response.json();

        // Find Solana data
        const solana = data.data.cryptoCurrencyList.find(
          (coin) => coin.symbol === "SOL"
        );

        if (solana) {
          setSolanaData(solana);
        } else {
          console.log("Solana data not found.");
        }
      } catch (error) {
        console.error("Error fetching Solana data:", error);
      }
    };

    fetchSolanaData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5E4",
        color: "black",
      }}
    >
      <h1>Solana Information</h1>
      {solanaData && (
        <div>
          <p>Name: {solanaData.name}</p>
          <p>Symbol: {solanaData.symbol}</p>
          <p>Market Cap: {solanaData.quotes.USD.marketCap}</p>
          <p>Price: {solanaData.quotes.USD.price}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default CurrencyInfo;
