import React, { useEffect, useState } from "react";
import axios from "axios";

const SolanaWalletBalance = ({ walletAddress }) => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [assetAllocation, setAssetAllocation] = useState({});

  useEffect(() => {
    const getSolanaBalance = async () => {
      try {
        const walletResponse = await getSolanaWalletBalance(walletAddress);
        if (!walletResponse || "error" in walletResponse) {
          return;
        }

        const { tokenInfo, nativeInfo } = getSolanaWalletInfo(walletResponse);

        const newAssetAllocation = {};
        let newTotalBalance = 0;

        if (nativeInfo) {
          newAssetAllocation["SOL"] = {
            amount: nativeInfo["Solana"]?.amount || 0,
            balance: nativeInfo["Solana"]?.balance || 0,
          };
          newTotalBalance += nativeInfo["Solana"]?.balance || 0;
        }

        for (const token of tokenInfo) {
          const { id, symbol, balance, decimals } = token;

          const priceUsd = await getSolanaTokenPriceUsd(id);
          if (priceUsd === null) {
            continue;
          }

          const adjustedBalance = balance / 10 ** decimals;
          const usdBalance = adjustedBalance * priceUsd;

          if (usdBalance < 0.01) {
            continue;
          }

          newTotalBalance += usdBalance;
          newAssetAllocation[symbol] = {
            amount: adjustedBalance,
            balance: usdBalance,
          };
        }

        setTotalBalance(newTotalBalance);
        setAssetAllocation(newAssetAllocation);
      } catch (error) {
        console.error("Error fetching Solana balance:", error);
      }
    };

    getSolanaBalance();
  }, [walletAddress]);

  const getSolanaWalletBalance = async (walletAddress) => {
    const url = 
    // `https://mainnet.helius-rpc.com/?api-key=e8361445-1bc5-46c6-8851-c6e9810e7792`;
    `https://devnet.helius-rpc.com/?api-key=e8361445-1bc5-46c6-8851-c6e9810e7792`
    // https://mainnet.helius-rpc.com/?api-key=${process.env.REACT_APP_HELIOUS_API_KEY}

    const payload = {
      jsonrpc: "2.0",
      id: "my-id",
      method: "getAssetsByOwner",
      params: {
        ownerAddress: walletAddress,
        page: 1,
        limit: 1000,
        displayOptions: {
          showFungible: true,
          showNativeBalance: true,
        },
      },
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error("Error fetching Solana wallet balance:", error);
      return null;
    }
  };

  const getSolanaWalletInfo = (response) => {
    try {
      if (!response || !response.result || !response.result.items) {
        return { tokenInfo: [], nativeInfo: null };
      }

      const extractedInfo = response.result.items.map((item) => {
        const tokenData = {
          id: item.id || "",
          name: item.content?.metadata?.name || "",
          symbol: item.content?.metadata?.symbol || "",
          balance: item.token_info?.balance || 0,
          decimals: item.token_info?.decimals || 0,
        };
        return tokenData;
      });

      const nativeBalance = {};
      if ("nativeBalance" in response.result) {
        const data = response.result.nativeBalance;
        const amount = parseFloat(data.lamports || 0) / 10 ** 9;
        nativeBalance["Solana"] = {
          amount: amount,
          balance: data.total_price || 0,
        };
      }

      return { tokenInfo: extractedInfo, nativeInfo: nativeBalance };
    } catch (error) {
      console.error("Error extracting token information:", error);
      return { tokenInfo: [], nativeInfo: null };
    }
  };

  const getSolanaTokenPriceUsd = async (contractAddress) => {
    const url = `https://api.geckoterminal.com/api/v2/simple/networks/solana/token_price/${contractAddress}`;

    try {
      const response = await axios.get(url, {
        headers: { accept: "application/json" },
      });
      const data = response.data;
      const tokenPrices = data?.data?.attributes?.token_prices || {};
      return parseFloat(tokenPrices[contractAddress] || 0);
    } catch (error) {
      console.error("Error fetching Solana token price:", error);
      return null;
    }
  };

  return (
    <div>
      <h1>Solana Wallet Balance</h1>
      <p>Total Balance: ${totalBalance.toFixed(2)}</p>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Amount</th>
            <th>Balance (USD)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(assetAllocation).map(
            ([token, { amount, balance }], index) => (
              <tr key={index}>
                <td>{token}</td>
                <td>{amount}</td>
                <td>{balance.toFixed(2)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SolanaWalletBalance;





