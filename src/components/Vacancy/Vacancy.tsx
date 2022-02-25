import React from "react";

interface IVacancy {
    vacancy: string
}

const Vacancy = (props: IVacancy) => {
    const h3Style = {
        fontFamily: "Audiowide",
        color: "#FFF",
        display: "block",
        fontSize: "64px",
        "flex-direction": "column"
    }
    return <h3 style={h3Style}>{props.vacancy}</h3>
}
export default Vacancy