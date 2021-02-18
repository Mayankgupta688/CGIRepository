import React from "react";

export default class TwoWayDataBinding extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Enter Name",
            userage: 12,
            userdesignation: "Enter Designation"
        }
    }

    updateText = (event) => {
        debugger;
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    getUpdatedValue = () => {
        alert(this.state.username);
        alert(this.state.userage);
        alert(this.state.userdesignation);
    }

    render() {
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.updateText} />
                <input name="userage" type="text" value={this.state.userage} onChange={this.updateText} />
                <input name="userdesignation" type="text" value={this.state.userdesignation} onChange={this.updateText} />

                <input type="button" value="Click to get Updated Value" onClick={this.getUpdatedValue} />
            </div>
        )
    }
}