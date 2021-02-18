import React from "react";

var FamilyContext = React.createContext({});
var ChildContext = React.createContext({});

export default class GrandParent extends React.Component {
    constructor() {
        super();
        this.state = {
            village: "xyz",
            language: "hindi",
            surName: "Gupta"
        }
    }

    updateLanguage = (event) => {
        this.setState({
            ...this.state,
            language: event.target.value
        })
    }

    updateData = (newVillageName) => {
        this.setState({
            ...this.state,
            village: "Delhi"
        })
    }

    render() {

        var data = {
            nativeDetails: this.state,
            updateData: this.updateData,
            updateLanguage: this.updateLanguage
        }
        return (
            <div>
                <FamilyContext.Provider value={data}>
                    <h1>Languaget: {this.state.language}</h1>
                    <h1>Village details from Grand Parent: {this.state.village}</h1>
                    <Parents {...this.state}></Parents>
                </FamilyContext.Provider>
            </div>
        )
    }
}

function Parents() {
    debugger;
    return (
        <div>
            <h2>This is Parent Component</h2>
            <h3>We dont know the Village Details</h3>
            <Children></Children>
        </div>
    )
}

function Children() {
    debugger;
    return (
        <div>
            <h2>This is Children Component</h2>

            <FamilyContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h2>This is Grand Children Component</h2>
                            <h3>Village Name: {context.nativeDetails.village}</h3>
                            <h3>Native Language: {context.nativeDetails.language}</h3>
                            <input type="text" onChange={context.updateLanguage} value={context.language} />
                        </div>
                    )
                }
            }
            </FamilyContext.Consumer> 
            <GrandChildren></GrandChildren>
        </div>
    )
}

function GrandChildren() {
    var name = "Mayank"
    return (
        <div>
            <FamilyContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h2>This is Grand Children Component</h2>
                            <h3>Village Name: {context.nativeDetails.village}</h3>
                            <h3>Native Language: {context.nativeDetails.language}</h3>
                            <input type="button" onClick={() => context.updateData("Delhi")} value="Update Village" />
                        </div>
                    )
                }
            }
            </FamilyContext.Consumer> 

            <ChildContext.Provider value={name}>
                <h1>Village details from Grand Parent: Random</h1>
                <GrandGrandChildren></GrandGrandChildren>
            </ChildContext.Provider>
        </div>
         
    )
}

function GrandGrandChildren() {
    return (
        <div>
            <ChildContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h1>Grand Grand Child Data {context}</h1>
                        </div>
                    )
                }
            }
            </ChildContext.Consumer>

            <FamilyContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h2>This is Grand Grand Children Component</h2>
                            <h3>Village Name: {context.nativeDetails.village}</h3>
                            <h3>Native Language: {context.nativeDetails.language}</h3>
                        </div>
                    )
                }
            }
            </FamilyContext.Consumer> 
        </div>
    )
}