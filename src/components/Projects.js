import React, { Component } from "react";
import Project from "./Project";
import { Link, Switch } from "react-router-dom"
import AllProjects from "../helpers/AllProjectsHelper"


class Projects extends Component {
  getFeaturedProjects() {
    const featuredProjects = AllProjects().filter(p => p.id <= 2).map(proj => (
      <Project title={proj.name} img={proj.img} description={proj.description} link={proj.projUrl} ghLink={proj.codeUrl} />
    ))
    return featuredProjects;
  }
  render() {
    return (
      <div className="Projects">
        <section class="projects container" >
          <div class="projects__wrapper">
            <hr id="projects" />
            <h1 class="project__heading">My Projects</h1>
            {this.getFeaturedProjects()}
          </div>
        </section>
        <div className="view-all-projs-btn">
          <Link to="/allProjects" className="btn">View All Projects</Link>
        </div>
      </div>
    );
  }
}

export default Projects;
