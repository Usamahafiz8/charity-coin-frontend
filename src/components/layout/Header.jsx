import { Box, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import logoSVG from "./../../assets/Charity_Logo.png";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    "linear-gradient(to bottom, #222623, #A0F8F8)"
  );

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      // Show the header when scrolling up or at the top of the page
      const currentPosition = window.pageYOffset;
      if (currentPosition < lastScrollPosition || currentPosition === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollPosition = currentPosition;

      // Change text color based on scroll position
      const currentSection = Math.floor(currentPosition / window.innerHeight);
      if (currentSection % 2 === 0) {
        // If current section is even, set text color to one color
        setBackgroundColor("linear-gradient(to bottom, #222623, #A0F8F8)");
      } else {
        // If current section is odd, set text color to another color
        setBackgroundColor("linear-gradient(to bottom, #222623, #FF5733)");
      }
    };

    let lastScrollPosition = window.pageYOffset;

    // Set isVisible to true after 500ms if the user hasn't scrolled
    timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clear the timer and remove event listener on component unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        transition: "transform 0.5s ease",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        position: "fixed",
        top: 0,
        pt: "50px",

        width: "90%",
        zIndex: 1000,
        "@media (max-width: 768px)": {
          flexDirection: "row    ",
          alignItems: "center",
        },
      }}
    >
      <img src={logoSVG} alt="Logo" style={{ width: "50px", height: "5  0px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "@media (max-width: 768px)": {
            marginTop: "20px",
          },
        }}
      >
        {/* <Typography
          variant="body2"
          style={{
            color: backgroundColor.includes("A0F8F8") ? "#A0F8F8" : "#222623",
          }}
        >
          Blue to {backgroundColor.includes("A0F8F8") ? "Black" : "Red"}
        </Typography> */}
        <Box
          sx={{
            border: `1px solid ${
              backgroundColor.includes("A0F8F8") ? "#A0F8F8" : "#222623"
            }`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            marginLeft: "10px",
          }}
        >
          <DescriptionOutlinedIcon
            style={{
              color: backgroundColor.includes("A0F8F8") ? "#A0F8F8" : "#222623",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
