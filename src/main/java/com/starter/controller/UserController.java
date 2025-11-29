package com.starter.controller;

import com.starter.entity.User;
import com.starter.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/user/add")
    public Integer add(@RequestBody User user) {
        userService.save(user);
        return user.getId();
    }
    @GetMapping("/user/list")
    public List<User> list() {
        return userService.list();
    }
    @PostMapping("/user/update")
    public Integer update(@RequestBody User user) {
        userService.updateById(user);
        return user.getId();
    }
    @PostMapping("/user/del")
    public String delete(@RequestParam Integer id) {
        userService.removeById(id);
        return "success";
    }
}
