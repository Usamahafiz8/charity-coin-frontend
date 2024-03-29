import React, { useEffect, useState } from "react";

import DonateButton from "../../Buttons/DonateButton";
import { Grid } from "@mui/material";
import Heading700 from "../../headings/heading700";
import Heading400 from "../../headings/heading400";

const Aboutus = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-evenly",
        // gap: "22px",
        padding: "22px",
      }}
    >
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Heading700 styles={{fontSize:'3.5em'}}>Donation Pool Total Holdings: $123</Heading700>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          {/* <Heading700>Donation Pool Total Holdings: $123</Heading700> */}
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} style={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-around",
          gap: "22px",
          padding: "22px",
        }}>
          <Heading700>PROGRAMMATIC PHILANTHROPY</Heading700>

          <Heading400 styles={{ color: "rgba(0, 0, 0, 0.5)" }}>
            Our platform features a distinctive model where each transaction
            with our native governance token, $GIVE, includes a 1% Donation Fee.
          </Heading400>
          <Heading400 styles={{ color: "rgba(0, 0, 0, 0.5)" }}>
            This 1% fee is automatically directed to our Donation Pool, ensuring
            a steady stream of support for a variety of charitable causes.
          </Heading400>
          <Heading400 styles={{ color: "rgba(0, 0, 0, 0.5)" }}>
            Through the Donation Fee and Donation Pool model, CharityCoin
            actively supports both value growth and transaction volume growth of
            $GIVE to further increase the scale and size of the Donation Pool.
          </Heading400>
          <div style={{ textAlign: "right" }}>
            <DonateButton />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Aboutus;
