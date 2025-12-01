package com.starter.exception;

import com.starter.response.R;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExceptionHandler {
    @ExceptionHandler(value = Exception.class)
    public R handleException(Exception e) {
        return R.fail(e.getMessage());
    }

    @ExceptionHandler(value = BussinessException.class)
    public R handleBussinessException(BussinessException e) {
        return R.fail(e.getCode(),e.getMessage());
    }
}
