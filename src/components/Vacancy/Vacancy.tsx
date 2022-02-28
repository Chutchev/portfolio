import React from "react";
import styled from "styled-components";

interface IVacancy {
    vacancy: string
}

const HVacancy = styled.h3`
    font-famaly: Audiowide;
    color: #FFFFFF;
    display: block;
    font-size: 24px;
    text-transform: uppercase;
`

const Vacancy = (props: IVacancy) => {
    return <HVacancy>{props.vacancy}</HVacancy>

}
export default Vacancy