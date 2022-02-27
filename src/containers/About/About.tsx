import React from "react";
import Name from "../../components/Name/Name";
import logo from "./img/me.jpg"
import Description from "../../components/MyDescription/Description";
import Vacancy from "../../components/Vacancy/Vacancy";

const AboutPage = () => {
    const contentStyle = {
        display: "flex",
        marginTop: "51px",
    }
    const nameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        marginTop: "1%"
    }
    const imageStyle = {
        borderRadius: "34px",
        width: "100%",
    }
    const photoStyle = {
        display: "flex",
        marginLeft: "3%",
        marginRight: "3%",
        width: "30%"
    }
    return (
        <div style={{height: "100%"}}>
            <div className={"myName"} style={nameStyle}>
                <Name/>
            </div>
            <div>
                <div className={"content"} style={contentStyle}>
                    <div className={"Photo"} style={photoStyle}>
                        <img src={logo} alt={"me.jpg"} style={imageStyle}/>
                    </div>
                    <div style={{ width: "70%", marginRight: "3%",}}>
                        <div className={"Vacancy"}>
                            <Vacancy vacancy={"QA Automation Engineer"}/>
                            <Vacancy vacancy={"Python Developer"}/>
                        </div>
                        <Description/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutPage