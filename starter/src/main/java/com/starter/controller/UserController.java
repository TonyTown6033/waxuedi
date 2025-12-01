package com.starter.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.starter.entity.User;
import com.starter.exception.BussinessException;
import com.starter.response.R;
import com.starter.response.ResponseCode;
import com.starter.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Tag(name = "用户信息管理")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/user/add")
    @Operation(summary = "增加用户")
    public R add(@RequestBody User user) {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getName, user.getName());
        long count = userService.count(queryWrapper);
        if (count > 0) {
            throw new BussinessException(ResponseCode.USERNAME_REPEAT);
        }
        userService.save(user);
        return R.success ();
    }

    @PostMapping("/user/list")
    @Operation(summary = "获取用户列表")
    public R<PageInfo<User>> list(@RequestBody User user, @RequestParam Integer page, @RequestParam Integer size) {
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.like(user.getName()!=null, User::getName, user.getName());
        wrapper.like(user.getPhone()!=null, User::getPhone, user.getPhone());

        PageHelper.startPage(page, size);
        List<User> list = userService.list(wrapper);
        PageInfo<User> pageInfo = new PageInfo(list);
        return R.data(pageInfo);
    }
    @PostMapping("/user/update")
    @Operation(summary = "更新用户")
    public R update(@RequestBody User user) {
        userService.updateById(user);
        return R.success();
    }
    @PostMapping("/user/del")
    @Operation(summary = "删除用户")
    public R delete(@RequestParam Integer id) {
        userService.removeById(id);
        return R.success();
    }
}
