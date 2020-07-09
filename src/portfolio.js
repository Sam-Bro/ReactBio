import React from 'react'
import burgerApp from './burgerapp.PNG';
import daySched from './day-sched-cap.PNG';
import passGen from './passgen.PNG';
import recipeApp from './recipe-cap.PNG';
import recipedia from './recipedia.PNG';
import weatherApp from './weather-cap.PNG';




class Portfolio extends React.Component {
  render() {
    return (
        <article>
                <main class="container cont-style cont-w">
      <h4 class="card-title about-border">Portfolio</h4>
      <section class="row row-gap">
        <article class="col-md-4 center proj-img">
          <a
            href="https://sam-bro.github.io/Weather_Dashboard_SB/"
            target="_blank"
            ><img
              src={weatherApp}
              class="img-fluid img-port img"
              alt="placeholder"
          /></a>
          <p class="caption overlay">
            Weather Dashboard
            <a
              href="https://github.com/Sam-Bro/Weather_Dashboard_SB"
              target="_blank"
              class="github-icon my-link"
              ><i class="fab fa-github"></i
            ></a>
          </p>
        </article>
        <article class="col-md-4 center proj-img">
          <a href="https://sam-bro.github.io/work_scheduler_SB/" target="_blank"
            ><img
              src={daySched}
              class="img-fluid img-port img"
              alt="placeholder"
          /></a>
          <p class="caption overlay">
            Work Day Scheduler
            <a
              href="https://github.com/Sam-Bro/work_scheduler_SB"
              target="_blank"
              class="github-icon my-link"
              ><i class="fab fa-github"></i
            ></a>
          </p>
        </article>
        <article class="col-md-4 center proj-img">
          <a
            href="https://georgiellis.github.io/Recipe-Helper/Recipe-Finder/Recipe_Finder.html"
            target="_blank"
            ><img
              src={recipeApp}
              class="img-fluid img-port img"
              alt="placeholder"
          /></a>
          <p class="caption overlay">
            Recipe Finder
            <a
              href="https://github.com/georgiellis/Recipe-Helper"
              target="_blank"
              class="github-icon my-link"
              ><i class="fab fa-github"></i
            ></a>
          </p>
        </article>
      </section>
      <section class="row row-gap">
        <article class="col-md-4 center proj-img">
          <a href="https://projects-2.herokuapp.com/" target="_blank"
            ><img
              src={recipedia}
              class="img-fluid img-port img"
              alt="placeholder"
          /></a>
          <p class="caption overlay">
            Recipedia
            <a
              href="https://github.com/wannabewayno/Project-2"
              target="_blank"
              class="github-icon my-link"
              ><i class="fab fa-github"></i
            ></a>
          </p>
        </article>
        <article class="col-md-4 center proj-img">
          <a
            href="https://sam-bro.github.io/JS-Password-Gen-SB/"
            target="_blank"
            ><img
              src={passGen}
              class="img-fluid img-port img"
              alt="placeholder"
          /></a>
          <p class="caption overlay">
            Password Generator
            <a
              href="https://github.com/Sam-Bro/JS-Password-Gen-SB"
              target="_blank"
              class="github-icon my-link"
              ><i class="fab fa-github"></i
            ></a>
          </p>
        </article>
        <article class="col-md-4 center proj-img">
          <a href="https://borgerapp.herokuapp.com/" target="_blank"
            ><img
              src={burgerApp}
              class="img-fluid img-port img"
              alt="placeholder"
          /></a>
          <p class="caption overlay">
            Burger App
            <a
              href="https://github.com/Sam-Bro/burger"
              target="_blank"
              class="github-icon my-link"
              ><i class="fab fa-github"></i
            ></a>
          </p>
        </article>
      </section>
    </main>
        </article>
    )
  }
}
export default Portfolio