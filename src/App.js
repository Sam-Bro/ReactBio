import React from 'react';
import image from './profpicture.jpg';
import './App.css';

function App() {
  return (
    <section>
    <header class="card card-width prof-about-card">
    <section class="card-body card-color">
      <article class="row">
        <section class="col-md-6 profile-img-col">
          <img
            src={image}
            class="img-fluid float-left about-img prof-img"
            alt="..."
          />
        </section>
        <section class="col-md-6 profile-text-col">
          <h1 id="profile-title" class="center-70">Samuel Broughton</h1>
          <p class="card-text text-subheading center-70">
            Perth based developer, specialising in delivering Premium,
            Affordable Web Solutions.
          </p>
          <p class="center-70 view-work">View my work</p>
          <p class="center-70">
            <a
              class="my-link"
              href="https://github.com/Sam-Bro"
              target="_blank"
              >Github</a
            >
            &
            <a class="my-link" href="portfolio.html" target="_blank"
              >Portfolio</a
            >
          </p>
          <p class="center-70 view-work">Looking to hire?</p>
          <p class="center-70">
            <a
              class="my-link"
              href="file:///C:/Users/Sam/Desktop/UWA/bio/github%20launched/Sam-Bro.github.io/resources/Resume%20-%20Sam%20Broughton.pdf"
              target="_blank"
              >Resume</a
            >
          </p>
        </section>
      </article>
    </section>
  </header>
  
  <main class="card card-width prof-about-card">
    <section class="card-body card-color">
      <h3 class="card-title about-border">
        'About Me.
      </h3>
      <p class="card-text">
        I believe in delivering rigid, well thought out solutions to clients
        that beam exceptional architectural and technical quality. Specialist
        in providing solutions to complex web problems, never back down from a
        challenge, and perform best under pressure.
      </p>
      <br />

      <p class="card-text">
        Specialising in: HTML5, CSS3, JavaScript, jQuery, Bootstrap,
        Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL,
        Command Line, Git, and more.
      </p>
    </section>
  </main> 
  </section>);
 
  
}

export default App;
