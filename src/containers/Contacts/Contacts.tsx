import React from "react";
import Name from "../../components/Name/Name";
import Telegram from "../../components/Contact/Icons/Telegram";
import Contact from "../../components/Contact/Contact";
import Button from "../../components/Button";
import Link from "../../components/Menu/MenuLink";
import LinkedIn from "../../components/Contact/Icons/LinkedIn";
import Gmail from "../../components/Contact/Icons/Gmail";
import Instagram from "../../components/Contact/Icons/Instagram";
import {keyframes} from "styled-components";
import styled from "styled-components";


const AnimationName = keyframes`
0% {
    transform: scaleX(0) scaleY(0);
}
100% {
    transform: scaleX(100%) scaleY(100%);
}
`
const ContactLine = styled.div`
display: flex; 
justify-content: space-around;
align-items: center;
margin-top: 7px;
`
const StyledContactsDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: column;
`
const NameDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 1%;
        animation: ${AnimationName} 1s 1 linear;
`
const StyledContact = styled.div`
    display: flex;
    margin-top: 7%;
    flex-direction: column;
`
const Contacts = () => {
    return (<StyledContactsDiv className={"CONTACTS PAGE"}>
        <StyledContact className={"content"}>
            <ContactLine>
                <Link href={"https://t.me/chutchev"} target={"_blanc"}><Contact icon={<Telegram/>}
                                                                                text={"@Telegram"}/></Link>
                <Link href={""} target={"_blanc"}><Contact icon={<LinkedIn/>} text={"linkedIn"}/></Link>
            </ContactLine>
            <NameDiv className={"myName"}>
                <Name/>
            </NameDiv>
            <ContactLine>
                <Link href={"mailto:ichutchev98@gmail.com?subject=Собеседование"}><Contact icon={<Gmail/>}
                                                                                           text={"email@gmail.com"}/></Link>
                <Link href={"https://instagram.com/ichutchev"} target={"_blanc"}><Contact icon={<Instagram/>}
                                                                                          text={"@instagram"}/></Link>
            </ContactLine>
        </StyledContact>
    </StyledContactsDiv>)
}

export default Contacts