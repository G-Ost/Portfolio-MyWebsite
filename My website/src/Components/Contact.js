import React from "react"
import { stylesContext } from "../Contexts/StylesContext"
import backArrow from "../Images/backArrow.png"
import backArrowHover from "../Images/backArrowHover.png"
import githubLogo from "../Images/githubLogo.png"
import emailIcon from "../Images/emailIcon.png"
import phoneIcon from "../Images/phoneIcon.png"
import { useHistory } from "react-router-dom";

function Contact(props) {
    const history = useHistory();
    const { sizeUnit, menuOptionStart, goBackFromOption } = React.useContext(stylesContext);
    const contactRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const newSizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth * 0.9 : window.innerHeight * 0.9;

    function goBack() {
        goBackFromOption(contactRef, wrapperRef)
        setTimeout(() => { history.push("/Menu") }, 300);
    }
    React.useEffect(
        () => { menuOptionStart(contactRef, wrapperRef, newSizeUnit) }
    )

    const imgStyle = { position: "absolute", zIndex: "10", height: sizeUnit / 3, left: newSizeUnit - sizeUnit / 2.5, pointerEvents: "auto" }
    const contactDivStyle = { height: sizeUnit / 2.5, width: sizeUnit / 2.5, left: window.innerWidth / 2 - sizeUnit / 5, top: window.innerHeight / 2 - sizeUnit / 5, pointerEvents: "auto", backgroundColor: "rgb(300,300,50)" }
    const headerStyle = { position: "relative", fontSize: sizeUnit / 8, whiteSpace: "nowrap", width: "auto", pointerEvents: "auto", top: sizeUnit / 5 }
    return (

        <div ref={contactRef} className="Projects" style={contactDivStyle}>
            <span ref={wrapperRef} style={{ visibility: "hidden", textAlign: "center" }}>
                <img className={"images"} alt="go_back" style={imgStyle} onMouseOver={e => (e.currentTarget.src = backArrowHover)} onMouseOut={e => (e.currentTarget.src = backArrow)} src={backArrow} onClick={() => { goBack() }}></img>
                <h1 style={headerStyle}>Grzegorz Ostapczuk</h1>

                <ul style={{ listStyleType: "none", position: "absolute", textAlign: "left", top: sizeUnit / 1.8, left: sizeUnit / 5 }}>
                    <li style={{ position: "relative", whiteSpace: "nowrap", top: sizeUnit * 0.05 }}>
                        <img style={{ height: sizeUnit / 10, verticalAlign: "middle" }} className={"images"} alt="phoneIcon" src={phoneIcon} ></img> &nbsp;
                         <span style={{ pointerEvents: "auto", verticalAlign: "middle", fontWeight: "bold", fontSize: sizeUnit / 12 }}>691 835 187</span>
                    </li>
                    <li style={{ position: "relative", whiteSpace: "nowrap", top: sizeUnit * 0.25 }}>
                        <img style={{ height: sizeUnit / 10, verticalAlign: "middle" }} className={"images"} alt="emailIcon" src={emailIcon} ></img> &nbsp;
                        <span style={{ pointerEvents: "auto", verticalAlign: "middle", fontWeight: "bold", fontSize: sizeUnit / 12 }}>g.ostapczuk@gmail.com</span>
                    </li>
                    <li style={{ position: "relative", whiteSpace: "nowrap", top: sizeUnit * 0.45 }}>
                        <img style={{ height: sizeUnit / 10, verticalAlign: "middle" }} className={"images"} alt="githubLogo" src={githubLogo} ></img> &nbsp;
                        <a href="https://github.com/G-Ost" target="_blank" style={{ pointerEvents: "auto", verticalAlign: "middle", fontWeight: "bold", fontSize: sizeUnit / 12 }}>https://github.com/G-Ost</a>
                    </li>
                </ul>

            </span>
        </div>

    )
}

export default Contact;