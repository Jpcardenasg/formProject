package com.mycompany.userdataform.infrastructure.in;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.userdataform.application.UserService;
import com.mycompany.userdataform.domain.models.Customer;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/saveUser")
    public ResponseEntity<Customer> saveUser(@RequestBody Customer user) {
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }

    @PutMapping("updateUser/{userId}")
    public ResponseEntity<Customer> updateUser(@PathVariable Integer userId, @RequestBody Customer user) {
        userService.updateUser(user, userId);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<Integer> deleteUser(@PathVariable Integer userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok(userId);
    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<Customer>> fetchUsersList() {
        return ResponseEntity.ok(userService.fetchUsersList());
    }

}
