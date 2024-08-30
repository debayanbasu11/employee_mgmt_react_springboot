import React, { useContext } from 'react'; 
import { EmployeeContext } from '../Contexts/EmployeeContext';
import { useNavigate } from 'react-router-dom';

export const PreviewEmployee = () => {

    const navigator = useNavigate();

    const employeeDetails = useContext(EmployeeContext);
    
    const back = () => {
        navigator('/update-employee/'+employeeDetails.id);
    }

    return (
        <div className='container'>
          <br/>
          <div className='row'>
            <div className='card col-md-6 offset-md-3'>
              
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Name:</label>
                    <input 
                      type='text'
                      placeholder='Enter Employee Name'
                      name='name'
                      value={employeeDetails.name}
                      readOnly
                      className='non-editable form-control'
                      >
                      </input>
                     
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Designation:</label>
                    <input 
                      type='text'
                      placeholder='Enter Employee Designation'
                      name='name'
                      value={employeeDetails.designation}
                      readOnly
                      className='non-editable form-control'
                      >
                      </input>
                     
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Email:</label>
                    <input 
                      type='email'
                      placeholder='Enter Employee Email'
                      name='email'
                      value={employeeDetails.email}
                      readOnly
                      className='non-editable form-control'
                      >
                      </input>
                      
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Salary:</label>
                    <input 
                      type='number'
                      placeholder='Enter Employee Salary'
                      name='salary'
                      value={employeeDetails.salary}
                      readOnly
                      className='non-editable form-control'
                      >
                      </input>
                  </div>
    
                  <button className='btn btn-success' onClick={back}>Back</button>
                  
    
                </form>
              </div>
            </div>
          </div>
        </div>
        )
}