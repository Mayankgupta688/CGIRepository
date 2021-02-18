import React from "react";

export default function ChildComponent(props) {
    debugger;
    function updateParent() {
        debugger;
        props.updateName("Anshul Gupta")
    }
    
    return (
        <div>
            <h3>This is Name from Child Component: {props.username}</h3>
            <input type="button" value="Update Parent" onClick={updateParent} />
        </div>
        
    )
}