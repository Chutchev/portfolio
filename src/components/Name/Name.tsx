import React from "react";


const Name = () => {
    const h1Style = {
        fontFamily: "Audiowide",
        color: "#FFF",
        display: "block",
        fontSize: "256px",
        lineHeight: "82px",
        "flex-direction": "row"
    }
    const lineStyle = {
        height: "3px",
        width: "100%",
        backgroundColor: "#484848"
    }
    return (
        <div>
            <div className={"line"} style={lineStyle}/>
            <h1 style={h1Style}>
                Ivan Chutchev
            </h1>
            <div className={"line"} style={lineStyle}/>
        </div>

    )
}

export default Name