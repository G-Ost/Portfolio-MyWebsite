import React from "react";
import Button from "../Components/Button";
import { stylesContext } from "../Contexts/StylesContext";
import { useHistory } from "react-router-dom";

function Menu(props) {
    const history = useHistory();
    props.backToStartFunctionRef.current = focusButtonsBack;
    const { sizeUnit, changeElementPosition, menuStyle } = React.useContext(stylesContext);


    const blueButtonRef = React.useRef(null);
    const redButtonRef = React.useRef(null);
    const yellowButtonRef = React.useRef(null);
    const greenButtonRef = React.useRef(null);
    const buttonRefs = [greenButtonRef, blueButtonRef, yellowButtonRef, redButtonRef];

    React.useEffect(
        spreadMenuButtons
    )




    function spreadMenuButtons() {
        let elements = buttonRefs.map((element) => element.current);
        const coordinateUnit = sizeUnit * 0.75;
        let movementCoordinates = [
            [-coordinateUnit, 0],
            [-coordinateUnit, -coordinateUnit],
            [coordinateUnit, -coordinateUnit],
            [coordinateUnit, coordinateUnit],
            [-coordinateUnit, coordinateUnit]
        ]

        for (let i = 0; i < movementCoordinates.length; i++) {
            for (let element of elements) {
                setTimeout(() => { changeElementPosition(movementCoordinates[i][0], movementCoordinates[i][1], 0.15, element) }, 1 + i * 150)
            }
            if (i !== 0) {
                elements.splice(-1, 1)
            }
        }
    }

    function focusButtonsBack() {
        let elements = buttonRefs.map((element) => element.current);
        for (let i = 0; i < elements.length; i++) {
            setTimeout(() => { changeElementPosition(0, 0, 0.15, elements[i]) }, 1 + i * 150)
        }
    }


    function activateMenuOption(el, path) {
        changeElementPosition(0, 0, 0.3, el.current)
        el.current.style.fontSize = 0 + "px";
        setTimeout(() => { history.push(`/${path}`) }, 400);
    }



    return (
        <div className="Menu" style={menuStyle}>
            <Button givenRef={blueButtonRef} buttonId={"menuOption1"} onCLickFunction={() => { activateMenuOption(blueButtonRef, "CV") }} sizeUnit={sizeUnit} color={"rgb(100,100,300)"}>CV</Button>
            <Button givenRef={redButtonRef} buttonId={"menuOption2"} onCLickFunction={() => { activateMenuOption(redButtonRef, "Projects") }} sizeUnit={sizeUnit} color={"rgb(300,100,100)"}>Projects</Button>
            <Button givenRef={greenButtonRef} buttonId={"menuOption3"} onCLickFunction={() => { activateMenuOption(greenButtonRef, "About") }} sizeUnit={sizeUnit} color={"rgb(100,300,100)"}>About me</Button>
            <Button givenRef={yellowButtonRef} buttonId={"menuOption4"} onCLickFunction={() => { activateMenuOption(yellowButtonRef, "Contact") }} sizeUnit={sizeUnit} color={"rgb(300,300,50)"}>Contact</Button>
        </div>

    )
}
export default Menu;
