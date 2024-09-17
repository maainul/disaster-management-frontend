import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Crisis from "./components/Crisis";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Crisis />
      <Footer />
    </>
  );
};

export default Home;
