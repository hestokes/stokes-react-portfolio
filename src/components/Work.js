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
          <a href="https://hestokes.github.io/weatherdashboard/">
            <img
              src={require("../styles/images/weatherdashboardcitysearchresult.png")}
              alt = "weather dashboard deployed with denver weather"
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
          <a href="https://hestokes.github.io/work-day-scheduler/">
            <img src={require("../styles/images/workdaytasks134.png")}
            alt = "workd day task app deployed"
            />
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
            <img src={require("../styles/images/recipeaddedchicken.png")}
            alt = "big sexy recipe with roast chicken recipe"
            />
            <section className="details">
              <h4>Sexy Recipes</h4>
              <p>Deployed Page: https://big-sexy-recipes.herokuapp.com/ </p>
            </section>{" "}
          </a>
        </button>

        <button id="workboxbtn">
          {" "}
          <a href="https://aarons-budget-tracker.herokuapp.com/">
            <img
              src={require("../styles/images/budgettrackerlivedeploy.png")}
              alt="budget tracker deployed"
            />
            <section className="details">
              <h4>PWA Budget Tracker</h4>
              <p>
                Deployed Page: https://aarons-budget-tracker.herokuapp.com/{" "}
              </p>
            </section>{" "}
          </a>
        </button>

        <button id="workboxbtn">
          {" "}
          <a href="https://drive.google.com/file/d/1AZksAUcPwvc_2l9P7Fc8sVGjxSwbVB3Z/view">
            <img src={require("../styles/images/teamgeneratedmessage.png")}
            alt = "team has been created message at command line"
            />
            <section className="details">
              <h4>Team Profile Generater OOP command line App</h4>
              <p>
                Demo Video:
                https://drive.google.com/file/d/1AZksAUcPwvc_2l9P7Fc8sVGjxSwbVB3Z/view{" "}
              </p>
            </section>{" "}
          </a>
        </button>

        <button id="workboxbtn">
          {" "}
          <a href="https://drive.google.com/file/d/1N_4AOxLPFW7v7WPca69znAAQc0oBipfx/view">
            <img
              src={require("../styles/images/employeetrackercreateemployee.png")}
              alt = "employee tracker create employee feature at command line"
            />
            <section className="details">
              <h4>Employee Tracker Command Line App</h4>
              <p>
                Demo Video:
                https://drive.google.com/file/d/1N_4AOxLPFW7v7WPca69znAAQc0oBipfx/view{" "}
              </p>
            </section>{" "}
          </a>
        </button>
      </div>
    </section>
  );
}

export default Work;
