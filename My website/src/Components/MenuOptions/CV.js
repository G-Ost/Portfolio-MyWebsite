import React from "react";
import { stylesContext } from "../../Contexts/StylesContext";
import downloadIcon from "../../Images/download.png";
import downloadIconHover from "../../Images/downloadHover.png";
import { Link } from "react-router-dom";
import MenuOption from "../../Containers/MenuOption";

function CV(props) {
  const { sizeUnit } = React.useContext(stylesContext);
  const downloadRef = React.useRef(null);
  const newSizeUnit = sizeUnit * 2.25;

  const imgDownloadIconStyle = {
    position: "relative",
    height: sizeUnit / 1.5,
    left: newSizeUnit / 2 - sizeUnit / 3,
    top: newSizeUnit / 2 - sizeUnit / 3,
    pointerEvents: "auto",
  };
  return (
    <MenuOption color={"#1978a5"}>
      <Link to="/Files/Grzegorz_Ostapczuk_CV.pdf" download target="_blank">
        <img
          ref={downloadRef}
          style={imgDownloadIconStyle}
          className={"images"}
          alt="download"
          onMouseOver={(e) => (e.currentTarget.src = downloadIconHover)}
          onMouseOut={(e) => (e.currentTarget.src = downloadIcon)}
          src={downloadIcon}
        ></img>
      </Link>
    </MenuOption>
  );
}

export default CV;
