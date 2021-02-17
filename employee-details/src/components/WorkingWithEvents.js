import React from "react";

export default function WorkingWithEvents() {

    function clickFunction(name, age, id) {
        debugger;
    }

    function changeTriggered(event) {
        debugger;
    }

    return (
        <div>
            <h1>This is Event Component</h1>

            <input type="text" onChange={changeTriggered} />
            <input id="one" type="button" value="Click for Alert" onClick={
                function(event) {
                    debugger;
                    clickFunction("Mayank", 10, event.target.id)
                }
            }/>
            <input id="two" type="button" value="Click for Alert" onClick={clickFunction}  />
       
        </div>
    )
}