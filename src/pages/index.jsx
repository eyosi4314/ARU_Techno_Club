import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Home from "../components/home/home";
import Section2 from "../components/section2/section2";
import Section3 from "../components/section3/section3";
import Section4 from "../components/section4/section4";
import Section5 from "../components/section5/section5";
import Section6 from "../components/section6/section6";
import Section8 from "../components/section8/section8";
import Section9 from "../components/section9/section9";

function index() {
  return (
    <>
      <Menu />
      <Home />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      {/* <Section7 /> */}
      {/* <Section8 /> */}
      {/* <Section9 />
      <Section10 /> */}

      <Footer />
    </>
  );
}

export default index;
