import React from "react";
import styled from "styled-components";
import mp3Sound from "../../static/sound/menu_sword.mp3"


interface ILink {
    href: string,
    children: React.ReactNode,
    target?: string
}

const ALink = styled.a`
        font-size: 24px;
        text-decoration: none;
        color: #FFF;
        margin-right: 93px;
        margin-bottom: 29px;
        text-transform: uppercase;
        :hover {
            text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffff00, 0 0 80px #ffff00, 0 0 90px #ffff00, 0 0 100px #ffff00, 0 0 150px #ffff00;
        {
`
const Link = (props:ILink) => {
    const target = props.target? props.target: "_self"
    let audio = new Audio(mp3Sound);
    audio.volume = 0.5
    const playAudio = ()=>
    {
        audio.play()
    }
    return <ALink href={props.href} target={target} onMouseEnter={()=>{playAudio()}}>{props.children}</ALink>
}

export default Link