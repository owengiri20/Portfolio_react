import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"

import "smooth-scroll"

import AllProjects from "./helpers/AllProjectsHelper"
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AllProjectsPage from "./components/AllProjectsPage"
import Project from "./components/Project"
import Porjects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  getProject(id) {
    const proj = AllProjects().find(p => String(p.id) === String(id))
    return proj
  }

  render() {
    console.log("If you see this you're awesome!⭐");

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
              return <div className="Project__display" >
                <Project title={proj.name}
                  img={proj.img}
                  description={proj.description}
                  link={proj.projUrl}
                  ghLink={proj.codeUrl}
                  rp={routeProps} />
              </div>
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
