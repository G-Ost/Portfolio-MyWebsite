import React from "react";
import { stylesContext } from "../../Contexts/StylesContext";
import myfotoImage from "../../Images/myfoto.jpg";
import MenuOption from "../../Containers/MenuOption";

function About(props) {
  const { sizeUnit } = React.useContext(stylesContext);
  return (
    <MenuOption color={"#031163"}>
      <h1
        style={{
          fontSize: sizeUnit / 6,
          color: "white",
          width: "100%",
          textAlign: "center",
          top: sizeUnit / 10,
          position: "absolute",
        }}
      >
        About me
      </h1>
      <div style={{ position: "absolute", top: sizeUnit / 2 }}>
        <img
          style={{
            float: "right",
            height: sizeUnit * 1,
            marginRight: sizeUnit / 8,
            marginTop: sizeUnit / 7.5,
          }}
          alt="myFoto"
          src={myfotoImage}
        ></img>
        <p
          style={{
            fontSize: sizeUnit / 18,
            marginLeft: sizeUnit / 8,
            marginRight: sizeUnit / 1.1,
            fontWeight: "bold",
            textAlign: "justify",
            color: "white",
          }}
        >
          <br />
          My name is Grzegorz Ostapczuk and I'm the creator of this site. I have
          a master's degree in physics. I also enjoy cycling, canoeing and
          psychology.
          <br />
          <br />
          About a year ago I discovered a new passion - programming. Since then,
          thanks to postgraduate studies in JavaScript and Pluralsight courses,
          I have been developing in this direction.
          <br />
          <br />I specialize in the React library. I am currently looking for a
          job as a front-end developer.
        </p>
      </div>
    </MenuOption>
  );
}

export default About;
