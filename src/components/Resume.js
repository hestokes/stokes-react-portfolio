import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <section className="resume">
      <nav id="resume">
        <h2>Resume</h2>
      </nav>
      <button>
        <a href="https://www.linkedin.com/in/h-aaron-stokes/">
          {" "}
          Click hear to see my resume{" "}
        </a>
      </button>
    </section>
  );
}

export default Resume;
