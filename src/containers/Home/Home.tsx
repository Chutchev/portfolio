import React from "react";
import Name from "../../components/Name/Name";
import Vacancy from "../../components/Vacancy/Vacancy";
import Menu from "../../components/Menu/Menu";

const HomePage = () => {
    const HomePageStyle = {
        height: "100%"
    }
    const h2Style = {
        fontFamily: "Audiowide",
        color: "#FFF",
        display: "block",
        fontSize: "32px",
        lineHeight: "82px",
        "flex-direction": "row"
    }
    const nameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        marginTop: "15%"
    }
    return (
        <div className={"HomePage"} style={HomePageStyle}>
            <div className={"Vacancy"}>
                <Vacancy vacancy={"QA Automation Engineer"}/>
                <Vacancy vacancy={"Python Developer"}/>
            </div>
            <div className={"myName"} style={nameStyle}>
                <h2 style={h2Style}>
                    THE PORTFOLIO OF
                </h2>
                <Name/>
            </div>
            <Menu/>
        </div>
    )
}

export default HomePage;