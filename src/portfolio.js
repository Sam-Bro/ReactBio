import React from "react";
import burgerApp from "./burgerapp.PNG";
import daySched from "./day-sched-cap.PNG";
import passGen from "./passgen.PNG";
import recipeApp from "./recipe-cap.PNG";
import recipedia from "./recipedia.PNG";
import weatherApp from "./weather-cap.PNG";


class Portfolio extends React.Component {
  render() {
    return (
      <article>
        <main className="container cont-style cont-w ">
          <h4 className="card-title about-border">Portfolio</h4>
          <section className="row row-gap">
            <article className="col-md-4 center proj-img">
              <a
                href="https://sam-bro.github.io/Weather_Dashboard_SB/"
                target="_blank"
              >
                <img
                  src={weatherApp}
                  className="img-fluid img-port img"
                  alt="placeholder"
                />
              </a>
              <p className="caption overlay">
                Weather Dashboard
                <a
                  href="https://github.com/Sam-Bro/Weather_Dashboard_SB"
                  target="_blank"
                  className="github-icon my-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </article>
            <article className="col-md-4 center proj-img">
              <a
                href="https://sam-bro.github.io/work_scheduler_SB/"
                target="_blank"
              >
                <img
                  src={daySched}
                  className="img-fluid img-port img"
                  alt="placeholder"
                />
              </a>
              <p className="caption overlay">
                Work Day Scheduler
                <a
                  href="https://github.com/Sam-Bro/work_scheduler_SB"
                  target="_blank"
                  className="github-icon my-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </article>
            <article className="col-md-4 center proj-img">
              <a
                href="https://georgiellis.github.io/Recipe-Helper/Recipe-Finder/Recipe_Finder.html"
                target="_blank"
              >
                <img
                  src={recipeApp}
                  className="img-fluid img-port img"
                  alt="placeholder"
                />
              </a>
              <p className="caption overlay">
                Recipe Finder
                <a
                  href="https://github.com/georgiellis/Recipe-Helper"
                  target="_blank"
                  className="github-icon my-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </article>
          </section>
          <section className="row row-gap">
            <article className="col-md-4 center proj-img">
              <a href="https://projects-2.herokuapp.com/" target="_blank">
                <img
                  src={recipedia}
                  className="img-fluid img-port img"
                  alt="placeholder"
                />
              </a>
              <p className="caption overlay">
                Recipedia
                <a
                  href="https://github.com/wannabewayno/Project-2"
                  target="_blank"
                  className="github-icon my-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </article>
            <article className="col-md-4 center proj-img">
              <a
                href="https://sam-bro.github.io/JS-Password-Gen-SB/"
                target="_blank"
              >
                <img
                  src={passGen}
                  className="img-fluid img-port img"
                  alt="placeholder"
                />
              </a>
              <p className="caption overlay">
                Password Generator
                <a
                  href="https://github.com/Sam-Bro/JS-Password-Gen-SB"
                  target="_blank"
                  className="github-icon my-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </article>
            <article className="col-md-4 center proj-img">
              <a href="https://borgerapp.herokuapp.com/" target="_blank">
                <img
                  src={burgerApp}
                  className="img-fluid img-port img"
                  alt="placeholder"
                />
              </a>
              <p className="caption overlay">
                Burger App
                <a
                  href="https://github.com/Sam-Bro/burger"
                  target="_blank"
                  className="github-icon my-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </article>
          </section>
        </main>
      </article>
    );
  }
}
export default Portfolio;
