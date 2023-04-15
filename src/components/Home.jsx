import React from "react";
import Nav from "../components/head-foot/Nav";
import Footer from "../components/head-foot/Footer";

import Cate from "./Home/Cate";
import Feature from "./Home/Feature";
import Hero from "./Home/Hero";
import CardSlide from "./Home/CardSlide";

const Home = () => {
  return (
    <>
      <Nav />

      <Hero />

      <Cate />

      <Feature />

      <CardSlide/>

      <Footer />
    </>
  );
};

export default Home;
