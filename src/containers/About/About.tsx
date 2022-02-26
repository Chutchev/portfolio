import React from "react";
import Name from "../../components/Name/Name";

const AboutPage = () => {
    const nameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        marginTop: "1%"
    }
    return (
        <div>
            <div className={"myName"} style={nameStyle}>
                <Name/>
                <img src={"./img/me.jpg"} alt={"me.jpg"}/>
            </div>
        </div>
    )
}

export default AboutPage