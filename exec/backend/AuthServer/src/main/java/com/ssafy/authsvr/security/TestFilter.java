package com.ssafy.authsvr.security;

import com.ssafy.authsvr.controller.UserController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

public class TestFilter extends OncePerRequestFilter {
    private static final Logger logger = LoggerFactory.getLogger(TestFilter.class);
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Enumeration<String> enum_header = request.getHeaderNames();
        while(enum_header.hasMoreElements()){
            String headerName = enum_header.nextElement();
            logger.info("Request Header : " + headerName + request.getHeader(headerName));
        }
        filterChain.doFilter(request, response);
    }
}
