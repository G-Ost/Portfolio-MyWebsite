function Button(props) {
  let sizeUnit = props.sizeUnit;
  let buttonStyle = {
    height: sizeUnit / 2.5,
    width: sizeUnit / 2.5,
    borderRadius: "100%",
    fontSize: sizeUnit / 14,
    left: "50%",
    top: "50%",
    marginLeft: -sizeUnit / 5,
    marginTop: -sizeUnit / 5,
    backgroundColor: props.color,
    position: "absolute",
  };
  return (
    <button
      ref={props.givenRef}
      onClick={props.onCLickFunction}
      id={props.buttonId}
      style={buttonStyle}
    >
      {props.children}
    </button>
  );
}

export default Button;
