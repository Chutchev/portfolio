import React, {useState} from "react";
import Link from "./MenuLink";

const Menu = ()=>{
    const linkStyle = {
        fontSize: "24px",
        textDecoration: "none",
        color: "#FFF",
        marginRight: "93px",
        marginBottom: "29px",
    }
    const menuStyle = {
        display: "flex",
        justifyContent: "center"
    }
    return (
        <div className={"Menu"} style={menuStyle}>
            <Link href={"/"} text={"home"}/>
            <Link href={"/about"} text={"about"}/>
            <Link href={"/projects"} text={"projects"}/>
            <Link href={"/contacts"} text={"contacts"}/>
        </div>
    )
}

export default Menu