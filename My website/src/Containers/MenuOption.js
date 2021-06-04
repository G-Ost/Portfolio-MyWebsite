import React from "react";
import { stylesContext } from "../Contexts/StylesContext";
import backArrow from "../Images/backArrow.png";
import backArrowHover from "../Images/backArrowHover.png";
import { useHistory } from "react-router-dom";

function MenuOption(props) {
  const history = useHistory();
  const { sizeUnit, menuOptionStart, goBackFromOption, menuOptionStyle } =
    React.useContext(stylesContext);
  const mainDivRef = React.useRef(null);
  const wrapperRef = React.useRef(null);
  const newSizeUnit = sizeUnit * 2.25;

  function goBack() {
    goBackFromOption(mainDivRef, wrapperRef);
    setTimeout(() => {
      history.push("/Menu");
    }, 300);
  }
  React.useEffect(() => {
    menuOptionStart(mainDivRef, wrapperRef, newSizeUnit);
  });

  const imgStyle = {
    position: "absolute",
    zIndex: "10",
    height: sizeUnit / 3,
    right: sizeUnit / 15,
    pointerEvents: "auto",
  };
  return (
    <div
      ref={mainDivRef}
      style={{ ...menuOptionStyle, backgroundColor: props.color }}
    >
      <span ref={wrapperRef} style={{ visibility: "hidden" }}>
        <img
          className={"images"}
          alt="go_back"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.src = backArrowHover)}
          onMouseOut={(e) => (e.currentTarget.src = backArrow)}
          src={backArrow}
          onClick={() => {
            goBack();
          }}
        ></img>
        {props.children}
      </span>
    </div>
  );
}

export default MenuOption;
