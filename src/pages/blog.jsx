import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import Home from "../components/home/home";
import Section8 from "../components/section8/section8";

import Section7 from "../components/section7/section7";
function blog() {
  return (
    <>
      <Menu />
      
      <Section8 />
      <Section7 />

      <Footer />
    
    </>
  );
}

export default blog;
