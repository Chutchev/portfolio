import React from "react";


const Description = () => {
    const descriptionStyle = {
        width: "70%",
        marginRight: "3%",
        fontSize: "24px",
        "text-transform": "uppercase",
        color: "#FFF",
        "text-align": "justify"
    }
    return (
        <div style={descriptionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </div>
    )
}

export default Description;