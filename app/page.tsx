import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import About from "./components/About";


const page = () => {
  return <>
    <Home />
    <About />
    <Resume />
    <Portfolio />
  </>;
};

export default page;
