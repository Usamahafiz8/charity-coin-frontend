import React from "react";
import Divider from "@mui/material/Divider";
import { Typography, Container, Link, Grid, Box } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // height:"100vh"
      }}
    >
      <Divider />
      <Grid container justifyContent={"center"}>
        <Grid item xl={5.9} lg={5.9} md={5.9} sm={12} xs={12} style={{ padding:"8px"}}>
          <div>logo aera</div>
          <div>conten and email</div>
          <div>Social media</div>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid item xl={5.9} lg={5.9} md={5.9} sm={12} xs={12} style={{textAlign:"right", padding:"8px"}}>
          <div>Social media</div>
          
        </Grid>
      </Grid>

      <Divider />
      <div
        style={{
          display: "flex",
          padding: "20px 40px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            &copy; {currentYear} Charity Coin. All rights reserved.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};
