package com.starter.exception;

import com.starter.response.ResponseCode;
import lombok.Data;

@Data
public class BussinessException extends RuntimeException {
    // 错误码
    private Integer code;
    // 错误信息
    private String message;
    public BussinessException(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public BussinessException(String message) {

        this.message = message;
    }

    public BussinessException(ResponseCode responseCode) {
        this.code = responseCode.getCode();
        this.message = responseCode.getMessage();
    }
}
