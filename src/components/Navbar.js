import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
import "./SwitchMode.css"
import "smooth-scroll"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
      isLight: false
    };

    this.burgerClick = this.burgerClick.bind(this);
  }

  goToSection(id) {
    document.querySelector(id).scrollIntoView();
  }

  async burgerClick() {
    await this.setState({ navActive: !this.state.navActive });
    console.log(this.state);
    this.navLinksAnimate();
  }

  changeTheme() {
    let root = document.documentElement;
    this.setState(st => ({ isLight: !st.isLight }), () => {
      root.style.setProperty("--main--dark", this.state.isLight ? "#f4f4f4" : "#191919")
      root.style.setProperty("--main--light", this.state.isLight ? "#191919" : "#f4f4f4")
    }
    );

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
    const { navActive, isLight } = this.state;
    return (

      <nav className="Navbar">

        <div className="Logo">
          <h4 className="logo">OWEN GIRI</h4>
        </div>
        <ul className={`nav-links ${navActive && "nav-active"}`}>
          <li>
            <Link to="/#" >HOME</Link>
          </li>
          <li>
            <Link to="/#about">ABOUT</Link>
          </li>
          <li>
            <Link to="/#projects" >PROJECTS</Link>
          </li>
          <li>
            <Link to="#contact">CONTACT</Link>
          </li>
          <li>
            <label class="switch" >
              <input onClick={() => this.changeTheme()} type="checkbox" />
              <span class="slider round"></span>
            </label>
            <span className="enable-text"><em>switch to {isLight ? "DARK" : "LIGHT"} mode!</em></span>
          </li>
        </ul>
        <div
          className={`burger-menu ${navActive ? "toggle" : ""}`}
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
