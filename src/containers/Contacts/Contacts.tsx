import React from "react";
import Name from "../../components/Name/Name";
import Telegram from "../../components/Contact/Icons/Telegram";
import Contact from "../../components/Contact/Contact";
import Button from "../../components/Button";
import Link from "../../components/Menu/MenuLink";
import LinkedIn from "../../components/Contact/Icons/LinkedIn";
import Gmail from "../../components/Contact/Icons/Gmail";
import Instagram from "../../components/Contact/Icons/Instagram";

const Contacts = () => {
    const nameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        marginTop: "1%"
    }
    return (<div>
        <div className={"myName"} style={nameStyle}>
            <Name/>
        </div>
        <div className={"content"} style={{marginTop: "7%"}}>
            <Link href={"https://t.me/chutchev"} target={"_blanc"}><Contact icon={<Telegram />} text={"@Telegram"}/></Link>
            <Link href={""} target={"_blanc"}><Contact icon={<LinkedIn />} text={"linkedIn"}/></Link>
            <Link href={"mailto:ichutchev98@gmail.com?subject=Собеседование"}><Contact icon={<Gmail />} text={"email@gmail.com"}/></Link>
            <Link href={"https://instagram.com/ichutchev"} target={"_blanc"}><Contact icon={<Instagram />} text={"@instagram"}/></Link>
        </div>
    </div>)
}

export default Contacts