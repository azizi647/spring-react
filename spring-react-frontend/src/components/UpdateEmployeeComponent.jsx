import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: ""
        }


        this.updateEmployee = this.updateEmployee.bind(this);
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.cancelInputData = this.cancelInputData.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( (response) => {
            let employee = response.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId,
            });
        })
    }
    

    changeInputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateEmployee = (e) => {
        e.preventDefault();
        const { firstName, lastName, emailId } = this.state;

        const newEmployee = {
            firstName,
            lastName,
            emailId
        }

        EmployeeService.updateEmployee(newEmployee, this.state.id).then(res => {
            this.props.history.push('/employees')
        })
    }

    cancelInputData = (e) => {
        this.props.history.push('/employees')
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Employee</h3>
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

                                    <button className="btn btn-success" onClick={this.updateEmployee.bind(this)}>Update</button>
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


export default UpdateEmployeeComponent;