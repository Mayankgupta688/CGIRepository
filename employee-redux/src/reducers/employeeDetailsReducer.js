export default function employeeDetailsReducer(state=[], action) {
    
    if(action.type === "SET_STORE_DATA") {
        debugger;
        return action.payload;
    } else if(action.type === "DELETE_STORE_DATA") {
        debugger;
        return state.filter((employee) => {
            return employee.id !== action.payload;
        });
    }
    return state;
}