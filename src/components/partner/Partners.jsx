import React from "react";
import AAve from "./../../assets/Partners/aave.png";
import compound from "./../../assets/Partners/compound.png";
import lido from "./../../assets/Partners/lido.png";
import Morpho from "./../../assets/Partners/Morpho.png";
import startknet from "./../../assets/Partners/starknet.png";

const Partners = () => {
  return (
    <div
      style={{
        backgroundColor: "#1F2220",
        // height: "180px",
        padding: "22px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <img src={AAve} alt="Logo" style={{ width: "140px", height: "100px" }} />
      <img
        src={compound}
        alt="Logo"
        style={{ width: "180px", height: "100px" }}
      />
      <img src={lido} alt="Logo" style={{ width: "180px", height: "100px" }} />
      <img
        src={Morpho}
        alt="Logo"
        style={{ width: "180px", height: "100px" }}
      />
      <img
        src={startknet}
        alt="Logo"
        style={{ width: "180px", height: "100px" }}
      />
    </div>
  );
};

export default Partners;
