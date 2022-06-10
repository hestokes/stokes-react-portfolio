import React from "react";
import "../styles/Header.css";

function Header({ page, setPage }) {
  return (
    <div>
      <header className="header">
        <h1 onClick={() => setPage("")}>Aaron Stokes</h1>
        <ul>
          <li>
            <a
              href="#Aboutme"
              onClick={() => setPage("Aboutme")}
              className={page === "Aboutme" ? "nav-link active" : "nav-link"}
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="#Work"
              onClick={() => setPage("Work")}
              className={page === "Work" ? "nav-link active" : "nav-link"}
            >
              Work
            </a>
          </li>

          <li>
            <a
              href="#Contactme"
              onClick={() => setPage("Contactme")}
              className={page === "Contactme" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              href="#Resume"
              onClick={() => setPage("Resume")}
              className={page === "Resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </a>
          </li>
        </ul>
        <img></img>
      </header>
    </div>
  );
}

export default Header;
