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
      <Header />
      <Photo />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
