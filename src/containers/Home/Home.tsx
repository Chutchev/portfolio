import React from "react";
import Name from "../../components/Name/Name";
import Vacancy from "../../components/Vacancy/Vacancy";
import Menu from "../../components/Menu/Menu";
import {Zoom} from "react-awesome-reveal";


const HomePage = () => {
    const HomePageStyle = {
        height: "100%",
        display: "flex",
        "flex-direction": "column",
    }
    const h2Style = {
        fontFamily: "Audiowide",
        color: "#FFF",
        display: "block",
        fontSize: "32px",
        lineHeight: "82px",
    }
    const nameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        height: "75%"
    }
    return (
        <div className={"HomePage"} style={HomePageStyle}>
            <div className={"Vacancy"}>
                <Zoom cascade={true}>
                    <Vacancy vacancy={"QA Automation Engineer"}/>
                    <Vacancy vacancy={"Python Developer"}/>
                </Zoom>
            </div>
            <div className={"myName"} style={nameStyle}>
                <Zoom cascade={true} delay={1000}>
                    <h2 style={h2Style}>
                        THE PORTFOLIO OF
                    </h2>
                </Zoom>
                <Name/>
            </div>
            <div></div>
        </div>
    )
}

export default HomePage;