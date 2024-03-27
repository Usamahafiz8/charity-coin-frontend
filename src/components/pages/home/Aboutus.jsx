import React, { useEffect, useState } from "react";
import Heading700 from "../../headings/heading700";
import Heading400 from "../../headings/heading400";
import DonateButton from "../../Buttons/DonateButton";

const Aboutus = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        gap: "22px",
        // minHeight: "100vh",
        padding: "22px",
        height:"100vh"
      }}
    >
      <Heading700 >
        PROGRAMMATIC PHILANTHROPY
      </Heading700>
      <Heading400 styles={{ color: "rgba(0, 0, 0, 0.5)" }}>
        Our platform features a distinctive model where each transaction with
        our native governance token, $GIVE, includes a 1% Donation Fee.
      </Heading400>
      <Heading400 styles={{ color: "rgba(0, 0, 0, 0.5)" }}>
        This 1% fee is automatically directed to our Donation Pool, ensuring a
        steady stream of support for a variety of charitable causes.
      </Heading400>
      <Heading400 styles={{ color: "rgba(0, 0, 0, 0.5)" }}>
        Through the Donation Fee and Donation Pool model, CharityCoin actively
        supports both value growth and transaction volume growth of $GIVE to
        further increase the scale and size of the Donation Pool.
      </Heading400>
      <div style={{ textAlign: "right" }}>
        <DonateButton />
      </div>
    </div>
  );
};

export default Aboutus;
