function FrameLine(props) {

    return (
        <svg className="Lines" id={props.lineId}>
            <line x1={props.x1} x2={props.x2} y1={props.y1} y2={props.y2} />
        </svg>
    )
}

export default FrameLine;
