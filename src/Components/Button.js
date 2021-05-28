function Button(props) {
    let sizeUnit = props.sizeUnit;
    let buttonStyle = {
        height: sizeUnit / 2.5, width: sizeUnit / 2.5, borderRadius: "100%", fontSize: sizeUnit / 12, left: sizeUnit / 2 - sizeUnit / 5,
        top: sizeUnit / 2 - sizeUnit / 5, backgroundColor: props.color, position: "absolute"
    }
    return (
        <button ref={props.givenRef} onClick={props.onCLickFunction} id={props.buttonId} style={buttonStyle}>{props.children}</button>
    )
}

export default Button;