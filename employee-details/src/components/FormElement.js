import React from "react";

export default function FormElement() {
    var inputData = "Mayank";

    function getValue() {
        alert(inputData)
    }

    return (
        <div>
            <input type="text" value={inputData} />
            <input type="button" onClick={getValue} value="Click to Retrieve Input Value" />
        </div>
    )
}