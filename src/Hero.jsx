import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae
            quisquam maiores voluptatibus recusandae illum eos quam fugit
            excepturi vero ipsa, ipsum, praesentium delectus nisi voluptatum?
            Exercitationem voluptate eaque amet.
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
