import React, { useState, useEffect } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

export const AddEmployee = () => {

  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState(0);
  const { id } = useParams();

  const [errors, setErrors] = useState({
    name:'',
    designation:'',
    email:'',
    salary:0
  });

  const navigator = useNavigate();

  useEffect(()=>{
    if(id){
      getEmployeeById(id).then(response => {
        setName(response.data.name);
        setDesignation(response.data.designation);
        setEmail(response.data.email);
        setSalary(response.data.salary);
      }).catch(error => {
        console.error(error);
      })
    }
  },[id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if(validateForm()){

      const employee = {name, designation, email, salary};
      console.log(employee);

      if(id){
        updateEmployee(id, employee).then((response) =>{
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        })

        }else{
          createEmployee(employee).then((response) =>{
            console.log(response.data);
            navigator('/employees');
          }).catch(error => {
            console.error(error);
          })
          }
        }
    
  }

  function validateForm(){
     let valid = true;

     const errorsCopy = {... errors};

     if(name.trim()){
      errorsCopy.name = '';
     }else{
      errorsCopy.name = 'Name is required';
      valid = false;
     }

     if(designation.trim()){
      errorsCopy.designation = '';
     }else{
      errorsCopy.designation = 'Designation is required';
      valid = false;
     }

     if(email.trim()){
      errorsCopy.email = '';
     }else{
      errorsCopy.email = 'Email is required';
      valid = false;
     }

     setErrors(errorsCopy);
     return valid;
  }

  function setTitle(){
    if(id)
      return <h2 className='text-center'>Update Employee</h2>
    else
      return <h2 className='text-center'>Add New Employee</h2>
  }

  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          {  
            setTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input 
                  type='text'
                  placeholder='Enter Employee Name'
                  name='name'
                  value={name}
                  className={`form-control ${ errors.name ? 'is-invalid' : '' }`}
                  onChange={(e) => setName(e.target.value)}>
                  </input>
                  { errors.name && <div className='invalid-feedback'>{ errors.name }</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Designation:</label>
                <input 
                  type='text'
                  placeholder='Enter Employee Designation'
                  name='name'
                  value={designation}
                  className={`form-control ${ errors.designation ? 'is-invalid' : '' }`}
                  onChange={(e) => setDesignation(e.target.value)}>
                  </input>
                  { errors.designation && <div className='invalid-feedback'>{ errors.designation }</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input 
                  type='email'
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className={`form-control ${ errors.email ? 'is-invalid' : '' }`}
                  onChange={(e) => setEmail(e.target.value)}>
                  </input>
                  { errors.email && <div className='invalid-feedback'>{ errors.email }</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Salary:</label>
                <input 
                  type='number'
                  placeholder='Enter Employee Salary'
                  name='salary'
                  value={salary}
                  className='form-control'
                  onChange={(e) => setSalary(e.target.value)}>
                  </input>
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

