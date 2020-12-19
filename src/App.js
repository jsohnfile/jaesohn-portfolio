import React from "react";
import "./App.css";
import Header from "./Header";
import Photo from "./Photo";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import CarouselContainer from "./CarouselContainer";
import { Parallax } from 'react-scroll-parallax';


function App() {
  function wakeUpHeroku() {
    fetch('https://sharecipe-recipeshare.herokuapp.com', {mode: 'no-cors'});
    fetch('https://shoecollector.herokuapp.com', {mode: 'no-cors'});
    fetch('https://issues-that-matter.herokuapp.com', {mode: 'no-cors'});
    fetch('https://trackpaks.herokuapp.com', {mode: 'no-cors'});
    fetch('https://slack-clone-eb04e.web.app/', {mode: 'no-cors'});
    fetch('https://twitter-clone-d7a9a.web.app/', {mode: 'no-cors'});
  }
  wakeUpHeroku();
  return (
    <div className="app">
      {/* <Header /> */}
    <Parallax className="custom-class" y={[-30, -30]} tagOuter="figure">
      <CarouselContainer />
      
    </Parallax>
    <Parallax className="custom-class" y={[0, -50]} tagOuter="figure">
      <Photo />

    </Parallax>

    <Parallax className="custom-class" y={[0, -50]} tagOuter="figure">
      <Portfolio />

    </Parallax>
    <Parallax className="custom-class" y={[0, -50]} tagOuter="figure">
      <Skills />

    </Parallax>
      <Footer />
    </div>
  );
}

export default App;
