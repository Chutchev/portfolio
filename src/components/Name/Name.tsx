import React from "react";
import styled, {keyframes} from "styled-components"
import YellowNeonLine from "../NeonLine/YellowNeonLine";

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
            <YellowNeonLine/>
            <h1 style={h1Style}>
                Ivan Chutchev
            </h1>
            <YellowNeonLine/>
        </div>

    )
}

export default Name