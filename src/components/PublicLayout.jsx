import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow w-9/12 mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
