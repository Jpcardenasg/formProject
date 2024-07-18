package com.mycompany.userdataform.infrastructure.out;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mycompany.userdataform.domain.models.Customer;

@Repository
public interface UserRepository extends JpaRepository<Customer, Integer> {

}
