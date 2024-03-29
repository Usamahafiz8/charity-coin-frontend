import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useResponsivePadding from "../../reponsive/ResponsibePadding";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960); // Set isMobile to true if window width is less than 960px
    };

    handleResize(); // Call handleResize once to set initial state
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };
  }, []);

  const animateOnScroll = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#222623",
        padding: isMobile ? "50px 200px 100px 200px " : "22px",
        color: "white",
      }}
    >
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <Typography
            sx={{
              fontSize: "2.5em",
              marginTop: "50px",
            }}
          >
            Donation Pool Structure
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <div style={{ marginTop: "100px",  }}>
            {donationDetails.map((details, index) => (
              <motion.div
                key={index}
                style={{ marginBottom: "80px" }}
                initial="hidden"
                animate="visible"
                variants={animateOnScroll}
              >
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
              </motion.div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationPoolStructure;
