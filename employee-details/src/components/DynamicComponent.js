import React from "react";

export default class DynamicComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Anshul",
            age: 20,
            timer: 0,
            styleData: {
                h1Style: {
                    border: "1px solid grey",
                    padding: "5px",
                    color: "green"
                }, h2Style: {
                    border: "3px solid grey",
                    margin: "5px",
                    padding: "5px"
                }
            }
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

    updateStyle = () => {
        this.setState({
            ...this.state,
            styleData: {
                h1Style: {
                    border: "2px solid grey",
                    padding: "10px",
                    color: "grey"
                }, h2Style: {
                    border: "3px solid grey",
                    margin: "5px",
                    padding: "5px",
                    color: "blue"
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1 style={this.state.styleData.h1Style}>Welcome to React State Component {this.state.name}</h1>
                <h2 style={this.state.styleData.h2Style}>This is User with Age: {this.state.age}</h2>
                <h3>Timer Current Value is: {this.state.timer}</h3>
                <input type="button" value="Click to Update Timer" onClick={this.updateTimer} />
                <input type="button" value="Click to Update Style" onClick={this.updateStyle} />
            </div>
        )
    }
}