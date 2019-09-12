import React from "react";
import logo from "./logo.svg";
import { Link, Switch, Route } from "react-router-dom"

import "smooth-scroll"

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
      <Switch>
        <Route exact path="/" render={() => <div><Landing /><Porjects /></div>} />
        <Route exact path="/allProjects" render={() => <div>Projectss</div>} />
      </Switch>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
