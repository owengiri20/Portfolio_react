import React, { Component } from "react";

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
                <div class="about-me">
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
                  <button>View Resume</button>
                  <button>View Projects</button>
                </div>
              </div>
              <div class="landing__col2--row3">
                <div class="social-links">
                  <i class="fab fa-linkedin" />
                  <i class="fab fa-github" />
                  <i class="fab fa-instagram" />
                  <i class="fab fa-youtube" />
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
