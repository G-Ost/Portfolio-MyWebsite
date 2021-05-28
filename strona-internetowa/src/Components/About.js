import React from "react"
import { stylesContext } from "../Contexts/StylesContext"
import backArrow from "../Images/backArrow.png"
import backArrowHover from "../Images/backArrowHover.png"
import { useHistory } from "react-router-dom";

function About(props) {
    const history = useHistory();
    const { sizeUnit, menuOptionStart, goBackFromOption } = React.useContext(stylesContext);
    const aboutRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const newSizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth * 0.9 : window.innerHeight * 0.9;

    function goBack() {
        goBackFromOption(aboutRef, wrapperRef)
        setTimeout(() => { history.push("/Menu") }, 300);
    }
    React.useEffect(
        () => { menuOptionStart(aboutRef, wrapperRef, newSizeUnit) }
    )

    const imgStyle = { position: "absolute", zIndex: "10", height: sizeUnit / 3, left: newSizeUnit - sizeUnit / 2.5, pointerEvents: "auto" }
    const projectsDivStyle = { height: sizeUnit / 2.5, width: sizeUnit / 2.5, left: window.innerWidth / 2 - sizeUnit / 5, top: window.innerHeight / 2 - sizeUnit / 5, pointerEvents: "auto", backgroundColor: "rgb(100,300,100)" }
    return (
        <div ref={aboutRef} className="Projects" style={projectsDivStyle}>
            <span ref={wrapperRef} style={{ visibility: "hidden" }}>
                <img className={"images"} alt="go_back" style={imgStyle} onMouseOver={e => (e.currentTarget.src = backArrowHover)} onMouseOut={e => (e.currentTarget.src = backArrow)} src={backArrow} onClick={() => { goBack() }}></img>
            </span>

        </div>
    )
}

export default About;