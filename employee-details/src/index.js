import React from "react";
import ReactDOM from "react-dom";

import {HigherOrderComponentOne, HigherOrderComponentTwo, HigherOrderComponentThree } from "./components/HigherOrderComponents";

debugger;
ReactDOM.render((
    <div>
        <HigherOrderComponentOne></HigherOrderComponentOne><hr/>
        <HigherOrderComponentTwo></HigherOrderComponentTwo><hr/>
        <HigherOrderComponentThree></HigherOrderComponentThree>
    </div>
), document.getElementById("root"))




