import React from "react";
import './namestyle.css'
import YellowNeon from "./NeonAnimation";

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
        animation: "neon 1s linear infinite",
        borderRadius: "2px",
        height: "4px",
        width: "100%",
        backgroundColor: "#FFF"
    }
    return (
        <div>
            <YellowNeon />
                <div className={"line"} style={lineStyle}/>

            <h1 style={h1Style}>
                Ivan Chutchev
            </h1>
                <div className={"line"} style={lineStyle}/>
        </div>

    )
}

export default Name