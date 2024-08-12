package com.debayan.emp_mgmt_backend.mapper;

import com.debayan.emp_mgmt_backend.dto.EmployeeDto;
import com.debayan.emp_mgmt_backend.entity.Employee;

public class EmployeeMapper {

	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getName(),
				employee.getDesignation(),
				employee.getEmail(),
				employee.getSalary());
	}
	
	public static Employee mapToEmployee(EmployeeDto employeeDto) {
		return new Employee(
				employeeDto.getId(),
				employeeDto.getName(),
				employeeDto.getDesignation(),
				employeeDto.getEmail(),
				employeeDto.getSalary());
	}
}
