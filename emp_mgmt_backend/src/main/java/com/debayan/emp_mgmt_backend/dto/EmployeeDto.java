package com.debayan.emp_mgmt_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {

	private Long id;
	private String name;
	private String designation;
	private String email;
	private Double salary;
}
