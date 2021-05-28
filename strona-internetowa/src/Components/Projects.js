import React from "react"
import { stylesContext } from "../Contexts/StylesContext"
import backArrow from "../Images/backArrow.png"
import backArrowHover from "../Images/backArrowHover.png"
import website from "../Images/website.png"
import { useHistory } from "react-router-dom";

function Projects(props) {
    const history = useHistory();
    const { sizeUnit, menuOptionStart, goBackFromOption } = React.useContext(stylesContext);
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
    const projectsDivStyle = { height: sizeUnit / 2.5, width: sizeUnit / 2.5, left: window.innerWidth / 2 - sizeUnit / 5, top: window.innerHeight / 2 - sizeUnit / 5, pointerEvents: "auto", backgroundColor: "rgb(300,100,100)" }
    const navButtonStyle = { height: sizeUnit / 8, width: sizeUnit / 8, marginLeft: sizeUnit / 20, backgroundCcolor: "rgb(300,150,150)" }
    return (
        <div ref={projectsRef} className="Projects" style={projectsDivStyle}>
            <span ref={wrapperRef} style={{ visibility: "hidden" }}>
                <img className={"images"} alt="go_back" style={imgStyle} onMouseOver={e => (e.currentTarget.src = backArrowHover)} onMouseOut={e => (e.currentTarget.src = backArrow)} src={backArrow} onClick={() => { goBack() }}></img>
                {navSelected === "1" && <div style={{ textAlign: "center", top: sizeUnit / 2, position: "absolute", width: "100%" }}>
                    <h1 style={{ fontSize: sizeUnit / 8, color: "white" }}>Welcome to my projects page</h1>
                    <h1 style={{ fontSize: sizeUnit / 12 }}>Serious portfolio stuff is being developed right now. <br /> Meanwhile, you can enjoy my lesser projects.</h1>
                    <h1 style={{ fontSize: sizeUnit / 15 }}>(loading sites may take a while)</h1>
                </div>}
                {navSelected === "2" && <div style={{ textAlign: "center", top: sizeUnit / 2, position: "absolute", width: "100%" }}>

                </div>}



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