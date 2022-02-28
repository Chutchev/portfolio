import React from "react";
import styled from "styled-components";
interface IContact {
    icon: React.ReactNode,
    text: string,
}

const Image = styled.div`
    filter: invert(100%)
`

const Text = styled.div`
    font-size: 72px;
    color: #FFF;
    margin-left: 11px;
`
const Contact = (props: IContact) => {
    const styleContact = {
        display: "flex",
        marginLeft: "7%",
    }
    return (<div style={styleContact}>
        <Image className={"image"}>{props.icon}</Image>
        <Text className={"contact"}>{props.text}</Text>
    </div>)
}

export default Contact;