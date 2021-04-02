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


@Component
public class TrackingFilter extends ZuulFilter {
    //Pre Filter

    private static final int FILTER_ORDER = 1;
    private static final boolean SHOULD_FILTER = true;
    private static final Logger logger = LoggerFactory.getLogger(TrackingFilter.class);


    FilterUtils filterUtils;

    public TrackingFilter(FilterUtils filterUtils){
        this.filterUtils = filterUtils;
    }


    @Override
    public String filterType() {
        return FilterUtils.PRE_FILTER_TYPE;
    }

    @Override
    public int filterOrder() { // 필터 순서
        return FILTER_ORDER;
    }

    @Override
    public boolean shouldFilter() { // 필터활성화 여부
        return SHOULD_FILTER;
    }

    private boolean isCorrelationIdPresent(){ //Optional로 수정 예정
        if(filterUtils.getCorrelationId() != null){
            return true;
        }
        return false;
    }
    private String generateCorrelationId(){
        return java.util.UUID.randomUUID().toString();
    }

    @Override
    public Object run() throws ZuulException {
        // 서비스가 필터를 통과할때 실행되는 코드 , tmx-correlation-id 존재여부 확인, 없으면 생성
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest req = ctx.getRequest();
        logger.info(" ============== Pre Filter ==================");
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
//        if(isCorrelationIdPresent()){
//            logger.debug("tmx-correlation-id found in tracking filter: {}.", filterUtils.getCorrelationId());
//        }else{
//            filterUtils.setCorrelationId(generateCorrelationId());
//            logger.debug("tmx-correlation-id generated in tracking filter: {}.", filterUtils.getCorrelationId());
//        }
//
//        RequestContext ctx = RequestContext.getCurrentContext();
//        logger.debug("Processing incoming request for {}.", ctx.getRequest().getRequestURI());
        return null;
    }
}
