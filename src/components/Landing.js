import React, { Component } from "react";
import "smooth-scroll"
// import Pdf from "./textFiles/resume_owen_.pdf"

class Landing extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {

    return (
      <div>
        {/* <!-- LANDING --> */}
        <section className="landing container">
          <div className="landing__content">
            <div className="landing__content-col1">
              <div className="name-letters">
                <div className="o-letter">o</div>
                <div className="w-letter">w</div>
                <div className="e-letter">e</div>
                <div className="n-letter">n</div>
              </div>
            </div>
            <div className="landing__content-col2">
              <div className="landing__col2--row2">
                <hr id="about" />

                <div className="about-me" >
                  <h1>About Me</h1>
                  <p>
                    I love to code!

                    I've been coding/programming for a couple of years now, in that time I've learnt so many different, skills ranging from front-end web development with HTML, CSS, Javascript and all the beautiful frameworks that comes with it, to back-end programming with C# .Net, Games development with Unity and even SQL databases. and I loved every bit of it.


                  </p>
                </div>
                <div className="view-btns">
                  {/* <button><a href={Pdf} target="_blank">View Resume</a> </button> */}
                  <button><a href="#projects">View Projects</a></button>
                </div>
              </div>
              <div className="landing__col2--row3">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/owen-giri-0635b3178/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
                  <a href="https://github.com/owengiri20" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
                  {/* <a href="https://github.com/owengiri20" target="_blank"><i class="fab fa-instagram" /></a>
                  <a href="https://github.com/owengiri20" target="_blank"><i class="fab fa-youtube" /></a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
