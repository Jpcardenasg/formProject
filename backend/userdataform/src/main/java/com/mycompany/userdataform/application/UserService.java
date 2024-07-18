package com.mycompany.userdataform.application;

import java.util.List;

import com.mycompany.userdataform.domain.models.Customer;

public interface UserService {

    Customer saveUser(Customer user);

    Customer updateUser(Customer user, Integer userId);

    void deleteUser(Integer userId);

    List<Customer> fetchUsersList();

}
