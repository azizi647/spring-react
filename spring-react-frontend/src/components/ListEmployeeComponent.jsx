import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';


class ListEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            employees: []
        }

        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount = () => {
        EmployeeService.getEmployees().then((res) => {
            this.setState({
                employees: res.data
            })
        });
    }

    addEmployee = (e) => {
        this.props.history.push('/add-employee');
    }
    
    viewEmployee = (employeeId) =>{
        this.props.history.push(`/view-employee/${employeeId}`);
    }

    deleteEmployee = (employeeId, event) => {
        
        EmployeeService.deleteEmployee(employeeId).then((res) => {
            this.setState({
                ...this.state,
                employees: this.state.employees.filter(employee => employee.id !== employeeId)
            });
        });
    }

    render() {
        const {employees} = this.state;
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-info mb-2" onClick={this.addEmployee.bind(this)}> + Add Employee</button>
                    
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Employee F.Name</th>
                                <th>Employee L.Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(
                                    employee => {
                                        return(
                                            <tr key={employee.id}>
                                                <td> { employee.id } </td>
                                                <td> { employee.firstName } </td>
                                                <td> { employee.lastName } </td>
                                                <td> { employee.emailId } </td>
                                                <td> 
                                                    <Link to={`update-employee/${employee.id}`} className="btn btn-primary">Edit</Link> 
                                                    <button onClick={this.deleteEmployee.bind(this, employee.id)} className="btn btn-danger ml-4">Delete</button>
                                                    <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-success ml-4">View</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default ListEmployeeComponent;