import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrencyInfo = () => {
  const [solanaCoins, setSolanaCoins] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchSolanaCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search?query=solana"
        );
        const data = response.data.coins;
        setSolanaCoins(data);
      } catch (error) {
        console.error("Error fetching Solana coins:", error);
      }
    };

    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = response.data.coins;
        setTrendingCoins(data);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchSolanaCoins();
    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <h1>Top Coins on Solana Blockchain</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {solanaCoins.map((coin, index) => (
            <tr key={index}>
              <td>{coin.id}</td>
              <td>{coin.symbol}</td>
              <td>{coin.name}</td>
              <td>
                <img src={coin.thumb} alt={coin.name} style={{ width: "50px", height: "50px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Trending Coins</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {trendingCoins.map((coin, index) => (
            <tr key={index}>
              <td>{coin.item.name}</td>
              <td>{coin.item.symbol}</td>
              <td>{coin.item.data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyInfo;
