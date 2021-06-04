import React from "react";
import { stylesContext } from "../../Contexts/StylesContext";
import websiteImage from "../../Images/website.jpg";
import todoImage from "../../Images/todo.jpg";
import reflexappImage from "../../Images/reflexapp.jpg";
import gameOfLifeImage from "../../Images/gameOfLife.jpg";
import bouncySimulatorImage from "../../Images/bouncySim.jpg";
import Project from "../Project";
import MenuOption from "../../Containers/MenuOption";

function Projects(props) {
  const { sizeUnit } = React.useContext(stylesContext);
  const [navSelected, setNavSelected] = React.useState("1");

  function leftArrowNavigation() {
    if (navSelected !== "1") {
      setNavSelected((parseInt(navSelected) - 1).toString());
    }
  }

  function rightArrowNavigation() {
    console.log(navSelected);
    if (navSelected !== "6") {
      setNavSelected((parseInt(navSelected) + 1).toString());
    }
  }

  const navButtonStyle = {
    height: sizeUnit / 8,
    width: sizeUnit / 8,
    marginLeft: sizeUnit / 40,
    marginRight: sizeUnit / 40,
    backgroundCcolor: "rgb(300,150,150)",
  };

  const navArrowStyle = {
    position: "absolute",
    fontSize: sizeUnit / 4,
    bottom: 0,
    pointerEvents: "auto",
    cursor: "pointer",
  };

  const featureList1 = [
    "useState",
    "useEffect",
    "useRef",
    "useContext",
    "React Router",
    "CSS animations",
    "Suitable for all devices",
  ];
  const featureList2 = [
    "useState",
    "useEffect",
    "useMemo",
    "useCallback",
    "useRef",
    "useContext",
    "CSS animations",
    "Suitable for all devices",
  ];
  const featureList3 = [
    "useState",
    "useReducer",
    "useEffect",
    "useMemo",
    "useContext",
    "custom hooks",
    "React Router",
    "External server validation",
  ];
  const featureList4 = ["useState", "useReducer", "useRef"];
  const featureList5 = ["useContext", "useRef", "CSS animations"];

  return (
    <MenuOption color={"#1fbfb8"}>
      {navSelected === "1" && (
        <div
          style={{
            textAlign: "center",
            top: sizeUnit / 2,
            position: "absolute",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: sizeUnit / 8, color: "white" }}>
            Welcome to my projects page
          </h1>
          <h1 style={{ fontSize: sizeUnit / 12 }}>
            Serious portfolio stuff is being developed right now. <br />{" "}
            Meanwhile, you can enjoy my lesser projects.
          </h1>
        </div>
      )}
      {navSelected === "2" && (
        <Project
          projectTitle={"This very website"}
          imageAlt={"website_image"}
          imageSrc={websiteImage}
          githubLink={"https://github.com/G-Ost/Portfolio-MyWebsite"}
          featureList={featureList1}
        />
      )}
      {navSelected === "3" && (
        <Project
          projectTitle={"Reflex Trainer"}
          imageAlt={"website_image"}
          imageSrc={reflexappImage}
          githubLink={"https://github.com/G-Ost/Portfolio-reflexApp"}
          firebaseLink={"https://gost-reflex-app.web.app/"}
          featureList={featureList2}
        />
      )}
      {navSelected === "4" && (
        <Project
          projectTitle={"Boring (but developed!) ToDo App"}
          imageAlt={"todo_image"}
          imageSrc={todoImage}
          githubLink={"https://github.com/G-Ost/Portfolio-MyWebsite"}
          firebaseLink={"https://todoapp-1b434.web.app/"}
          featureList={featureList3}
        />
      )}
      {navSelected === "5" && (
        <Project
          projectTitle={"Conway's Game of Life"}
          imageAlt={"todo_image"}
          wikiLink={"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"}
          imageSrc={gameOfLifeImage}
          githubLink={"https://github.com/G-Ost/Portfolio-gameOfLife"}
          firebaseLink={"https://gost-game-of-life.web.app/"}
          featureList={featureList4}
        />
      )}
      {navSelected === "6" && (
        <Project
          projectTitle={"Bouncy simulator"}
          imageAlt={"todo_image"}
          imageSrc={bouncySimulatorImage}
          githubLink={"https://github.com/G-Ost/Portfolio-bouncySimulator"}
          firebaseLink={"https://bouncy-simulator.web.app/"}
          featureList={featureList5}
        />
      )}

      <div
        style={{
          position: "absolute",
          textAlign: "center",
          float: "bottom",
          bottom: sizeUnit / 10,
          width: "100%",
        }}
      >
        <button
          className="navButtons"
          style={{
            ...navButtonStyle,
            backgroundColor: navSelected === "1" ? "white" : "#33DED6",
          }}
          onClick={() => {
            setNavSelected("1");
          }}
        ></button>
        <button
          className="navButtons"
          style={{
            ...navButtonStyle,
            backgroundColor: navSelected === "2" ? "white" : "#33DED6",
          }}
          onClick={() => {
            setNavSelected("2");
          }}
        ></button>
        <button
          className="navButtons"
          style={{
            ...navButtonStyle,
            backgroundColor: navSelected === "3" ? "white" : "#33DED6",
          }}
          onClick={() => {
            setNavSelected("3");
          }}
        ></button>
        <button
          className="navButtons"
          style={{
            ...navButtonStyle,
            backgroundColor: navSelected === "4" ? "white" : "#33DED6",
          }}
          onClick={() => {
            setNavSelected("4");
          }}
        ></button>
        <button
          className="navButtons"
          style={{
            ...navButtonStyle,
            backgroundColor: navSelected === "5" ? "white" : "#33DED6",
          }}
          onClick={() => {
            setNavSelected("5");
          }}
        ></button>
        <button
          className="navButtons"
          style={{
            ...navButtonStyle,
            backgroundColor: navSelected === "6" ? "white" : "#33DED6",
          }}
          onClick={() => {
            setNavSelected("6");
          }}
        ></button>
      </div>

      <span
        className="navArrows"
        style={{ ...navArrowStyle, left: sizeUnit / 3 }}
        onClick={() => {
          leftArrowNavigation();
        }}
      >
        {"\u2b9c"}
      </span>

      <span
        className="navArrows"
        style={{ ...navArrowStyle, right: sizeUnit / 3 }}
        onClick={() => {
          rightArrowNavigation();
        }}
      >
        {"\u2b9e"}
      </span>
    </MenuOption>
  );
}

export default Projects;
