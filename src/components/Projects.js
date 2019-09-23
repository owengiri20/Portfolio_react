import React, { Component } from "react";
import Project from "./Project";
import { Link } from "react-router-dom"
import AllProjects from "../helpers/AllProjectsHelper"

class Projects extends Component {
  getFeaturedProjects() {
    const featuredProjects = AllProjects().filter(p => p.featured == true).map(proj => (
      <Project title={proj.name} img={proj.img} description={proj.description} link={proj.projUrl} ghLink={proj.codeUrl} key={proj.id} />
    ))
    return featuredProjects;
  }
  render() {
    return (
      <div className="Projects">
        <section className="projects container" >
          <div className="projects__wrapper">
            <hr id="projects" />
            <h1 className="project__heading">My Projects</h1>
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
