package com.starter.response;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResponseCode {

    SUCCESS(200, "operation successfully"),
    ERROR(500, "operation failed"),
    USERNAME_REPEAT(1001, "用户名重复");
    // 相应状态码
    private Integer code;
    // 相应状态信息
    private String message;
}
