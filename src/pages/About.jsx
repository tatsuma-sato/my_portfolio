import React from "react";
import avator from "../image/avator.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container">
        <h2 className="main-title text-uppercase">About me</h2>
        <div className="about__content">
          <div className="about__img">
            <img src={avator} alt="" />
          </div>
          <div className="about__text">
            <p>
              I am a React developer
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              officia! In ipsam sed dolore voluptatibus.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur neque, quasi nemo dolorum vel facere ea porro incidunt
              voluptatem dolorem!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
