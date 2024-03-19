import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import logoSVG from "./../../../assets/solana.svg"; // Import your SVG file

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // textAlign: "center",
        color: "white",
      }}
    >
      <Grid container>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          sx={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px",
            gap:"16px"
          }}
        >
          <Typography variant="h3">Philanthropy: On-Chain</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            odio eget velit convallis scelerisque. Fusce auctor semper lectus
            vel efficitur. Donec eleifend, eros id malesuada tristique, magna
            purus consectetur libero, id commodo nisi mauris vel dolor. Integer
            auctor sagittis lacus, a pretium odio condimentum eu. Sed id
            ullamcorper nunc. Vestibulum condimentum justo vitae urna facilisis,
            vel ultricies odio fermentum.
          </Typography>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          sx={12}
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
            style={{ width: "450px", height: "450px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
