import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function WorkingWithHooks() {

    var [displayName, setDisplayName] = useState("");

    var [counter, setCounter] = useState(0);

    var [employeeList, setEmployeeList] = useState([]);

    var [arrayData, setArrayData] = useState([1, 2, 3, 4]);

    var [userDetails, setUserDetails] = useState({
        name: "Mayank",
        age: 20,
        designation: "Developer"
    });

    var dataCounter = 1000;

    useEffect(() => {
        if(counter > 0) {
            var dataPromise = Axios.get("https://jsonplaceholder.typicode.com/users/" + counter);
            dataPromise.then((response) => {
                setDisplayName(response.data.name);
            })
        }
    }, [counter]);

    useEffect(() => {
        var dataPromise = Axios.get("https://jsonplaceholder.typicode.com/users");
        dataPromise.then((response) => {
                if(response.request.status === 200) {
                    setEmployeeList(response.data)
                }
        })
    }, []);

    function updateCounter() {
        setCounter(counter + 1)
    }

    function updateDataCounter() {
        dataCounter = dataCounter + 1;
        alert(dataCounter)
    }

    function updateArray() {
        setArrayData([1, 2, 3, 4, 5, 6])
    }

    function updateName() {
        setUserDetails({
            ...userDetails,
            name: "Anshul"
        })
    } 

    return (
        <div>

            <div style={{"border": "1px solid red", "padding": "20px"}}>
                <h1>Selected Name: {displayName}</h1>
                <input type="button" value="Get Current Counter Employee" onClick={updateCounter} />
            </div>

            <h1>Hello World...</h1>
            <h2>The counter value is: {counter}</h2>
            <h2>The counter Data value is: {dataCounter}</h2>

            <h2>The Name is: {userDetails.name}</h2>
            <h2>The Age is: {userDetails.age}</h2>
            <h2>The Designation is: {userDetails.designation}</h2>

            <h4>Length of Array: {arrayData.length}</h4>
            

            <input type="button" onClick={updateCounter} value="Update Counter" />
            <input type="button" onClick={updateDataCounter} value="Update Data Counter" />
            <input type="button" onClick={updateName} value="Update Name" />
            <input type="button" onClick={updateArray} value="Update Array" />

            { employeeList.map((employee) => {
                return (
                    <div style={{"borderBottom": "1px solid grey"}}>
                        <h1>Employee Name is: {employee.name}</h1>
                        <h2>Employee Id is: {employee.id}</h2>
                        <h3>Employee Email is: {employee.email}</h3>
                    </div>
                )
            })}
        </div>
    )
}