import React from "react";

export default function IfElseComponent(props) {

    function renderConditionalData() {
        if(props.userage > 30) {
            return <h1>You are Allowed to Enter</h1>;
        } else {
            return <h1>User Not Allowed...</h1>;
        }
    }

    function renderConditionalDataForName() {
        if(props.username !== "Mayank") {
            return <h1>You are not an Admin</h1>;
        } else {
            return <h1>You are Admin</h1>;
        }
    }

    return (
        <div>
            {renderConditionalDataForName()}
            {renderConditionalData()}
        </div>
    );
}