import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading500 from "../../headings/heading500";

const TokenInfo = ({ address }) => {
  const [tokenDetails, setTokenDetails] = useState(null);

  useEffect(() => {
    const fetchTokenDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.geckoterminal.com/api/v2/networks/solana/tokens/multi/${address}`
        );
        const data = response.data.data[0];
        setTokenDetails(data);
      } catch (error) {
        console.error(`Error fetching ${name} details:`, error);
      }
    };

    fetchTokenDetails();
  }, [address]);

  return tokenDetails ? (
    <Heading500>
      <td>{tokenDetails.attributes.price_usd}</td>
    </Heading500>
  ) : (
    <Heading500>---</Heading500>
  );
};

export default TokenInfo;
