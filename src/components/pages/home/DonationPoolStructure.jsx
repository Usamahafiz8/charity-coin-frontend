import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useResponsivePadding from "../../reponsive/ResponsibePadding";
import { useInView } from "react-intersection-observer";

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
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const isMobile = useResponsivePadding();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <Box
      ref={ref}
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
          <motion.div
            style={{
              marginTop: "100px",
              height: "100vh",
              opacity: 0,
            }}
            animate={controls}
            initial={{ y: 50, opacity: 0 }} // Initial position and opacity
          >
            {donationDetails.map((details, index) => (
              <motion.div
                key={index}
                style={{ marginBottom: "80px" }}
                initial={{ opacity: 0, y: -50 }} // Initial position of the details
                animate={{ opacity: 1, y: 0 }} // Animation when entering the viewport
                transition={{ delay: index * 0.1 }} // Delay each animation
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
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationPoolStructure;
