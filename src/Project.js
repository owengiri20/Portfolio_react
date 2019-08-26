import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div class="project__box" data-aos="fade-left">
        <div class="proj__col1">
          <img class="proj-img" src={this.props.img} alt="" />
        </div>

        <div class="proj__col2">
          <h1 class="proj__title">Project Title</h1>
          <p class="proj__des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            sapiente doloribus omnis voluptates sit quod nihil ipsa cupiditate
            non odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe quos, repellendus soluta odio sit optio, quibusdam magnam
            facere accusantium, ab suscipit?
          </p>
          <div class="proj__bts">
            <a href="" class="view__proj">
              View project
            </a>
            <a href="" class="view__proj">
              View code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
