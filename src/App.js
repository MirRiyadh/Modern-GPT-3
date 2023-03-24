import React from "react";
import "./App.css";
import { Article, Brand, Feature, Navbar } from "./components";
import {
  Footer,
  Blog,
  MultipileFeatures,
  Possibility,
  GPT3,
  Header,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <MultipileFeatures />
      <Possibility />
      {/* <CTA/> */}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
