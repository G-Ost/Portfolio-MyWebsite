import React from "react"
import { stylesContext } from "../../Contexts/StylesContext"
import backArrow from "../../Images/backArrow.png"
import backArrowHover from "../../Images/backArrowHover.png"
import websiteImage from "../../Images/website.jpg"
import todoImage from "../../Images/todo.jpg"
import reflexappImage from "../../Images/reflexapp.jpg"
import gameOfLifeImage from "../../Images/gameOfLife.jpg"
import bouncySimulatorImage from "../../Images/bouncySim.jpg"
import { useHistory } from "react-router-dom";
import Project from "../Project"


function Projects(props) {
    const history = useHistory();
    const { sizeUnit, menuOptionStart, goBackFromOption, menuOptionStyle } = React.useContext(stylesContext);
    const projectsRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const newSizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth * 0.9 : window.innerHeight * 0.9;
    const [navSelected, setNavSelected] = React.useState("1")
    function goBack() {
        goBackFromOption(projectsRef, wrapperRef)
        setTimeout(() => { history.push("/Menu") }, 300);
    }
    React.useEffect(
        () => { menuOptionStart(projectsRef, wrapperRef, newSizeUnit) }
    )

    const imgStyle = { position: "absolute", zIndex: "10", height: sizeUnit / 3, left: newSizeUnit - sizeUnit / 2.5, pointerEvents: "auto" }
    const navButtonStyle = { height: sizeUnit / 8, width: sizeUnit / 8, marginLeft: sizeUnit / 20, backgroundCcolor: "rgb(300,150,150)" }

    const featureList1 = ["useState", "useEffect", "useRef", "useContext", "React Router", "CSS animations", "Suitable for all devices"];
    const featureList2 = ["useState", "useEffect", "useMemo", "useCallback", "useRef", "useContext", "CSS animations", "Suitable for all devices"];
    const featureList3 = ["useState", "useReducer", "useEffect", "useMemo", "useContext", "custom hooks", "React Router", "External server validation"];
    const featureList4 = ["useState", "useReducer", "useRef"];
    const featureList5 = ["useContext", "useRef", "CSS animations"];
    return (
        <div ref={projectsRef} style={{ ...menuOptionStyle, backgroundColor: "rgb(300,100,100)" }}>
            <span ref={wrapperRef} style={{ visibility: "hidden" }}>
                <img className={"images"} alt="go_back" style={imgStyle} onMouseOver={e => (e.currentTarget.src = backArrowHover)} onMouseOut={e => (e.currentTarget.src = backArrow)} src={backArrow} onClick={() => { goBack() }}></img>
                {navSelected === "1" && <div style={{ textAlign: "center", top: sizeUnit / 2, position: "absolute", width: "100%" }}>
                    <h1 style={{ fontSize: sizeUnit / 8, color: "white" }}>Welcome to my projects page</h1>
                    <h1 style={{ fontSize: sizeUnit / 12 }}>Serious portfolio stuff is being developed right now. <br /> Meanwhile, you can enjoy my lesser projects.</h1>
                    <h1 style={{ fontSize: sizeUnit / 15 }}>(just use navigation below)</h1>
                </div>}
                {navSelected === "2" &&
                    <Project projectTitle={"This very website"} imageAlt={"website_image"} imageSrc={websiteImage} githubLink={"https://github.com/G-Ost/Portfolio-MyWebsite"}
                        featureList={featureList1} />}
                {navSelected === "3" &&
                    <Project projectTitle={"Reflex Trainer"} imageAlt={"website_image"} imageSrc={reflexappImage} githubLink={"https://github.com/G-Ost/Portfolio-reflexApp"}
                        firebaseLink={"https://gost-reflex-app.web.app/"} featureList={featureList2} />}
                {navSelected === "4" &&
                    <Project projectTitle={"Boring (but developed!) ToDo App"} imageAlt={"todo_image"} imageSrc={todoImage} githubLink={"https://github.com/G-Ost/Portfolio-MyWebsite"}
                        firebaseLink={"https://todoapp-1b434.web.app/"} featureList={featureList3} />}
                {navSelected === "5" &&
                    <Project projectTitle={"Conway's Game of Life"} imageAlt={"todo_image"} wikiLink={"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"} imageSrc={gameOfLifeImage} githubLink={"https://github.com/G-Ost/Portfolio-gameOfLife"}
                        firebaseLink={"https://gost-game-of-life.web.app/"} featureList={featureList4} />}
                {navSelected === "6" &&
                    <Project projectTitle={"Bouncy simulator"} imageAlt={"todo_image"} imageSrc={bouncySimulatorImage} githubLink={"https://github.com/G-Ost/Portfolio-bouncySimulator"}
                        firebaseLink={"https://bouncy-simulator.web.app/"} featureList={featureList5} />}



                <div style={{ position: "absolute", textAlign: "center", float: "bottom", bottom: sizeUnit / 10, width: "100%" }}>
                    <button className="navButton" onClick={() => { setNavSelected("1") }} style={{ ...navButtonStyle, backgroundColor: navSelected === "1" ? "rgb(300,50,50)" : "rgb(300,150,150)" }}></button>
                    <button className="navButton" onClick={() => { setNavSelected("2") }} style={{ ...navButtonStyle, backgroundColor: navSelected === "2" ? "rgb(300,50,50)" : "rgb(300,150,150)" }}></button>
                    <button className="navButton" onClick={() => { setNavSelected("3") }} style={{ ...navButtonStyle, backgroundColor: navSelected === "3" ? "rgb(300,50,50)" : "rgb(300,150,150)" }}></button>
                    <button className="navButton" onClick={() => { setNavSelected("4") }} style={{ ...navButtonStyle, backgroundColor: navSelected === "4" ? "rgb(300,50,50)" : "rgb(300,150,150)" }}></button>
                    <button className="navButton" onClick={() => { setNavSelected("5") }} style={{ ...navButtonStyle, backgroundColor: navSelected === "5" ? "rgb(300,50,50)" : "rgb(300,150,150)" }}></button>
                    <button className="navButton" onClick={() => { setNavSelected("6") }} style={{ ...navButtonStyle, backgroundColor: navSelected === "6" ? "rgb(300,50,50)" : "rgb(300,150,150)" }}></button>
                </div>
            </span>

        </div>
    )
}

export default Projects;