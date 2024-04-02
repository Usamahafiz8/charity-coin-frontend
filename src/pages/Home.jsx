import React from "react";
import { Layout } from "../components/layout";
import Main from "../components/pages/home/Main";
import Aboutus from "../components/pages/home/Aboutus";
import WalletDetail from "../components/pages/home/walletDetails";
import DonationPoolStructure from "../components/pages/home/DonationPoolStructure";
import Partners from "../components/partner/Partners";
import InboundForm from "../components/form/InboundForm";
import { Box } from "@mui/material";
import DonateButton from "../components/Buttons/DonateButton";

const HomePage = () => {
  return (
    <Layout>
      <Main />
      {/* <Partners/> */}
      <Aboutus />
      <WalletDetail />
      <DonationPoolStructure />
      <Box
        sx={{ padding: "8px", textAlign: "center", backgroundColor: "#222623" }}
      >
        <DonateButton />
      </Box>
      <InboundForm />
    </Layout>
  );
};

export default HomePage;
