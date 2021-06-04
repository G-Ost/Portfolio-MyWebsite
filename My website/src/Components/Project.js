import React from "react";
import githubLogo from "../Images/githubLogo.png";
import firebaseIcon from "../Images/firebaseIcon.png";
import { stylesContext } from "../Contexts/StylesContext";
import wikiLogoImage from "../Images/wikiLogo.png";
function Project(props) {
  const { sizeUnit } = React.useContext(stylesContext);
  const mainDivStyle = {
    textAlign: "center",
    top: sizeUnit / 5,
    position: "absolute",
    width: "100%",
  };
  const imageStyle = { height: sizeUnit / 12, verticalAlign: "middle" };
  const firsListElementStyle = {
    listStyleType: "none",
    fontSize: sizeUnit / 10,
    marginBottom: sizeUnit / 15,
    right: sizeUnit / 10,
    position: "relative",
  };
  const liStyle = { marginBottom: sizeUnit / 20 };
  return (
    <div style={mainDivStyle}>
      <h1
        style={{
          fontSize: sizeUnit / 8,
          color: "white",
          top: -sizeUnit / 30,
          position: "relative",
        }}
      >
        {props.projectTitle}
      </h1>
      <img
        className={"images"}
        style={{
          width: sizeUnit,
          height: sizeUnit,
          right: sizeUnit / 8,
          top: sizeUnit / 2.6,
          position: "absolute",
          border: "solid",
        }}
        alt={props.imageAlt}
        src={props.imageSrc}
      ></img>
      <span
        style={{
          position: "relative",
          top: sizeUnit * 1.1,
          left: sizeUnit / 1.9,
        }}
      >
        <img
          style={imageStyle}
          className={"images"}
          alt="githubLogo"
          src={githubLogo}
        ></img>{" "}
        &nbsp;
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          style={{
            pointerEvents: "auto",
            verticalAlign: "middle",
            fontWeight: "bold",
            fontSize: sizeUnit / 15,
            marginRight: sizeUnit / 10,
          }}
        >
          Github
        </a>
        {props.firebaseLink !== undefined && (
          <>
            <img
              style={imageStyle}
              className={"images"}
              alt="herokuLogo"
              src={firebaseIcon}
            ></img>{" "}
            &nbsp;
            <a
              href={props.firebaseLink}
              target="_blank"
              rel="noreferrer"
              style={{
                pointerEvents: "auto",
                verticalAlign: "middle",
                fontWeight: "bold",
                fontSize: sizeUnit / 15,
              }}
            >
              Firebase
            </a>
          </>
        )}
        <br />
        <br />
        {props.wikiLink && (
          <>
            <img
              style={imageStyle}
              className={"images"}
              alt="wikiLogo"
              src={wikiLogoImage}
            ></img>{" "}
            &nbsp;
            <a
              href={props.wikiLink}
              target="_blank"
              rel="noreferrer"
              style={{
                pointerEvents: "auto",
                verticalAlign: "middle",
                fontWeight: "bold",
                fontSize: sizeUnit / 15,
              }}
            >
              Concept
            </a>
          </>
        )}
      </span>

      <ul
        style={{
          position: "absolute",
          fontSize: sizeUnit / 12,
          left: sizeUnit / 10,
          fontWeight: "bold",
          textAlign: "left",
          top: sizeUnit / 5,
        }}
      >
        <li style={firsListElementStyle}>Notable features:</li>
        {props.featureList.map((item) => {
          return (
            <li key={item} style={liStyle}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Project;
