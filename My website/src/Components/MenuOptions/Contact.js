import React from "react";
import { stylesContext } from "../../Contexts/StylesContext";
import githubLogo from "../../Images/githubLogo.png";
import emailIcon from "../../Images/emailIcon.png";
import phoneIcon from "../../Images/phoneIcon.png";
import MenuOption from "../../Containers/MenuOption";

function Contact(props) {
  const { sizeUnit } = React.useContext(stylesContext);

  const headerStyle = {
    position: "relative",
    fontSize: sizeUnit / 8,
    whiteSpace: "nowrap",
    width: "100%",
    textAlign: "center",
    pointerEvents: "auto",
    top: sizeUnit / 5,
    color: "white",
  };
  return (
    <MenuOption color={"#05716c"}>
      <h1 style={headerStyle}>Grzegorz Ostapczuk</h1>
      <ul
        style={{
          listStyleType: "none",
          position: "absolute",
          textAlign: "left",
          top: sizeUnit / 1.8,
          left: sizeUnit / 5,
          color: "white",
        }}
      >
        <li
          style={{
            position: "relative",
            whiteSpace: "nowrap",
            top: sizeUnit * 0.05,
          }}
        >
          <img
            style={{ height: sizeUnit / 10, verticalAlign: "middle" }}
            className={"images"}
            alt="phoneIcon"
            src={phoneIcon}
          ></img>{" "}
          &nbsp;
          <span
            style={{
              pointerEvents: "auto",
              verticalAlign: "middle",
              fontWeight: "bold",
              fontSize: sizeUnit / 12,
            }}
          >
            691 835 187
          </span>
        </li>
        <li
          style={{
            position: "relative",
            whiteSpace: "nowrap",
            top: sizeUnit * 0.25,
          }}
        >
          <img
            style={{ height: sizeUnit / 10, verticalAlign: "middle" }}
            className={"images"}
            alt="emailIcon"
            src={emailIcon}
          ></img>{" "}
          &nbsp;
          <span
            style={{
              pointerEvents: "auto",
              verticalAlign: "middle",
              fontWeight: "bold",
              fontSize: sizeUnit / 12,
            }}
          >
            g.ostapczuk@gmail.com
          </span>
        </li>
        <li
          style={{
            position: "relative",
            whiteSpace: "nowrap",
            top: sizeUnit * 0.45,
          }}
        >
          <img
            style={{ height: sizeUnit / 10, verticalAlign: "middle" }}
            className={"images"}
            alt="githubLogo"
            src={githubLogo}
          ></img>{" "}
          &nbsp;
          <a
            href="https://github.com/G-Ost"
            target="_blank"
            rel="noreferrer"
            style={{
              pointerEvents: "auto",
              verticalAlign: "middle",
              fontWeight: "bold",
              fontSize: sizeUnit / 12,
              color: "white",
            }}
          >
            https://github.com/G-Ost
          </a>
        </li>
      </ul>
    </MenuOption>
  );
}

export default Contact;
