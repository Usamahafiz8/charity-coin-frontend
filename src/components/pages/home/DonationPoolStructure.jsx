import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Heading500 from "../../headings/heading500";
import Heading400 from "../../headings/heading400";

const donationDetails = [
  {
    value: "$1.31",
    description: "Current Value of $GIVE.",
  },
  {
    value: "$1.0M",
    description: "Current Floor of the Donation Pool",
  },
  {
    value: "5.00%",
    description: "Maximum Donation Amount from the Pool.",
  },
  {
    value: "Audited & Secure",
    description:
      "Firms that have audited Sandclock: cmichel, Code4rena, WatchPug, Trail of Bits, Lindy Labs.",
  },
];

const DonationPoolStructure = () => {
  return (
    <Box sx={{ backgroundColor: "#222623", padding: "22px", color: "white" }}>
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <Typography
            sx={{
              fontSize: "2.5em",
            }}
          >
            Donation Pool Structure
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          {donationDetails.map((details, index) => (
            <div key={index} style={{ marginBottom: "80px" }}>
              <Typography sx={{ color: "#03EEEF", fontSize: "5em" }}>
                {details.value}
              </Typography>
              <Divider width={300} color={"white"} />
              <Typography
                sx={{
                  fontSize: "2em",
                }}
              >
                {details.description}
              </Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationPoolStructure;
