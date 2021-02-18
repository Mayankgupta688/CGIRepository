import React from "react";

function higherOrderFunction(WrapperComponents) {
    return class EmployeeDetails extends React.Component {
        constructor() {
            super();
            this.state = {
                data: {
                    name: "Mayank",
                    age: 10,
                    designation: "developer",
                    salary: 10,
                    bonus: 1,
                    someOtherData: "Random",
                    attendence: "10%"
                }
            }
        }

        displayAlert() {
            alert("Hello All");
        }

        render() {
            return (
                <div>
                    <h1>User Name is: {this.state.data.name}</h1>
                    <h2>User Age is: {this.state.data.age}</h2>
                    <h3>Other Details are mentioned below:</h3>
        
                    <WrapperComponents extracomponent={Extracomponent} agedata="12" {...this.state.data} displayAlert={this.displayAlert}></WrapperComponents>
                </div>
            )
        }
        
    }
}

function Extracomponent() {
    return <h1>This is Extra...</h1>
}

function ComponentOne(props) {
    debugger;
    return (
        <div>
            <props.extracomponent></props.extracomponent>
            <h2>User Designation is: {props.designation}</h2>
            <input type="button" onClick={props.displayAlert} value="Display Alert" />
        </div>
    )
}

function ComponentTwo(props) {
    return (
        <div>
            <h2>User Salary is: {props.salary}</h2>
            <h2>User Bonus is: {props.bonus}</h2>
            <input type="button" onClick={props.displayAlert} value="Display Alert" />
        </div>
    )
}

function ComponentThree(props) {
    return (
        <div>
            <h2>User Other Data is: {props.someOtherData}</h2>
            <h2>User Attendence is: {props.attendence}</h2>
            <input type="button" onClick={props.displayAlert} value="Display Alert" />
        </div>
    )
}


export var HigherOrderComponentOne = higherOrderFunction(ComponentOne)
export var HigherOrderComponentTwo = higherOrderFunction(ComponentTwo)
export var HigherOrderComponentThree = higherOrderFunction(ComponentThree)