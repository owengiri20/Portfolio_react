import React, { Component } from "react";
import Project from "./Project";

// IMGS
import img1 from "./p.jpg";
import m4fImg from "./imgs/moodforfood.PNG"
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
            {<Project img={portfolioImg} description="This very website your looking at! after about a couple months of learning React I decided to rebuild my old portfolio site (it was pure HTML/CSS) in React. I found that this was a great way of reinforcing my learning of React fundimentals. " title="Portfolio" link="#" ghLink="https://github.com/owengiri20/Portfolio_react" />}

            {/* DAD JOKES */}
            {<Project img={dadJokesImg} description="A fun little DAD jokes generator, built with React. At the time of making this project I was following a React course on Udemy and this was one of the demo projects, It was also a few days before fathers day. I tweaked the styling and added a save functionalityto it. " title="DAD JOKES" link="https://dadjokes-webapp.netlify.com" ghLink="https://github.com/owengiri20/Dad_jokes/tree/master/src" />}

            {/* MOOD FOR FOOD */}
            {<Project img={m4fImg} description="A Food browsing app, that lets you browse thousands of recipes. this project was built right after i completed a Udemy course focused of vinnila JS. 'Mood For Food' is powered by the Food2Fork API and built with pure HTML, CSS, Javascript." title="MOOD FOR FOOD" link="https://moodforfood.netlify.com/"
              ghLink="https://github.com/owengiri20/Mood_for_Food/tree/master/code" />}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
