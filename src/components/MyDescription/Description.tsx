import React from "react";
import styled, {keyframes} from "styled-components";


interface IDescription {
    text: string,
    show: boolean
}

const DescriptionAnimationStart = keyframes`
0% {
    transform: translateY(-100%);
}
100% {
    display: translateY(0px);
}
`
const DescriptionAnimationEnd = keyframes`
0% {
    transform: translateY(-100%);
}
100% {
    display: translateY(0px);
}
`

const StyledDecriptionDiv = styled.div`
        width: 73%; 
        margin-right: 3%;
        margin-left: 3%;
        overflow:hidden
`
const StyledDescriptionTextStart = styled.div`
        font-size: 24px;
        text-transform: uppercase;
        color: #FFF;
        text-align: justify;
        animation-name: ${DescriptionAnimationStart};
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-timing-function: easy-in-out;
`

const StyledDescriptionTextEnd = styled(StyledDescriptionTextStart)`
animation-name: ${DescriptionAnimationEnd};
`

const Description = (props: IDescription) => {
    const element = () => {
        if (props.show) {
            return (<StyledDecriptionDiv>
                <StyledDescriptionTextStart>{props.text}</StyledDescriptionTextStart>
            </StyledDecriptionDiv>)
        } else {

            return (
                <StyledDecriptionDiv>
                    <StyledDescriptionTextEnd>{props.text}</StyledDescriptionTextEnd>
                </StyledDecriptionDiv>
                )
        }
    }
    return element()
}

export default Description;