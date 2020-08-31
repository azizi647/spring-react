import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    
    // get all employees from the server
    getEmployees = async() => {
        const response = await axios.get(EMPLOYEE_BASE_URL);
        return response;
    }

    // create employee pass employee object
    createEmployee = async(employee) => {
        const response = await axios.post(EMPLOYEE_BASE_URL, employee);
        return response;
    }

    // get data of employee by id 
    getEmployeeById = async(employeeID) => {
        const response = await axios.get(EMPLOYEE_BASE_URL + '/' + employeeID);
        return response;
    }

    // update employe by id
    updateEmployee = async (employee, employeeID) => {
        const response = await axios.put(EMPLOYEE_BASE_URL + '/' + employeeID, employee);
        return response;
    }

    // delete employee by id
    deleteEmployee = async(employeeID) => {
        return await axios.delete(EMPLOYEE_BASE_URL + '/' + employeeID);
    }

}


export default new EmployeeService()