import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("linear-gradient(to bottom, #222623, #A0F8F8)");
  const [colorName, setColorName] = useState("Blue to Black");

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
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <Box
      sx={{
        p: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        transition: "transform 0.5s ease", // CSS transition for smooth animation
        transform: isVisible ? "translateY(0)" : "translateY(-100%)", // Slide in from the top when isVisible is true
        position: "fixed", // Set position to fixed
        top: 0, // Align to the top
        width: "98%", // Take full width of the viewport
        zIndex: 1000, // Set a high z-index to ensure it's on top of other content
        backgroundColor: backgroundColor, // Set background color
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Add a shadow for depth
      }}
    >
      <div>Charity Coin logo</div>
      {/* <div>Menu Button</div> {colorName} */}
      <Typography variant="body2" sx={{ color: "#01FF95" }}> Menu Button</Typography>
    </Box>
  );
};
