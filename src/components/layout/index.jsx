import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};
