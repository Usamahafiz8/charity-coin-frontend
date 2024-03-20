import React from "react";
import { Layout } from "../components/layout";
import Main from "../components/pages/home/Main";
import Aboutus from "../components/pages/home/Aboutus";
import CurrencyInfo from "../components/pages/home/CurrencyInfo";
import SolanaWalletBalance from "../components/walletbalance";
// import CustomTable from "../components/CurrencyTable/CustomTable";

export const Home = () => {
    const headerData = [
		[
			{ value: "Header 1", width: "25%" },
			{ value: "Header 2", width: "25%" },
			{ value: "Header 3", width: "25%" },
			{ value: "Header 4", width: "25%" }
		]
	];
	const el = <p style={{ color: "red", padding: 0, margin: 0 }}>A1</p>;
	const tableData = [
		[
			{ value: el, width: "25%" },
			{ value: "A2", width: "25%" },
			{ value: "A3", width: "25%" },
			{ value: "A3", width: "25%" }
		],
		[
			{ value: "B2" || "Name unavailable", width: "25%" },
			{ value: "B2", width: "25%" },
			{ value: "B2", width: "25%" },
			{ value: "B2", width: "25%" }
		],
		[
			{ value: "C3" || "Name unavailable", width: "25%" },
			{ value: "C3", width: "25%" },
			{ value: "C3", width: "25%" },
			{ value: "C3", width: "25%" }
		]
	];
    const randomWalletAddress = 'JTJ9Cz7i43DBeps5PZdX1QVKbEkbWegBzKPxhWgkAf1';

  return (
    <>
      <Layout>
        <Main />
        <Aboutus />
        {/* <CustomTable headerData={headerData} data={tableData} /> */}
        <SolanaWalletBalance walletAddress={randomWalletAddress }/>
        <CurrencyInfo />
      </Layout>
    </>
  );
};
