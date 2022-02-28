import React from "react";
import styled from "styled-components";


interface IButton {
    children: React.ReactNode,
    onClick: any
}

const StyledButton = styled.button`
    outline: none;
    border: 0;
    display: flex;
    background-color: transparent;
    :hover{
        text-shadow: 0px 0px 1px #000, 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffff00, 0 0 80px #ffff00, 0 0 90px #ffff00, 0 0 100px #ffff00, 0 0 150px #ffff00;
    }
`

const Button = (props: IButton) => {
    return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}

export default Button

