import React, { Component } from "react";
import Project from "./Project";

// IMGS
import img1 from "./p.jpg";
import m4fImg from "./moodforfood.PNG"
import dadJokesImg from "./imgs/dadJokes.PNG"
import portfolioImg from "./imgs/portfolio.PNG"

class Projects extends Component {
  render() {
    return (
      <div >
        <section class="projects container" >
          <div class="projects__wrapper">
            <hr id="projects" />
            <h1 class="project__heading">My Projects</h1>
            {<Project img={portfolioImg} description="" title="" link="https://moodforfood.netlify.com/" ghLink="https://github.com/owengiri20/Mood_for_Food/tree/master/code" />}

            {/* DAD JOKES */}
            {<Project img={dadJokesImg} description="A fun little DAD jokes generator, built with React" title="DAD JOKES" link="https://dadjokes-webapp.netlify.com" ghLink="https://github.com/owengiri20/Dad_jokes/tree/master/src" />}

            {/* MOOD FOR FOOD */}
            {<Project img={m4fImg} description="A Food browsing app, that lets you browse thousands of recipes." title="MOOD FOR FOOD" link="https://moodforfood.netlify.com/"
              ghLink="https://github.com/owengiri20/Mood_for_Food/tree/master/code" />}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
