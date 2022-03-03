function Box({ backgroundColor, height, width }) {
    const boxStyles = {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
    };

    return(
    <div>
        <div style={boxStyles}></div>
        <button>X</button>
    </div>
)};

export default Box;