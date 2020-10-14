import React from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import CarouselContainer from "./CarouselContainer";

function App() {
  return (
    <div className="app">
      <Header />
      <CarouselContainer />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
