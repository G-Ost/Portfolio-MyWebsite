import React from "react"
import Line from "../Components/FrameLine"
import Button from "../Components/Button"
import { stylesContext } from "../Contexts/StylesContext"

function Frame(props) {
    const { sizeUnit } = React.useContext(stylesContext);
    let frameSide = sizeUnit;
    let horizontalPosition = window.innerHeight / 2 - frameSide / 2;
    let verticalPosition = window.innerWidth / 2 - frameSide / 2;
    let strokeWidth = frameSide / 20;
    let linesCorrection = strokeWidth * 0.5
    let frameStyle = { width: frameSide, height: frameSide, top: horizontalPosition, left: verticalPosition, strokeWidth: strokeWidth };

    const rotationRef = React.useRef(null);

    function onStartButtonClick() {
        props.setIsMenuVisible(true)
    }

    function backToStart() {
        props.backToStartFunctionRef.current();
        setTimeout(() => {
            props.setIsMenuVisible(false);
        }, 600)

    }

    React.useEffect(() => {
        if (props.isMenuVisible) {
            rotationRef.current.style.animationIterationCount = "0";
        }
        else {
            rotationRef.current.style.animationIterationCount = "Infinite";
        }
    }, [props.isMenuVisible])

    return (
        <div className="Frame" style={frameStyle}>
            <div ref={rotationRef} className="rotation" style={frameStyle}>
                <Line lineId={"Line1"} x1={-linesCorrection} x2={frameSide + linesCorrection} y1={0} y2={0} />
                <Line lineId={"Line2"} x1={frameSide} x2={frameSide} y1={0} y2={frameSide + linesCorrection} />
                <Line lineId={"Line3"} x1={frameSide} x2={-linesCorrection} y1={frameSide} y2={frameSide} />
                <Line lineId={"Line4"} x1={0} x2={0} y1={frameSide} y2={0} />
            </div>
            {!props.isMenuVisible && <Button buttonId={"startButton"} sizeUnit={sizeUnit} onCLickFunction={onStartButtonClick} color={"Black"}>Click me!</Button>}
            {props.isMenuVisible && <Button buttonId={"backToStartButton"} sizeUnit={sizeUnit} onCLickFunction={backToStart} >Go back</Button>}
        </div>
    )
}
export default Frame;

//stroke-width:12