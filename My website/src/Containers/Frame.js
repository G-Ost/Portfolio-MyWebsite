import React from "react"
import Line from "../Components/FrameLine"
import Button from "../Components/Button"
import { stylesContext } from "../Contexts/StylesContext"

function Frame(props) {
    const { sizeUnit } = React.useContext(stylesContext);
    let linesCorrection = sizeUnit / 40
    let frameStyle = { width: sizeUnit, position: "absolute", height: sizeUnit, top: "50%", left: "50%", marginLeft: -sizeUnit / 2, marginTop: -sizeUnit / 2, strokeWidth: sizeUnit / 20 };

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
                <Line lineId={"Line1"} x1={-linesCorrection} x2={sizeUnit + linesCorrection} y1={0} y2={0} />
                <Line lineId={"Line2"} x1={sizeUnit} x2={sizeUnit} y1={0} y2={sizeUnit + linesCorrection} />
                <Line lineId={"Line3"} x1={sizeUnit} x2={-linesCorrection} y1={sizeUnit} y2={sizeUnit} />
                <Line lineId={"Line4"} x1={0} x2={0} y1={sizeUnit} y2={0} />
            </div>
            {!props.isMenuVisible && <Button buttonId={"startButton"} sizeUnit={sizeUnit} onCLickFunction={onStartButtonClick} color={"Black"}>Click me!</Button>}
            {props.isMenuVisible && <Button buttonId={"backToStartButton"} sizeUnit={sizeUnit} onCLickFunction={backToStart} >Go back</Button>}
        </div>
    )
}
export default Frame;

//stroke-width:12