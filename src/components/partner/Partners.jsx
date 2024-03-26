import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import AAve from "./../../assets/Partners/aave.png";
import compound from "./../../assets/Partners/compound.png";
import lido from "./../../assets/Partners/lido.png";
import Morpho from "./../../assets/Partners/Morpho.png";
import startknet from "./../../assets/Partners/starknet.png";

const partnersData = [
  { src: AAve, alt: "AAve Logo", width: "140px", height: "100px" },
  { src: compound, alt: "Compound Logo", width: "180px", height: "100px" },
  { src: lido, alt: "Lido Logo", width: "180px", height: "100px" },
  { src: Morpho, alt: "Morpho Logo", width: "180px", height: "100px" },
  { src: startknet, alt: "Starknet Logo", width: "180px", height: "100px" },
];

const Partners = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div
      style={{
        backgroundColor: "#1F2220",
        padding: "22px",
        display: "flex",
        flexDirection: "row",
        gap:"28px",
        justifyContent: "space-evenly",
        overflowX: isMobile ? "auto" : "hidden", // Enable scrolling for mobile
      }}
    >
      {partnersData.map((partner, index) => (
        <>
        <motion.img
          key={index}
          src={partner.src}
          alt={partner.alt}
          style={{ width: partner.width, height: partner.height }}
          animate={isMobile ? { x: "100vw" } : {}}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          />
          </>
        
      ))}
    </div>
  );
};

export default Partners;
