import React, { Component } from "react";
import Project from "./Project";
import img1 from "./p.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        <section class="projects container">
          <div class="projects__wrapper">
            <h1 class="project__heading">My Projects</h1>
            {<Project img={img1} />}
            {<Project img={img1} />}
            {<Project img={img1} />}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
