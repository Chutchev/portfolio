import React from "react";

const Menu = ()=>{
    const linkStyle = {
        fontSize: "24px",
        textDecoration: "none",
        color: "#FFF",
        marginRight: "93px",
        marginBottom: "29px"
    }
    const menuStyle = {
        marginTop: "20%",
    }
    return (
        <div className={"Menu"} style={menuStyle}>
            <a href={"/"} style={linkStyle}>HOME</a>
            <a href={"/about"} style={linkStyle}>ABOUT</a>
            <a href={"/projects"} style={linkStyle}>PROJECTS</a>
            <a href={"/contacts"} style={linkStyle}>CONTACTS</a>
        </div>
    )
}

export default Menu