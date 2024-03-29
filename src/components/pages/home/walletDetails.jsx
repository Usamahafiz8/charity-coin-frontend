import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading500 from "./../../headings/heading500";
import axios from "axios";
import TokenInfo from "./TokenInfo";
import Heading700 from "../../headings/heading700";
import useResponsivePadding from "../../reponsive/ResponsibePadding";
import Heading400 from "../../headings/heading400";
import { motion } from "framer-motion";

const WalletDetail = () => {
  const [walletDetails, setWalletDetails] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useResponsivePadding(); // Get the mobile state

  useEffect(() => {
    const fetchWalletDetails = async () => {
      const walletAddress = "JTJ9Cz7i43DBeps5PZdX1QVKbEkbWegBzKPxhWgkAf1";
      const heliusAPIKey = "e8361445-1bc5-46c6-8851-c6e9810e7792";

      try {
        const response = await axios.post(
          "https://mainnet.helius-rpc.com/",
          {
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
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": heliusAPIKey,
            },
          }
        );

        const walletData = response.data.result;
        setWalletDetails(walletData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWalletDetails();
  }, []);

  // Function to filter tokens with balance greater than 0
  // const filterTokens = (tokens) => {
  //   return tokens.filter(
  //     (token) => token.token_info && token.token_info.balance > 0
  //   );
  // };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!walletDetails) {
    return (
      <div style={{ textAlign: "center", padding: "22px" }}>Loading...</div>
    );
  }

  // Filter tokens with balance greater than 0
  const filteredTokens = walletDetails
    ? walletDetails.items
        .filter(
          (token) =>
            token.token_info &&
            token.token_info.balance > 0 &&
            token.content.metadata
        )
        .slice(0, 8)
    : [];

  // Animation variants
  const variants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "22px 200px" : "22px", // Set padding based on isMobile state
        justifyContent: "center",
        backgroundColor: "#A0F8F8",
        marginBottom: "56px",
      }}
    >
      <div style={{ marginBottom: "48px" }}>
        <Heading700 styles={{ fontSize: "3.5em" }}>
          Total Donation Pool Value:
        </Heading700>
      </div>
      {isMobile ? (
        <>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
              borderBottom: "3px solid black",
              paddingBottom: "30px",
            }}
          >
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <Heading500>Underlying Asset</Heading500>
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <Heading500>Token Name</Heading500>
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <Heading500>Token Amount</Heading500>
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <Heading500>Percentage of Total Supply </Heading500>
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <Heading500>$ Amount</Heading500>
            </Grid>
          </Grid>

          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 2 }}
          >
            {filteredTokens.map((token, index) => (
              <Grid
                key={index}
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  borderRadius: "16px",
                  padding: "16px 8px ",
                  backgroundColor: "#FFFFFF",
                  marginTop: "6px",
                }}
              >
                <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                  {token.content.metadata && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        src={`${token.content.links.image}`}
                        alt={`${token.content.metadata.name} Logo`}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "10px",
                        }}
                      />
                      <Heading500>{token.content.metadata.symbol}</Heading500>
                    </div> // <Headi ng500>Underlying Asset</Heading500>
                  )}
                </Grid>
                <Grid
                  item
                  xl={2}
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",

                    flexDirection: "row",
                  }}
                >
                  <Heading500>
                    {token.content.metadata.name}
                    {/* {token.strategy ? token.strategy : "No Strategy"} */}
                  </Heading500>
                </Grid>
                <Grid
                  item
                  xl={2}
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",

                    flexDirection: "row",
                  }}
                >
                  <Heading500>{token.token_info.balance}</Heading500>
                </Grid>
                <Grid
                  item
                  xl={2}
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",

                    flexDirection: "row",
                  }}
                >
                  <Heading500>
                    {(
                      (token.token_info.balance / token.token_info.supply) *
                      100
                    ).toFixed(2)}
                    %
                  </Heading500>
                </Grid>
                <Grid
                  item
                  xl={2}
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",

                    flexDirection: "row",
                  }}
                >
                  <TokenInfo
                    address={token.id}
                    name={token.content.metadata.name}
                  />
                  {/* {token.id} */}
                  {/* <Heading500>{token.id}</Heading500> */}
                </Grid>
              </Grid>
            ))}
          </motion.div>
        </>
      ) : null}
      {!isMobile && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 2 }}
        >
          {" "}
          {filteredTokens.map((token, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                justifyContent: "space-around",
                alignContent: "center",
                borderRadius: "16px",
                padding: "22px 16px",
                backgroundColor: "#FFFFFF",
                marginTop: "6px",
              }}
            >
              <div>
                <Heading400 styles={{ fontSize: "1em" }}>
                  Underlying Asset
                </Heading400>
                <img
                  src={`${token.content.links.image}`}
                  alt={`${token.content.metadata.name} Logo`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                  }}
                />
              </div>

              <div>
                <Heading400 styles={{ fontSize: "1em" }}>Token Name</Heading400>
                <Heading500>{token.content.metadata.name}</Heading500>
              </div>
              <div>
                <Heading400 styles={{ fontSize: "1em" }}>
                  Token Amount
                </Heading400>

                <Heading500>{token.token_info.balance}</Heading500>
              </div>

              <div>
                <Heading400 styles={{ fontSize: "1em" }}>
                  Percentage of Total Supply
                </Heading400>

                <Heading500>
                  {(
                    (token.token_info.balance / token.token_info.supply) *
                    100
                  ).toFixed(2)}
                  %
                </Heading500>
              </div>

              <div>
                <Heading400 styles={{ fontSize: "1em" }}>$ Amount</Heading400>

                <TokenInfo
                  address={token.id}
                  name={token.content.metadata.name}
                />
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </Box>
  );
};

export default WalletDetail;
