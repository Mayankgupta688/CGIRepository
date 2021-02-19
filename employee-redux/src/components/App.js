import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/employeeActions";

function App(props) {

    function saveData() {
        debugger;
        props.setEmployeeData([{
            name: "Mayank"
        }, {
            name: "Anshul"
        }])
    }

    function saveOtherData() {
        props.setEmployeeData([{
            name: "Aniket"
        }, {
            name: "Meha"
        }])
    }

    debugger;
    return (
        <div>
            <h1>This is List of Employees</h1>
            <h2>Employee Length: {props.employees.length}</h2>
            <h2>Train Length: {props.trains.length}</h2>
            <input type="button" value="Get Employee List" onClick={saveData} />
            <input type="button" value="Save Other Employee List" onClick={saveOtherData} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        employees: state.employees,
        trains: state.trains
    }
}
let AppComponent = connect(mapStateToProps, actions)(App);
export default AppComponent;

