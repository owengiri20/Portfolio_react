import React, { Component } from "react";
import logo from "./logo.svg";
import { Link, Switch, Route } from "react-router-dom"

import "smooth-scroll"

import AllProjects from "./helpers/AllProjectsHelper"
import Navbar from "./Navbar";
import Landing from "./Landing";
import AllProjectsPage from "./AllProjectsPage"
import Project from "./Project"
import Porjects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  getProject(id) {
    const proj = AllProjects().find(p => p.id == id)
    return proj
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <div><Landing /><Porjects /></div>} />
          <Route exact path="/allProjects" render={() => <AllProjectsPage />} />
          <Route exact path="/viewProject/:id"
            render={(routeProps) => {
              const { id } = routeProps.match.params;
              const proj = this.getProject(id)
              return <Project title={proj.name}
                img={proj.img}
                description={proj.description}
                link={proj.projUrl}
                ghLink={proj.codeUrl}
                rp={routeProps} />
            }
            } />

        </Switch>


        <Contact />
        <Footer />
      </div>
    );
  }

}

export default App;
