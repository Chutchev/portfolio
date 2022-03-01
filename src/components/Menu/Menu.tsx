import React, {useState} from "react";
import Link from "./MenuLink";

const Menu = ()=>{
    const menuStyle = {
        display: "flex",
        justifyContent: "center",
        flex: "0 0 auto"
    }
    return (
        <div className={"Menu"} style={menuStyle}>
            <Link href={"/"}>home</Link>
            <Link href={"/about"}>about</Link>
            <Link href={"/projects"}>projects</Link>
            <Link href={"/contacts"}>contacts</Link>
        </div>
    )
}

export default Menu