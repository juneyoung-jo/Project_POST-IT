package com.ssafy.zuul.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import io.jsonwebtoken.*;
import org.apache.http.HttpHeaders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;


import javax.servlet.http.HttpServletRequest;

public class TokenFilter extends ZuulFilter {

    private final Logger logger = LoggerFactory.getLogger(TokenFilter.class);

    @Value("${jwt.access.expiration}")
    private int access_expiration;

    @Value("${jwt.refresh.expiration}")
    private int refresh_expiration;

    @Value("${jwt.secret}")
    private String secret;

    @Override
    public Object run(){
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest req = ctx.getRequest();

        logger.debug("Request Method : " + req.getMethod());
        logger.debug("Reqeust URL : " + req.getRequestURL().toString());

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
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

}
