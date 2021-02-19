import React from "react";
import Axios from "axios";

export default class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [], 
            isError: false,
            userMessage: ""
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                ...this.state,
                userMessage: "Application in Progress"
            });
        }, 2000);

        setTimeout(() => {
            var dataPromise = Axios.get("https://jsonplaceholder.typicode.com/users");
            dataPromise.then((response) => {
                    if(response.request.status === 200) {
                        this.setState({
                            employeeList: response.data,
                            isError: false,
                            userMessage: ""
                        })
                    }
                
                
            }, (response) => {
                this.setState({
                    ...this.state,
                    isError: true
                })
            })
        }, 5000)
    }

    componentWillUnmount() {

    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div>
                <h1>This is the List</h1><hr/>
                {this.state.isError === true && <h2>This Application cannot Access Data</h2>}
                {this.state.userMessage.length > 0 && <h2>{this.state.userMessage}</h2>}
                { this.state.employeeList.map((employee) => {
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
}