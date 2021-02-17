import React from "react";

// Working with Interpolation

export default function AddingDataBinding() {

    var name = "Mayank";
    var age = 20;
    var designation = "Developers";

    function returnData() {
        return "Ankit Gupta";
    }

    function returnAge() {
        return "20 Years"
    }

    function getDetails() {
        return "User Name is: " + name + " User Age is: " + age;
    }

    function randomNumberGenerator() {
        return Math.random();
    }

    return (
        <div>
            <h1>Hello {returnData()}, Welcome to react session</h1>
            <h2>Joiner's Designation: {designation}</h2>
            <h3>Joiner's Age: {returnAge()}</h3>
            {getDetails()}<br/><br/>
            <b>Random number is: {randomNumberGenerator()}</b><br/><br/>
            {1 + 2 + "Mayank" + " Gupta"}
        </div>
    )
}