/** Box: displays box with attributes passed down in prop
 * 
 * Props:
 * - deleteBox: function to delete box, using boxId
 * - backgroundColor: background color to be used in css styling
 * - height: height to be used in css styling
 * - width: width to be used in css styling
 * 
 * App --> BoxList --> Box
 */
function Box({ deleteBox, backgroundColor, height, width }) {
    const boxStyles = {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
    };
// TODO : USE OBJECT SHORTHAND^

// TODO: move container style to seperate stylesheet
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    // TODO: Give className of component to outer div
    return(
    <div style={containerStyle}>
        <div style={boxStyles}></div>
        <button onClick={deleteBox}>X</button>
    </div>
)};

export default Box;