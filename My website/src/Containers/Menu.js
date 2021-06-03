import React from "react";
import Button from "../Components/Button";
import { stylesContext } from "../Contexts/StylesContext";
import { useHistory } from "react-router-dom";

function Menu(props) {
    const history = useHistory();
    props.backToStartFunctionRef.current = focusButtonsBack;
    const { sizeUnit, changeElementPosition, menuStyle } = React.useContext(stylesContext);


    const menuOption3Ref = React.useRef(null);
    const menuOption1Ref = React.useRef(null);
    const menuOption2Ref = React.useRef(null);
    const menuOption4Ref = React.useRef(null);
    const buttonRefs = [menuOption4Ref, menuOption3Ref, menuOption2Ref, menuOption1Ref];

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
            <Button givenRef={menuOption1Ref} buttonId={"menuOption1"} onCLickFunction={() => { activateMenuOption(menuOption1Ref, "Projects") }} sizeUnit={sizeUnit} color={"rgb(300,100,100)"}>Projects</Button>
            <Button givenRef={menuOption2Ref} buttonId={"menuOption2"} onCLickFunction={() => { activateMenuOption(menuOption2Ref, "Contact") }} sizeUnit={sizeUnit} color={"rgb(300,300,50)"}>Contact</Button>
            <Button givenRef={menuOption3Ref} buttonId={"menuOption3"} onCLickFunction={() => { activateMenuOption(menuOption3Ref, "CV") }} sizeUnit={sizeUnit} color={"rgb(100,100,300)"}>CV</Button>
            <Button givenRef={menuOption4Ref} buttonId={"menuOption4"} onCLickFunction={() => { activateMenuOption(menuOption4Ref, "About") }} sizeUnit={sizeUnit} color={"rgb(100,300,100)"}>About me</Button>
        </div>

    )
}
export default Menu;
