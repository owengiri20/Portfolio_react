import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };

    this.burgerClick = this.burgerClick.bind(this);
  }

  async burgerClick() {
    await this.setState({ navActive: !this.state.navActive });
    console.log(this.state);
    this.navLinksAnimate();
  }
  navLinksAnimate() {
    const navLinks = document.querySelectorAll(".nav-links li");

    navLinks.forEach((link, idx) => {
      if (this.state.navActive) {
        link.style.animation = `navLinksFade 0.5s ease forwards ${idx / 7 +
          0.5}s`;
      } else {
        navLinks.forEach((link, idx) => {
          link.style.animation = ``;
        });
      }
    });
  }
  render() {
    return (
      <nav className="Navbar">
        <div className="Logo">
          <h4 className="logo">OWEN GIRI</h4>
        </div>
        <ul className={`nav-links ${this.state.navActive && "nav-active"}`}>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <div
          className={`burger-menu ${this.state.navActive ? "toggle" : ""}`}
          onClick={this.burgerClick}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
