import React, { useEffect, useState } from "react";
import axios from "axios";
import { Token } from "../../content/tokenDetails";

const TokenInfo = ({ token }) => {
  const [tokenDetails, setTokenDetails] = useState(null);

  useEffect(() => {
    const fetchTokenDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.geckoterminal.com/api/v2/networks/solana/tokens/multi/${token.address}`
        );
        const data = response.data.data[0];
        setTokenDetails(data);
      } catch (error) {
        console.error(`Error fetching ${token.name} details:`, error);
      }
    };

    fetchTokenDetails();
  }, [token]);

  return tokenDetails ? (
    <tr>
      <td>
        <img src={tokenDetails.attributes.image_url} alt={`${tokenDetails.attributes.name} Logo`} style={{ width: "50px", height: "50px" }} />
      </td>
      <td>{tokenDetails.attributes.name}</td>
      <td>{tokenDetails.attributes.symbol}</td>
      <td>{tokenDetails.attributes.total_supply}</td>
      <td>{tokenDetails.attributes.price_usd}</td>
      <td>{tokenDetails.attributes.market_cap_usd}</td>
    </tr>
  ) : null;
};

const CurrencyInfo = () => {
  

  return (
    <div style={{display:"flex", justifyContent:'center', flexDirection:"column", color:"black", backgroundColor:"white"}}>
      <h1>Top Solana Tokens</h1>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Total Supply</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody>
          {Token.map((token, index) => (
            <TokenInfo key={index} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyInfo;
