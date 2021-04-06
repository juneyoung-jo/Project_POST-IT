package com.ssafy.zuul.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import io.jsonwebtoken.*;
import org.apache.http.HttpHeaders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Component
public class TokenFilter extends ZuulFilter {

    private static final int FILTER_ORDER = 2;
    private static final boolean SHOULD_FILTER = true;
    private static final boolean IS_OAUTH2_REQUEST = false;
    private final Logger logger = LoggerFactory.getLogger(TokenFilter.class);

    private final FilterUtils filterUtils;

    public TokenFilter(FilterUtils filterUtils){
        this.filterUtils = filterUtils;
    }

//    @Value("${jwt.secret}")
//    String secret;

    @Override
    public Object run(){
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest req = ctx.getRequest();

        logger.info("=============TokenFilter start ==================");
        logger.info("Request Method : " + req.getMethod());
        logger.info("Reqeust URL : " + req.getRequestURL().toString());

        String authorizationHeader = req.getHeader(HttpHeaders.AUTHORIZATION);
        if(!validateToken(getJwtFromRequest(authorizationHeader))){
            ctx.setSendZuulResponse(false);
            ctx.setResponseBody("UnAuthorized");
            ctx.getResponse().setHeader("Content-Type", "text/plain;charset=UTF-8");
            ctx.setResponseStatusCode(HttpStatus.UNAUTHORIZED.value());
        }

        return null;
    }

    private String getJwtFromRequest(String token) {
        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            return token.substring(7);
        }
        return null;
    }

    public boolean validateToken(String token){

        try {
            Jwts.parser().setSigningKey("926D96C90030DD58429D2751AC1BDBBC").parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        }
        return false;
    }
    @Override
    public String filterType() {
        return FilterUtils.PRE_FILTER_TYPE;
    }

    @Override
    public int filterOrder() {
        return FILTER_ORDER;
    }

    @Override
    public boolean shouldFilter() {
        RequestContext ctx = RequestContext.getCurrentContext();
        if(ctx.getRequest().getRequestURI().contains("/api/auth/oauth2")){
            return IS_OAUTH2_REQUEST;
        }
        return SHOULD_FILTER;
    }

}
