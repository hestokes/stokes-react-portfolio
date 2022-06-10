import React from "react";
import "../styles/Aboutme.css";

function AboutMe() {
  return (
    <section className="aboutme">
      <nav id="aboutme">
        <h2>WHO AM I?</h2>
      </nav>
      <ol>
        <li>Hello! My name is Aaron Stokes</li>
        <li>I am a brand new web developer, and a lifelong learner.</li>
        <li>
          I am honored to be a part of this profession, and I am looking forward
          to contributing to it.
        </li>
        <li>
          I am intrigued with UI/UX and beautiful frontend development, and I am
          growing to love the complexity of the backend.
        </li>
      </ol>
      <img
        src={require("../styles/images/AaronStokesheadshot.png")}
        className="profile"
        alt="Aaron Stokes black and white with hat on"
      ></img>
    </section>
  );
}

export default AboutMe;
