import React from "react";
import { Layout } from "../components/layout";
import Main from "../components/pages/home/Main";
import Aboutus from "../components/pages/home/Aboutus";
import WalletDetail from "../components/pages/home/walletDetails";
import DonationPoolStructure from "../components/pages/home/DonationPoolStructure";
import Partners from "../components/partner/Partners";
import InboundForm from "../components/form/InboundForm";

export const Home = () => {
  return (
    <>
      <Layout>
        <Main />
        {/* <Partners/> */}
        <Aboutus />
        <WalletDetail />
        <DonationPoolStructure />
        <InboundForm />
      </Layout>
    </>
  );
};
// <SolanaWalletBalance WalletDetails={WalletAddress}/>
// <CurrencyInfo />
// <CurrencyInfotext/>
