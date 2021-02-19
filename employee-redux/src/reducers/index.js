import { combineReducers } from "redux";

import employees from "./employeeDetailsReducer";
import trains from "./trainDetailsReducer";


const rootReducer = combineReducers({
    employees: employees,
    trains: trains
})

export default rootReducer;