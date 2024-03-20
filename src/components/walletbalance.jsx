import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WalletDetails = () => {
  const [walletDetails, setWalletDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWalletDetails = async () => {
      const walletAddress = 'JTJ9Cz7i43DBeps5PZdX1QVKbEkbWegBzKPxhWgkAf1';
      const heliusAPIKey = 'e8361445-1bc5-46c6-8851-c6e9810e7792';

      try {
        const response = await axios.post(
          'https://devnet.helius-rpc.com/',
          {
            jsonrpc: '2.0',
            id: 'my-id',
            method: 'getAssetsByOwner',
            params: {
              ownerAddress: walletAddress,
              page: 1,
              limit: 1000,
              displayOptions: {
                showFungible: true,
                showNativeBalance: true,
              },
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': heliusAPIKey,
            },
          }
        );

        const walletData = response.data.result;
        setWalletDetails(walletData);
        console.log('============================');
        console.log(walletData);
        console.log('============================');
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWalletDetails();
  }, []);

  // Function to filter tokens with balance greater than 0
  const filterTokens = (tokens) => {
    return tokens.filter((token) => token.token_info && token.token_info.balance > 0);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!walletDetails) {
    return <div>Loading...</div>;
  }

  // Filter tokens with balance greater than 0
  const filteredTokens = filterTokens(walletDetails.items);

  return (
    <div>
      <h1>Wallet Details</h1>
      <p>Total Balance (SOL): {walletDetails.nativeBalance.total_price}</p>
      <h2>Token Details:</h2>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Balance</th>
            <th>Symbol</th>

            <th>Contract Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredTokens.map((token, index) => (
            <tr key={index}>
              <td>
                {token.content.metadata && (
                  <img src={`${token.content.links.image}`} alt={`${token.content.metadata.name} Logo`} style={{ width: '50px', height: '50px', borderRadius:"10px" }} />
                )}
                {/* ,{token.content.links.image} */}
              </td>
              <td>{token.content.metadata.name}</td>
              <td>{token.token_info.balance}</td>
              <td>{token.token_info.symbol}</td>
              <td>{token.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletDetails;



