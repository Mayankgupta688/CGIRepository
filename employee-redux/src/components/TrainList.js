import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/employeeActions";

function TrainsList(props) {
    debugger;
    return (
        <div>
            {props.trains.map((train) => {
                return (
                    <div><h1>Train Name: {train.name}</h1></div>
                )
            })}

            {props.trains.length === 0 && <h1>No Employees...</h1>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        trains: state.trains
    }
}
let TrainListComponent = connect(mapStateToProps, actions)(TrainsList);
export default TrainListComponent;

