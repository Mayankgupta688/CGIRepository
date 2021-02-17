import React from "react";

export default class DynamicComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Anshul",
            age: 20,
            timer: 0
        }

        setInterval(() => {
            this.setState({
                ...this.state,
                timer: this.state.timer + 1
            })
        }, 1000);
    }

    getTimer = () => {
        return this.state.timer;
    }

    updateTimer = () => {
        this.setState({
            ...this.state,
            timer: this.getTimer() + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to React State Component {this.state.name}</h1>
                <h2>This is User with Age: {this.state.age}</h2>
                <h3>Timer Current Value is: {this.state.timer}</h3>
                <input type="button" value="Click to Update Timer" onClick={this.updateTimer} />
            </div>
        )
    }
}