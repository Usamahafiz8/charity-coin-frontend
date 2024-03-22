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
        color: "white",
        padding: "40px",
        position: "relative",
      }}
    >
      {/* Gradient glow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "radial-gradient(circle, rgba(3,238,239,0.75) -50%, rgba(3,238,239,0) 30%)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "radial-gradient(circle, rgba(3,238,239,0.75) -50%, rgba(3,238,239,0) 40%)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "16px",
              zIndex: 2, // Ensure content is above the gradient
            }}
          >
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom:"18px" }}>
              <Heading700 styles={{ color: "#ffffff", fontSize:"2.8em" }}>Philanthropy :</Heading700>
              <Heading700 styles={{ color: "#03EEEF", fontSize:"2.8em" }}> On-Chain</Heading700>
            </div>
            <Heading400 styles={{ color: "#ffffff" }}>
              CharityCoin harnesses blockchain technology to redefine charitable giving. By leveraging the Solana network, we offer a transparent and efficient platform for collective philanthropy, ensuring every donation makes a meaningful impact towards a better world.
            </Heading400>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} sx={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
