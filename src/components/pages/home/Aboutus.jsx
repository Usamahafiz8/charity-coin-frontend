import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import logoSVG from "./../../../assets/solana-coin.svg"; 

const Aboutus = () => {
  const [index, setIndex] = useState(0);
  const texts = ["We Grow your", "Crypto", "Saving", "Investiment"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => ((prevIndex + 1) % (texts.length - 1)) + 1); // Start from index 1
    }, 4000); // Change 1000 to adjust the delay between transitions (in milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        padding: "20px 40px ",
        position: "relative",
        display: "flex",
        color: "black",
        // backgroundColor: "red", // Ensures text elements are positioned relative to this div
      }}
    >
      {/* Render static text "We Grow your" */}
      <Typography
        style={{
          position: "absolute", // Positions the text absolutely within the container
          top: 50, // Adjust top position if necessary
          left: 50, // Adjust left position if necessary
          opacity: 1, // Set opacity to keep it visible
          zIndex: 1, // Ensure it's on top of other text
        }}
        variant="h2"
      >
        {texts[0]}
      </Typography>

      {/* Render transitioning text */}
      {texts.slice(1).map((text, idx) => (
        <Typography
          key={idx}
          style={{
            position: "absolute", // Positions each text absolutely within the container
            top: 50, // Adjust top position if necessary
            left: 450, // Adjust left position if necessary
            opacity: idx === index - 1 ? 1 : 0, // Set opacity based on active index
            transition: "opacity 0.3s ease", // Apply transition effect
          }}
          variant="h2"
        >
          {text}
        </Typography>
      ))}

      <Grid
        container
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          color: "Black",
        }}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          sx={12}
          style={{ textAlign:"center" }}
        >
                    <img
            src={logoSVG}
            alt="Logo"
            style={{ width: "300px", height: "300px" }}
          />
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          sx={12}
          style={{ padding: "16px" }}
        >
          <Typography variant="h2">About Carity Coins</Typography>
          <Typography mt={3} mb={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <button class="button-17" role="button">
          Let’s Donate
        </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Aboutus;
