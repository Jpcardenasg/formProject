package com.mycompany.userdataform.application;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.userdataform.domain.models.Customer;
import com.mycompany.userdataform.infrastructure.out.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Customer saveUser(Customer user) {
        return userRepository.save(user);
    }

    @Override
    public Customer updateUser(Customer user, Integer userId) {

        Customer userToUpdate = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        userToUpdate.setName(user.getName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setEmail(user.getEmail());

        return userRepository.save(userToUpdate);
    }

    @Override
    public void deleteUser(Integer userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<Customer> fetchUsersList() {
        return userRepository.findAll();
    }

}