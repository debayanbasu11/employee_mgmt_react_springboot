package com.debayan.emp_mgmt_backend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.debayan.emp_mgmt_backend.dto.EmployeeDto;
import com.debayan.emp_mgmt_backend.entity.Employee;
import com.debayan.emp_mgmt_backend.exception.ResourceNotFoundException;
import com.debayan.emp_mgmt_backend.mapper.EmployeeMapper;
import com.debayan.emp_mgmt_backend.repository.EmployeeRepository;
import com.debayan.emp_mgmt_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

	private EmployeeRepository employeeRepository;
	
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee with given id : "+employeeId + "does not exist"));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> empList = employeeRepository.findAll();
		return empList.stream().map((emp) -> EmployeeMapper.mapToEmployeeDto(emp)).collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployeeDto) {
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(
				() -> new ResourceNotFoundException("Employee does not exist with the given id: "+employeeId)
		);
		
		employee.setName(updatedEmployeeDto.getName());
		employee.setEmail(updatedEmployeeDto.getEmail());
		employee.setDesignation(updatedEmployeeDto.getDesignation());
		employee.setSalary(updatedEmployeeDto.getSalary());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(
				() -> new ResourceNotFoundException("Employee does not exist with the given id: "+employeeId)
		);
		
		employeeRepository.deleteById(employeeId);
	}

}
