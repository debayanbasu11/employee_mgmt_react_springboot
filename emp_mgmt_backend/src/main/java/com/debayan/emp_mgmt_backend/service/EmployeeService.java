package com.debayan.emp_mgmt_backend.service;

import java.util.List;

import com.debayan.emp_mgmt_backend.dto.EmployeeDto;

public interface EmployeeService {

	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployeeDto);
	
	void deleteEmployee(Long employeeId);
}
