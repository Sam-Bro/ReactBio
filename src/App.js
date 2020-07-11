import React from 'react';
import image from './profpicture.jpg';
import './App.css';

function App() {
  return (
    <section>
    <header className="card card-width prof-about-card">
    <section className="card-body card-color">
      <article className="row">
        <section className="col-md-6 profile-img-col">
          <img
            src={image}
            className="img-fluid float-left about-img prof-img"
            alt="..."
          />
        </section>
        <section className="col-md-6 profile-text-col">
          <h1 id="profile-title" className="center-70">Samuel Broughton</h1>
          <p className="card-text text-subheading center-70">
            Perth based developer, specialising in delivering Premium,
            Affordable Web Solutions.
          </p>
          <p className="center-70 view-work">View my work</p>
          <p className="center-70">
            <a
              className="my-link"
              href="https://github.com/Sam-Bro"
              target="_blank"

              >Github </a
            >
             & 
            <a className="my-link" href="portfolio.html" target="_blank"
              > Portfolio</a
            >
          </p>
          <p className="center-70 view-work">Looking to hire?</p>
          <p className="center-70">
            <a
              className="my-link"
              href="file:///C:/Users/Sam/Desktop/UWA/bio/github%20launched/Sam-Bro.github.io/resources/Resume%20-%20Sam%20Broughton.pdf"
              target="_blank"
              >Resume</a
            >
          </p>
        </section>
      </article>
    </section>
  </header>
  
  <main className="card card-width prof-about-card">
    <section className="card-body card-color">
      <h3 className="card-title about-border">
      <span style={{color: "#8300e9"}}>'</span>About Me<span
            style={{color: "#8300e9"}}
            >.</span
          >
      </h3>
      <p className="card-text">
        I believe in delivering rigid, well thought out solutions to clients
        that beam exceptional architectural and technical quality. Specialist
        in providing solutions to complex web problems, never back down from a
        challenge, and perform best under pressure.
      </p>
      <br />

      <p className="card-text">
        Specialising in: HTML5, CSS3, JavaScript, jQuery, Bootstrap,
        Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL,
        Command Line, Git, and more.
      </p>
    </section>
  </main> 
  </section>);
 
  
}

export default App;
