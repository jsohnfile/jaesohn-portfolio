import React from "react";
import "./App.css";
import Header from "./Header";
import Photo from "./Photo";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import { push as Menu } from 'react-burger-menu';




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
      <div id="outer-container">
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
        <a className="menu-item" href="#about">About</a>
        <a className="menu-item" href="#projects">Projects</a>
        <a className="menu-item" href="#technologies">Technologies</a>
        <a className="menu-item" href="#contact">Contact</a>
        </Menu>
        <main id="page-wrap">
            <Header />
            <Photo />
            <Portfolio />
            <Skills />
            <Contact />
            <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
