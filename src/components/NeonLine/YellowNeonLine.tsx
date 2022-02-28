import React from "react";
import styled, {keyframes} from "styled-components";

const neonAmination = keyframes`
    0% {
        box-shadow: 0px 0px 0px white;
    }
    10% {
        box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffff00, 0 0 80px #ffff00, 0 0 90px #ffff00, 0 0 100px #ffff00, 0 0 150px #ffff00;
    }
    20% {
        box-shadow: 0px 0px 0px white;
    }
    30% {
        box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffff00, 0 0 80px #ffff00, 0 0 90px #ffff00, 0 0 100px #ffff00, 0 0 150px #ffff00;
    }
    100% {
        box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffff00, 0 0 80px #ffff00, 0 0 90px #ffff00, 0 0 100px #ffff00, 0 0 150px #ffff00;
    }`
const Line = styled.div`
        border-radius: 2px;
        height: 4px;
        width: 100%;
        background-color: #FFF;
        animation-name: ${neonAmination};
        animation-duration: 1s;
        animation-iteration-count: infinite;
        `

const YellowNeonLine = () => {
    return (<Line/>)
}

export default YellowNeonLine