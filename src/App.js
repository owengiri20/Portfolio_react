import React from "react";
import logo from "./logo.svg";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Porjects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Porjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
