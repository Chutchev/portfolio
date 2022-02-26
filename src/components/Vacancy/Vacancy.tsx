import React from "react";

interface IVacancy {
    vacancy: string
}

const Vacancy = (props: IVacancy) => {
    const h3Style = {
        fontFamily: "Audiowide",
        color: "#FFF",
        display: "block",
        fontSize: "24px",
        "text-transform": "uppercase"
    }
    return <h3 style={h3Style}>{props.vacancy}</h3>
}
export default Vacancy