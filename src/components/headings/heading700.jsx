import { Typography } from "@mui/material";
import React from "react";

const Heading700 = ({ children, styles }) => {
  return (
    <Typography
      variant="h5"
      style={{
        fontWeight: 700,
        fontSize: "2em",
        color: "#000000",
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading700;
