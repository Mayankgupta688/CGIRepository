import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/employeeActions";

function AppList(props) {
    debugger;
    return (
        <div>
            {props.employees.map((emp) => {
                return (
                    <div><h1>Employee Name: {emp.name}</h1></div>
                )
            })}

            {props.employees.length === 0 && <h1>No Trains...</h1>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
let AppListComponent = connect(mapStateToProps, actions)(AppList);
export default AppListComponent;

