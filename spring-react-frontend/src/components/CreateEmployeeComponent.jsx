import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }

        this.saveEmployee       = this.saveEmployee.bind(this);
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.resetInputData     = this.resetInputData.bind(this);
        this.cancelInputData    = this.cancelInputData.bind(this);
    }

    changeInputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveEmployee = (e) => {
        e.preventDefault();
        const {firstName, lastName, emailId} = this.state;

        const newEmployee = {
            firstName,
            lastName,
            emailId
        }
        
        EmployeeService.createEmployee(newEmployee).then(res => {
            this.props.history.push('/employees')
        })
    }

    resetInputData = (e) => {

        e.preventDefault();

        this.setState({
            firstName: "",
            lastName: "",
            emailId: ""
        })
    }

    cancelInputData = (e) =>{
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" placweholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeInputHandler} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" placweholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeInputHandler} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email</label>
                                        <input type="text" placweholder="Email" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeInputHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee.bind(this)}>Save</button>
                                    <button className="btn btn-warning ml-2" onClick={this.resetInputData.bind(this)}>Reset</button>
                                    <button className="btn btn-danger ml-2" onClick={this.cancelInputData.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateEmployeeComponent;