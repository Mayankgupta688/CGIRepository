import React from "react";
import ChildComponent from "./ChildComponent";

export default class ParentChildComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Mayank"
        }
    }

    updateName =(nameUpdated) => {
        debugger;
        this.setState({
            username: nameUpdated
        })
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The user Name is: {this.state.username}</h1>
                <ChildComponent username={this.state.username} updateName={this.updateName}></ChildComponent>
            </div>
        )
    }
}

