import React from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import CarouselContainer from "./CarouselContainer";

function App() {
  return (
    <div className="app">
      <Header />
      <CarouselContainer />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}

export default App;
