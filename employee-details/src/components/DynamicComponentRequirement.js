import React from "react";

export default function DynamicComponentRequirement() {
    var timer = 0;

    function updateTimer() {
        debugger;
        timer = timer + 1;
        console.log("Timer Value is " + timer);
    }

    return (
        <div>
            <h1>Timer Value is {timer}</h1>
            <input type="button" onClick={updateTimer} value="Increment Timer" />
        </div>
    )
}