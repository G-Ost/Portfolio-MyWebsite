import * as React from "react";
const stylesContext = React.createContext();

function StylesContext(props) {
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    const [sizeUnit, setSizeUnit] = React.useState(window.matchMedia(" (max-height: 600px) ").matches ? 140 : 350)

    React.useEffect(() => {
        window.addEventListener("orientationchange", () => { setSizeUnit(sizeUnit === 180 ? 350 : 180) });
        return window.removeEventListener("orientationchange", () => { setSizeUnit(sizeUnit === 180 ? 350 : 180) });
    }
    )


    const menuStyle = { left: "50%", top: "50%", textAlign: "center", position: "absolute" };
    let menuOptionStyle = { marginLeft: -sizeUnit / 5, marginTop: -sizeUnit / 5, top: "50%", left: "50%", position: "absolute", borderRadius: "100%", height: sizeUnit / 2.5, width: sizeUnit / 2.5, pointerEvents: "auto", backgroundColor: "rgb(300,100,100)" }


    function changeElementPosition(xPos, yPos, t, el) {
        el.style.transform = ` translate3d(${xPos}px, ${yPos}px, 0) `;
        el.style.transition = ` ${t}s linear`;
    };

    function changeElementSize(newSize, el, t) {
        el.style.height = newSize + "px";
        el.style.width = newSize + "px";
        el.style.transition = ` ${t}s linear`;
    }


    function menuOptionStart(optionElement, wrapperElement, newSizeUnit) {
        setTimeout(() => {
            optionElement.current.style.marginLeft = - newSizeUnit / 2 + "px"
            optionElement.current.style.marginTop = - newSizeUnit / 2 + "px"
            changeElementSize(newSizeUnit, optionElement.current, 0.3);
            optionElement.current.style.borderRadius = 0 + "%";
        }, 100)
        setTimeout(() => { wrapperElement.current.style.visibility = "visible" }, 400)
    }

    function goBackFromOption(optionElement, wrapperElement,) {
        changeElementSize(sizeUnit / 2.5, optionElement.current, 0.3);
        optionElement.current.style.marginLeft = - sizeUnit / 5 + "px"
        optionElement.current.style.marginTop = - sizeUnit / 5 + "px"
        optionElement.current.style.borderRadius = 100 + "%";
        wrapperElement.current.style.visibility = "hidden"
    }



    const value = {
        sizeUnit, changeElementPosition, changeElementSize,
        menuStyle, isMenuVisible,
        setIsMenuVisible, goBackFromOption, menuOptionStart, menuOptionStyle
    }

    return <stylesContext.Provider value={value}>{props.children}</stylesContext.Provider>

}

export { StylesContext, stylesContext }

// @media (orientation: portrait){
//     .Buttons{
//       left: -2%;  
//     }
// }

// @media only screen and (min-width: 768px){
// .canvas{
// position: fixed;
// height: 100%;
// width: 100%;
// } 