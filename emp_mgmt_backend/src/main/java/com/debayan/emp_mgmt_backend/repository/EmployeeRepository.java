package com.debayan.emp_mgmt_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.debayan.emp_mgmt_backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
