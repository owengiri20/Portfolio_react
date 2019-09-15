import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="project__box" data-aos="fade-left">
        <div className="proj__col1">
          <img className="proj-img" src={this.props.img} alt="" />
        </div>

        <div className="proj__col2">
          <h1 className="proj__title">{this.props.title}</h1>
          <p className="proj__des">
            {this.props.description}
          </p>
          <div className="proj__bts">
            <a href={this.props.link} className="view__proj" rel="noopener noreferrer" target="_blank" >
              View project
            </a>
            <a href={this.props.ghLink} rel="noopener noreferrer" target="_blank" className="view__proj">
              View code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
