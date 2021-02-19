import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./components/App";
import AppListComponent from "./components/AppList";
import TrainListComponent from "./components/TrainList";
import TrainComponent from "./components/Trains";

import rootReducer from "./reducers/index";

import { createStore } from "redux";
import { Provider } from "react-redux";

var applicationStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={applicationStore}>
        <AppComponent></AppComponent>
        <AppListComponent></AppListComponent><hr/>
        <TrainComponent></TrainComponent>
        <TrainListComponent></TrainListComponent>
    </Provider>
), document.getElementById("root"));