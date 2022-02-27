import React from "react";
import './namestyle.css'

const Name = () => {

    const h1Style = {
        fontFamily: "Audiowide",
        color: "#FFF",
        display: "block",
        fontSize: "64px",
        "flex-direction": "row",
        margin: "0px"
    }
    const lineStyle = {
        animation: "FlashAnimation 1s linear infinite",
        height: "3px",
        width: "100%",
        backgroundColor: "#FFF"
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