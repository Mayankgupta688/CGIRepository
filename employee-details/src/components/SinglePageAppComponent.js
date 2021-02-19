import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Axios from "axios";

export default function MainApplicationPage() {
    return (
        <div>
            <BrowserRouter>
                <h1>This is the Main Component...</h1>

                <nav>
                    <Link style={{"paddingRight": "10px"}} to="/home">Home</Link>
                    <Link style={{"paddingRight": "10px"}} to="/about">Help</Link>
                    <Link style={{"paddingRight": "10px"}} to="/help">About</Link>
                    <Link style={{"paddingRight": "10px"}} to="/employee/1">Employee One</Link>
                    <Link style={{"paddingRight": "10px"}} to="/employee/2">Employee Two</Link>
                    <Link style={{"paddingRight": "10px"}} to="/employee/3">Employee Three</Link>
                </nav>
                
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route exact path="/home" component={HomeComponent} />
                        <Route exact path="/about" component={AboutComponent} />
                        <Route exact path="/help" component={HelpComponent} />
                        <Route exact path="/employee/:id" render={(props) => {
                            if(props.match.params.id > 10) {
                                return <EmployeeNotFound></EmployeeNotFound>
                            } else {
                                return <EmployeeComponent {...props}></EmployeeComponent>
                            }
                        }} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
                

                <h2>This is Always Consistent...</h2>

            </BrowserRouter>
        </div>
    )
}

function EmployeeNotFound() {
    return <h1>Employee Not Found....</h1>
}


function HomeComponent() {
    return <h1>This is Home Component</h1>
}

function HelpComponent() {
    return <h1>This is Help Component</h1>
}

function AboutComponent() {
    return <h1>This is About Component</h1>
}

function PageNotFound() {
    return <h1>Page Not Found...</h1>
}

function EmployeeComponent(props) {
    var [employeeDetails, setEmployeeDetails] = useState({});

    useEffect(() => {
        var promiseData = Axios.get("https://jsonplaceholder.typicode.com/users/" + props.match.params.id);
        
        promiseData.then((response) => {
            setEmployeeDetails(response.data)
        })
    }, [props.match.params.id]); 

    return (
        <div>
            <h1>This Is Employee Details</h1>
            <h2>User Name is: {employeeDetails.name}</h2>
            <h2>User Id is: {employeeDetails.id}</h2>
            <h3>You are Consistently Shown on each Employee Details</h3>
        </div>
    )
}