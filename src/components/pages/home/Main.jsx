import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import logoSVG from "./../../../assets/solana.svg"; // Import your SVG file
import Heading700 from "../../headings/heading700";
import Heading500 from "../../headings/heading500";
import Heading400 from "../../headings/heading400";

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // textAlign: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // padding: "40px",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Heading700 styles={{ color: "#ffffff" }}>
                Philanthropy :
              </Heading700>
              <Heading700 styles={{ color: "#03EEEF" }}> On-Chain</Heading700>
            </div>

            <Heading400 styles={{ color: "#ffffff" }}>
              CharityCoin harnesses blockchain technology to redefine charitable
              giving. By leveraging the Solana network, we offer a transparent
              and efficient platform for collective philanthropy, ensuring every
              donation makes a meaningful impact towards a better world.
            </Heading400>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} sx={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // textAlign: "center",
            }}
          >
            <img
              src={logoSVG}
              alt="Logo"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
