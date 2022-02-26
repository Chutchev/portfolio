import React from "react";
import Menu from "../../components/Menu/Menu";

const Layout = (props: any) => {
    const layoutStyle = {
        display: "flex",
        "flex-direction": "column",
        height: "100vh",
        // flexGrow: 2
    }
    return (
        <div className={"Layout"} style={layoutStyle}>
            {props.children}
            <Menu />
        </div>
    )
}

export default Layout