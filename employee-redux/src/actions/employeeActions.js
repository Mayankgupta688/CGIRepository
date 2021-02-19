export function setEmployeeData(employeeList) {
    debugger;
    return {
        type: "SET_STORE_DATA",
        payload: employeeList
    }
}

export function deleteEmployeeData(employeeId) {
    return {
        type: "DELETE_STORE_DATA",
        payload: employeeId
    }
}