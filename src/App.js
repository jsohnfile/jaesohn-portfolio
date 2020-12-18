import React from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import CarouselContainer from "./CarouselContainer";
import { Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <div className="app">
      <Header />
    <Parallax className="custom-class" y={[-30, -30]} tagOuter="figure">
      <CarouselContainer />
      
    </Parallax>
    <Parallax className="custom-class" y={[0, -30]} tagOuter="figure">
      <Portfolio />

    </Parallax>
    <Parallax className="custom-class" y={[0, -30]} tagOuter="figure">
      <About />

    </Parallax>
      <Footer />
    </div>
  );
}

export default App;
