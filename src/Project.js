import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div class="project__box" data-aos="fade-left">
        <div class="proj__col1">
          <img class="proj-img" src={this.props.img} alt="" />
        </div>

        <div class="proj__col2">
          <h1 class="proj__title">{this.props.title}</h1>
          <p class="proj__des">
            {this.props.description}
          </p>
          <div class="proj__bts">
            <a href={this.props.link} class="view__proj" target="_blank" >
              View project
            </a>
            <a href={this.props.ghLink} target="_blank" class="view__proj">
              View code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
