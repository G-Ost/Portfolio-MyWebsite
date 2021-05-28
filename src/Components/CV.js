import React from "react"
import { stylesContext } from "../Contexts/StylesContext"
import backArrow from "../Images/backArrow.png"
import backArrowHover from "../Images/backArrowHover.png"
import downloadIcon from "../Images/download.png"
import downloadIconHover from "../Images/downloadHover.png"
import { useHistory, Link } from "react-router-dom";

function CV(props) {
    const history = useHistory();
    const { sizeUnit, menuOptionStart, goBackFromOption } = React.useContext(stylesContext);
    const cvRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const downloadRef = React.useRef(null);
    const newSizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth * 0.9 : window.innerHeight * 0.9;

    function goBack() {
        goBackFromOption(cvRef, wrapperRef)
        setTimeout(() => { history.push("/Menu") }, 300);
    }
    React.useEffect(
        () => { menuOptionStart(cvRef, wrapperRef, newSizeUnit) }
    )

    const imgStyle = { position: "absolute", zIndex: "10", height: sizeUnit / 3, left: newSizeUnit - sizeUnit / 2.5, pointerEvents: "auto" }
    const projectsDivStyle = { height: sizeUnit / 2.5, width: sizeUnit / 2.5, left: window.innerWidth / 2 - sizeUnit / 5, top: window.innerHeight / 2 - sizeUnit / 5, pointerEvents: "auto", backgroundColor: "rgb(100,100,300)" }
    const imgDownloadIconStyle = { position: "relative", height: sizeUnit / 1.5, left: newSizeUnit / 2 - sizeUnit / 3, top: newSizeUnit / 2 - sizeUnit / 3, pointerEvents: "auto" }
    return (
        <div ref={cvRef} className="Projects" style={projectsDivStyle}>
            <span ref={wrapperRef} style={{ visibility: "hidden" }}>
                <img className={"images"} alt="go_back" style={imgStyle} onMouseOver={e => (e.currentTarget.src = backArrowHover)} onMouseOut={e => (e.currentTarget.src = backArrow)} src={backArrow} onClick={() => { goBack() }}></img>
                <Link to='/Files/Grzegorz_Ostapczuk_CV.pdf' download target="_blank">
                    <img ref={downloadRef} style={imgDownloadIconStyle} className={"images"} alt="download" onMouseOver={e => (e.currentTarget.src = downloadIconHover)} onMouseOut={e => (e.currentTarget.src = downloadIcon)} src={downloadIcon}></img>
                </Link>
            </span>
        </div>
    )
}

export default CV;