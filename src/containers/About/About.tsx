import React from "react";
import Name from "../../components/Name/Name";
import logo from "./img/me.jpg"
const AboutPage = () => {
    const nameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        marginTop: "1%"
    }
    const imageStyle = {
        borderRadius: "34px",
        height: "auto",
        marginTop: "51px",
    }
    const  photoStyle = {
        display:"flex"
    }
    return (
        <div>
            <div className={"myName"} style={nameStyle}>
                <Name/>
            </div>
            <div className={"Photo"} style={photoStyle}>
                <img src={logo} alt={"me.jpg"} style={imageStyle}/>
            </div>
        </div>
    )
}

export default AboutPage