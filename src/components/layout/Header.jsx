import { Box, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import logoSVG from "./../../assets/Charity_Logo.png";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import useResponsivePadding from "../reponsive/ResponsibePadding";

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

      // Change background color based on scroll position
      const currentSection = Math.floor(currentPosition / window.innerHeight);
      const colors = [
        "linear-gradient(to bottom, #222623, #A0F8F8)",
        "linear-gradient(to bottom, #222623, #FF5733)",
        "linear-gradient(to bottom, #222623, #FFFF00)",
        "linear-gradient(to bottom, #222623, #A0F8F8)",
      ];
      setBackgroundColor(colors[currentSection % 4]);
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

  const isMobile = useResponsivePadding();

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
        pt: "30px",
        width: isMobile ? "80%" : "90%",
        zIndex: 1000,
        "@media (max-width: 768px)": {
          flexDirection: "row    ",
          alignItems: "center",
        },
        // background: backgroundColor,
      }}
    >
      <img src={logoSVG} alt="Logo" style={{ width: "50px", height: "50px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "coloumn",
          alignItems: "center",
        }}
      >

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
          }}
          href="https://www.gitbook.com/"
        >
          <IconButton>
            <DescriptionOutlinedIcon
              style={{
                color: backgroundColor.includes("A0F8F8")
                  ? "#A0F8F8"
                  : "#222623",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
