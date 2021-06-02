import React from "react"
import { stylesContext } from "../../Contexts/StylesContext"
import backArrow from "../../Images/backArrow.png"
import backArrowHover from "../../Images/backArrowHover.png"
import myfotoImage from "../../Images/myfoto.jpg"
import { useHistory } from "react-router-dom";

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper mauris. Morbi sit amet augue leo. Vestibulum rutrum urna ut rhoncus euismod. Phasellus bibendum malesuada elementum. Aenean vitae aliquam urna. Aliquam ultricies enim quis velit gravida, ut hendrerit elit aliquet. Sed congue libero non pellentesque facilisis. Fusce porttitor elit at ante aliquet tempus. Praesent at justo laoreet, fringilla nisi id, auctor sem. Sed rhoncus vitae ante sed placerat. Donec feugiat sem quis massa tempor sodales. Quisque malesuada commodo urna.Phasellus volutpat lorem id risus porta vehicula.Proin ac blandit lacus.Sed pretium, magna et accumsan egestas, risus nisi bibendum lectus, eget interdum lorem magna maximus nisi.Sed eleifend massa sed orci suscipit, eget facilisis lorem scelerisque.In lorem justo, aliquet non varius id, vulputate vel enim.Nunc at vulputate metus.Fusce ac risus vitae nulla maximus pulvinar scelerisque ac nulla.Donec at felis eu enim vulputate placerat.Nam cursus rhoncus cursus.Cras vitae commodo elit.Fusce cursus diam a justo dictum tristique.Praesent eleifend arcu id consectetur dictum."
// const aboutMeText = 

function About(props) {
    const history = useHistory();
    const { sizeUnit, menuOptionStart, goBackFromOption, menuOptionStyle } = React.useContext(stylesContext);
    const aboutRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const newSizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth * 0.9 : window.innerHeight * 0.9;

    function goBack() {
        goBackFromOption(aboutRef, wrapperRef)
        setTimeout(() => { history.push("/Menu") }, 300);
    }
    React.useEffect(
        () => { menuOptionStart(aboutRef, wrapperRef, newSizeUnit) }
    )

    const imgStyle = { position: "absolute", zIndex: "10", height: sizeUnit / 3, left: newSizeUnit - sizeUnit / 2.5, pointerEvents: "auto" }
    return (
        <div ref={aboutRef} style={{ ...menuOptionStyle, backgroundColor: "rgb(100,300,100)" }}>
            <span ref={wrapperRef} style={{ visibility: "hidden" }}>
                <h1 style={{ fontSize: sizeUnit / 6, color: "white", width: "100%", textAlign: "center", top: sizeUnit / 10, position: "absolute" }}>About me</h1>
                <img className={"images"} alt="go_back" style={imgStyle} onMouseOver={e => (e.currentTarget.src = backArrowHover)} onMouseOut={e => (e.currentTarget.src = backArrow)} src={backArrow} onClick={() => { goBack() }}></img>
                <div style={{ position: "absolute", top: sizeUnit / 2 }}>
                    <img style={{ float: "right", height: sizeUnit * 1, marginRight: sizeUnit / 8, marginTop: sizeUnit / 7.5 }} alt="myFoto" src={myfotoImage}></img>
                    <p style={{ fontSize: sizeUnit / 18, marginLeft: sizeUnit / 8, marginRight: sizeUnit / 1.1, fontWeight: "bold", textAlign: "justify" }}><br />
                        My name is Grzegorz Ostapczuk and I'm the creator of this site. I have a master's degree in physics. I also enjoy cycling, canoeing and psychology.<br /><br />
                        About a year ago I discovered a new passion - programming.
                        Since then, thanks to postgraduate studies in JavaScript and Pluralsight courses, I have been developing in this direction.
                        <br /><br />
                        I specialize in the React library. I am currently looking for a job as a front-end developer.</p>
                </div>

            </span>

        </div>
    )
}

export default About;