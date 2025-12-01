package com.starter.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@TableName("user")
@Schema(description = "用户信息实体")
public class User {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String no;
    private String name;
    private String password;
    private Integer age;
    private Integer sex;
    @Schema(description = "用户权限 0 超级管理员 1 管理员 2 普通用户")
    private Integer role_id;
    private String phone;
    @TableField("isValid")
    private String isValid;
}
