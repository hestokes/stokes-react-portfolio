import React from "react";
import "../styles/Work.css";

function Work() {
  return (
    <section className="work">
      <nav id="work">
        <h2>Work</h2>
      </nav>
      <div className="workbox">
        <button id="workboxbtn">
          {" "}
          <a href="https://jeongholee21.github.io/weather-dashboard/">
            <img
              src={require("../styles/images/weatherdashboardcitysearchresult.png")}
            />
            <section className="details">
              <h4> Weather Dashboard! </h4>
              <p>
                Deployed Page: https://hestokes.github.io/weatherdashboard/{" "}
              </p>
            </section>
          </a>
        </button>

        <button id="workboxbtn">
          {" "}
          <a href="https://jeongholee21.github.io/work-day-scheduler/index.html">
            <img src={require("../styles/images/workdaytasks134.png")} />
            <section className="details">
              <h4> Work Day Scheduler </h4>
              <p>
                Deployed Page: https://hestokes.github.io/work-day-scheduler/{" "}
              </p>
            </section>
          </a>
        </button>

        <button id="workboxbtn">
          {" "}
          <a href="https://big-sexy-recipes.herokuapp.com/">
            <img src={require("../styles/images/recipeaddedchicken.png")} />
            <section className="details">
              <h4>Sexy Recipes</h4>
              <p>Deployed Page: https://big-sexy-recipes.herokuapp.com/ </p>
            </section>{" "}
          </a>
        </button>
      </div>
    </section>
  );
}

export default Work;
