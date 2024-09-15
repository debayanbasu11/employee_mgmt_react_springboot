import { useState, useEffect } from 'react'; 
//import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
//import { deleteEmployee, listEmployees, updateEmployee } from '../services/EmployeeService';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useTitle } from '../hooks/useTitle';
import Modal from '../components/Modal';
//import { AddEmployee } from './AddEmployee';
//import { updateEmployee } from '../services/EmployeeService';
export default function ListEmployees({title, render}){

    useTitle(title);
    const renderProp = render;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

   //const { data: employees } = useFetch("http://localhost:8080/api/employees");

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    },[]);

    const getAllEmployees = () =>{
        listEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

   const removeEmployee = (id) => {
    deleteEmployee(id).then(response => {
        getAllEmployees();
    }).catch(error => {
        console.error(error);
    })
   }

  return (
    <div className='container'>
        <h2 className='text-center'>
            List of Employees
        </h2>

        <Link to="/add-employee" className='btn btn-success mb-2'>Add Employee</Link>

        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email ID</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees!=null &&
                    employees.map(
                        employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.email}</td>
                                <td>{employee.salary}</td>
                                <td>
                                <Link to={`/update-employee/${employee.id}`} className='btn btn-warning'>Update</Link>
                                {/*<button href='#' onClick={updateEmployee} className='btn btn-warning'>Update</button> */}
                                <button href='#' onClick={() => removeEmployee(employee.id)} className='btn btn-danger' style={{marginLeft: '10px'}}>Delete</button>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>

        <Link to="/hoc" className='btn btn-success mb-2'>Higher Order Component</Link>
        &nbsp;<Link to="/render-props" className='btn btn-success mb-2'>Render Props</Link>
        {renderProp}
        &nbsp;
        <button  className='btn btn-success mb-2' onClick={openModal}>Open React Portal Modal</button>


        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Modal Title</h2>
            <p>This is the content inside the modal. It is rendered using React Portal!</p>
        </Modal>
      
    </div>
  )
}
