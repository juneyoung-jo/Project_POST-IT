package com.ssafy.payload;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public abstract class ApiResponse<T> {

    @NonNull
    private T data;
    @NonNull
    private String msg;

}
