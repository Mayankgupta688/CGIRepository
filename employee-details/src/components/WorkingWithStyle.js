import React from "react";
import "./styles/WorkingWithStyleData.css";

export default function WorkingWithStyle() {
    return (
        <div className="firstContainer" id="mainContainer">
            <h1 style={{"borderBottom": "1px solid green", "paddingTop": "40px"}}>This is React Header Component...</h1>
            <input type="text" id="firstInput" style={{"backgroundColor": "grey", "color": "green"}} />
            <input type="button" style={{"color": "red"}} value="Submit"  /> 
        </div>
    )
}