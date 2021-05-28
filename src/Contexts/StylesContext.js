import * as React from "react";
const stylesContext = React.createContext();

function StylesContext(props) {
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    const sizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth / 2.5 : window.innerHeight / 2.5;
    const horizontalPosition = window.innerHeight / 2 - sizeUnit / 2;
    const verticalPosition = window.innerWidth / 2 - sizeUnit / 2;
    const menuStyle = { width: sizeUnit, top: horizontalPosition, left: verticalPosition, textAlign: "center", position: "absolute" };


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
            changeElementSize(newSizeUnit, optionElement.current, 0.3);
            optionElement.current.style.left = window.innerWidth / 2 - newSizeUnit / 2 + "px"
            optionElement.current.style.top = window.innerHeight / 2 - newSizeUnit / 2 + "px"
            optionElement.current.style.borderRadius = 0 + "%";
        }, 100)
        setTimeout(() => { wrapperElement.current.style.visibility = "visible" }, 400)
    }

    function goBackFromOption(optionElement, wrapperElement,) {
        changeElementSize(sizeUnit / 2.5, optionElement.current, 0.3);
        optionElement.current.style.left = window.innerWidth / 2 - sizeUnit / 5 + "px"
        optionElement.current.style.top = window.innerHeight / 2 - sizeUnit / 5 + "px"
        optionElement.current.style.borderRadius = 100 + "%";
        wrapperElement.current.style.visibility = "hidden"
        // setTimeout(() => { history.push("/Menu") }, 300);
    }



    const value = {
        sizeUnit, changeElementPosition, changeElementSize,
        horizontalPosition, verticalPosition, menuStyle, isMenuVisible,
        setIsMenuVisible, goBackFromOption, menuOptionStart
    }

    return <stylesContext.Provider value={value}>{props.children}</stylesContext.Provider>

}

export { StylesContext, stylesContext }