var data = {
    name: "Mayank",
    age: 10,
    designation: "developer",
    salary: 10,
    bonus: 1,
    someOtherData: "Random",
    attendence: "10%"
}

function higherOrderFunction(WrapperComponents) {
    return function() {
        return (
            <div>
                <h1>User Name is: {data.name}</h1>
                <h2>User Age is: {data.age}</h2>
                <h3>Other Details are mentioned below:</h3>
    
                <WrapperComponents></WrapperComponents>
            </div>
        )
    }
}

function ComponentOne() {
    return (
        <div>
            <h2>User Designation is: {data.designation}</h2>
        </div>
    )
}

function ComponentTwo() {
    return (
        <div>
            <h2>User Salary is: {data.salary}</h2>
            <h2>User Bonus is: {data.bonus}</h2>
        </div>
    )
}

function ComponentThree() {
    return (
        <div>
            <h2>User Other Data is: {data.someOtherData}</h2>
            <h2>User Attendence is: {data.attendence}</h2>
        </div>
    )
}


export var HigherOrderComponentOne = higherOrderFunction(ComponentOne)
export var HigherOrderComponentTwo = higherOrderFunction(ComponentTwo)
export var HigherOrderComponentThree = higherOrderFunction(ComponentThree)