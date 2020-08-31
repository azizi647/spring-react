import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployee extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({
                employee: res.data
            })
        });
    }
    

    render() {
        const {firstName, lastName, emailId} = this.state.employee;
        return (
            <div>
                <br/>
                <div className="card col-md-6 offset-3">
                    <h3 className="text-center">View Employe Detail</h3>
                    <div className="card-body">
                        <div className="row">
                            <label htmlFor="firstName">First Name: </label>
                            <div> {firstName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="lasttName">Last Name: </label>
                            <div> {lastName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="emailId">Email: </label>
                            <div> {emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
