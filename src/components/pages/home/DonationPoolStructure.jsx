import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";


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
  const rightSideRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const rightSideContainer = rightSideRef.current;

    const handleScroll = () => {
      setScrollLeft(rightSideContainer.scrollLeft);
    };

    rightSideContainer.addEventListener("scroll", handleScroll);

    return () => {
      rightSideContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ x: scrollLeft });
  }, [scrollLeft, controls]);

  return (
    <Box sx={{ backgroundColor: "#222623", padding: "22px", color: "white" }}>
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <Typography
            sx={{
              fontSize: "2.5em",
              marginTop:'50px'
            }}
          >
            Donation Pool Structure
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12}>
          <motion.div
            ref={rightSideRef}
            style={{
              marginTop:'100px',
              overflowX: "auto",
              height: "110vh", // Set height to 110vh
              marginRight: "-22px",
              WebkitOverflowScrolling: "touch", // For iOS support
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for IE/Edge
              "&::-webkit-scrollbar": {
                display: "none", // Hide scrollbar for Chrome/Safari
              },
            }}
            animate={controls}
          >
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
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationPoolStructure;
