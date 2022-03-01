import React from "react";
import Name from "../../components/Name/Name";
import logo from "./img/me.jpg"
import Description from "../../components/MyDescription/Description";
import Vacancy from "../../components/Vacancy/Vacancy";
import VerticalLine from "../../components/VerticalLine";
import Button from "../../components/Button";
import styled from "styled-components"

const Descriptions = {
    "QA AUTOMATION ENGINEER": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sed mi ultrices condimentum. Nullam a molestie diam, et dictum justo. Vestibulum ex lacus, facilisis eget sagittis ut, sagittis ullamcorper est. Curabitur sed laoreet lectus. Aenean rhoncus ullamcorper consequat. Donec gravida ornare ornare. Sed viverra, ligula a maximus pellentesque, neque nibh consectetur ex, id volutpat felis nisi in metus. Duis a ligula interdum elit eleifend rutrum quis facilisis libero. Nulla consectetur orci in turpis condimentum posuere. Aliquam vitae molestie nunc. Nullam id hendrerit dui, quis gravida enim. Vivamus ac tincidunt tellus. Nam condimentum ipsum a nibh sollicitudin, vel venenatis ex malesuada. Nulla id neque ullamcorper, fermentum velit tincidunt, tristique ex. Nullam facilisis justo libero, eget hendrerit arcu dignissim et. Vivamus auctor, nisl sed posuere condimentum, ex erat ullamcorper odio, id lacinia quam magna at turpis.",
    "PYTHON DEVELOPER": "Phasellus tempus ipsum quis sagittis feugiat. Praesent ac mi faucibus, imperdiet lectus ac, mattis orci. Integer imperdiet metus id est molestie gravida. Suspendisse tempus tempus ipsum, id venenatis ante euismod molestie. Praesent et aliquet velit. Sed posuere ut magna ut accumsan. Quisque non egestas sapien, quis viverra turpis.",
    "EXCEL": "i know excel"
}


const Photo = styled.div`
        display: flex;
        margin-left: 3%;
        margin-right: 3%;
        width: 27%;
        height: 27%;
        top: 2em;
        position: sticky;
`
const Vacancies = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 30px;
        position: sticky;
`
const AboutPage = () => {
    const [text, setText] = React.useState(Descriptions["QA AUTOMATION ENGINEER"])
    const [showAnimation, setShowAnimation] = React.useState(true)
    const contentStyle = {
        display: "flex",
        marginTop: "51px",
        marginBottom: "53px"
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
        opacity: "75%",
        marginTop: "2em"
    }
    const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        let desc = event.currentTarget.innerText
        setShowAnimation(!showAnimation)
        if (desc == "QA AUTOMATION ENGINEER") {
            setShowAnimation(!showAnimation)
            setText(Descriptions["QA AUTOMATION ENGINEER"])
        }
        if (desc == "EXCEL") {
            setShowAnimation(!showAnimation)
            setText(Descriptions["EXCEL"])
        }
        if (desc == "PYTHON DEVELOPER") {
            setShowAnimation(!showAnimation)
            setText(Descriptions["PYTHON DEVELOPER"])
        }
    }
    return (
        <div style={{height: "100vh"}}>
            <div className={"myName"} style={nameStyle}>
                <Name/>
            </div>
            <div>
                <div className={"content"} style={contentStyle}>
                    <Photo>
                        <img src={logo} alt={"me.jpg"} style={imageStyle}/>
                    </Photo>
                    <VerticalLine/>
                    <Vacancies>
                        <Button onClick={handleButton}><Vacancy vacancy={"QA Automation Engineer"}/></Button>
                        <Button onClick={handleButton}><Vacancy vacancy={"Python Developer"}/></Button>
                        <Button onClick={handleButton}><Vacancy vacancy={"excel"}/></Button>
                    </Vacancies>
                    <VerticalLine/>
                    <div style={{width: "73%", marginRight: "3%", marginLeft: "3%"}}>
                        <Description text={text} show={showAnimation}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutPage