import React, { Component } from "react";
import "smooth-scroll"
import Pdf from "./textFiles/resume_owen_.pdf"

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <!-- LANDING --> */}
        <section class="landing container">
          <div class="landing__content">
            <div class="landing__content-col1">
              <div class="name-letters">
                <div class="o-letter">o</div>
                <div class="w-letter">w</div>
                <div class="e-letter">e</div>
                <div class="n-letter">n</div>
              </div>
            </div>
            <div class="landing__content-col2">
              <div class="landing__col2--row2">
                <hr id="about" />

                <div class="about-me" >
                  <h1>About Me</h1>
                  <p>
                    Student currently studying at North Metropolitan TAFE in
                    Joondalup to attain a diploma in Software
                    development/Programming. Also, seeking for work experience
                    in the web development industry as either a front-end or
                    full stack developer.
                  </p>
                </div>
                <div class="view-btns">
                  {/* <button><a href={Pdf} target="_blank">View Resume</a> </button> */}
                  <button><a href="#projects">View Projects</a></button>
                </div>
              </div>
              <div class="landing__col2--row3">
                <div class="social-links">
                  <a href="https://www.linkedin.com/in/owen-giri-0635b3178/" target="_blank"><i class="fab fa-linkedin" /></a>
                  <a href="https://github.com/owengiri20" target="_blank"><i class="fab fa-github" /></a>
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
