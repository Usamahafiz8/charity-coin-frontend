import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
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
      }}
    >
      <div>Charity Coin logo</div>
      <div>Menu Button</div>
    </Box>
  );
};
