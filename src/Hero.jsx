import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Hi there! Welcome to my project website. Check out some cool
            projects I built with React and many interesting APIs! <br />
            See the source code here:
            <a
              href="https://github.com/Meng-xuanny?tab=repositories"
              className="hero-link"
            >
              My Github Repositories
            </a>
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="a woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
