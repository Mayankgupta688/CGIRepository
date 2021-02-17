import React from "react";

export default function ReusableComponent(props) {
    return (
        <div>
            { props.userDetails != null && (
                <div>
                    <h1>Hello {props.userDetails.name}</h1>
                    <h2>Hello {props.userDetails.name}</h2>
                    <p>This is Random Paragraph....</p>
                    <h1>Hello {props.userDetails.name}</h1>
                    { props.userDetails.userage == null && <h2>No Age Available</h2> }
                    <p>This is Random Paragraph....</p>
                </div>
            )}
            
            { (props.username != null && props.userDetails == null) && <h1>Hello {props.username}</h1> }

            {props.userDetails != null && <h1>Hello {props.userDetails.age}</h1> }
            {props.userDetails == null && <h1>Hello {props.userage}</h1> }

            { (props.myArray != null && props.myArray.length > 0) && <h4>First Element of Array is {props.myArray[0]}</h4>}<hr/>
        </div> 
    )
}