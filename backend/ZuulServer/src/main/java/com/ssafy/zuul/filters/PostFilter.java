package com.ssafy.zuul.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.apache.http.HttpHeaders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Component
public class PostFilter extends ZuulFilter {
    private static final Logger logger = LoggerFactory.getLogger(TrackingFilter.class);
    FilterUtils filterUtils;

    public PostFilter(FilterUtils filterUtils){
        this.filterUtils = filterUtils;
    }

    @Override
    public String filterType() {
        return FilterUtils.POST_FILTER_TYPE;
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() throws ZuulException {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest req = ctx.getRequest();
        logger.info(" ============== POST Filter ==================");
        logger.info("Request Method : " + req.getMethod());
        logger.info("Request URL : " + req.getRequestURL().toString());
//        Enumeration<String> enum_header = req.getHeaderNames();
//        while(enum_header.hasMoreElements()){
//            String headerName = enum_header.nextElement();
//            logger.info("Request Header : " + headerName + req.getHeader(headerName));
//        }
        try {
            for (Cookie cookie : req.getCookies()) {
                logger.info("Request Cookie : " + cookie.getName() + " " + cookie.getValue());
            }
        }catch(Exception e){
            logger.info(e.toString());
        }


        String authHeader = req.getHeader(HttpHeaders.AUTHORIZATION);
        logger.info("Request auth : " + authHeader);
        return null;
    }
}
