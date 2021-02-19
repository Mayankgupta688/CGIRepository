import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/trainsActions";

function Trains(props) {

    function saveData() {
        props.setTrainData([{
            name: "Rajdhani"
        }, {
            name: "Katra"
        }])
    }

    function saveOtherData() {
        props.setTrainData([{
            name: "Goa"
        }, {
            name: "Xyz"
        }])
    }
    
    debugger;
    return (
        <div>
            <h1>This is List of Trains</h1>
            <h2>Employee Length: {props.trains.length}</h2>
            <input type="button" value="Get Trains List" onClick={saveData} />
            <input type="button" value="Save Other Trains List" onClick={saveOtherData} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        trains: state.trains
    }
}
let TrainComponent = connect(mapStateToProps, actions)(Trains);
export default TrainComponent;

