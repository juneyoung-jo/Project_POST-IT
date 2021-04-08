package com.ssafy.authsvr.security;

import com.ssafy.authsvr.config.AppProperties;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenProvider {

    private static final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

    private AppProperties appProperties;

    public TokenProvider(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    public String createToken(String userId, int type){ // 토큰 생성
        Date now = new Date();
        Date expiryDate;
        if(type == 0)
            expiryDate = new Date(now.getTime() + appProperties.getAuth().getTokenExpirationMsec());
        else
            expiryDate = new Date(now.getTime() + appProperties.getAuth().getRefreshTokenExpirationMesc());

        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, appProperties.getAuth().getTokenSecret())
                .compact();
    }

    public String createToken(Authentication authentication, int type) { // 토큰 생성
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        return createToken(userPrincipal.getId(), type);
    }

    public String getUserIdFromToken(String token) { // 토큰에서 UserId 가져옴
        return Jwts.parser()
                .setSigningKey(appProperties.getAuth().getTokenSecret())
                .parseClaimsJws(token)
                .getBody().getSubject();
    }

    public boolean validateForExpiredToken(String authToken) throws Exception{

        Claims claims = Jwts.parser()
                .setSigningKey(appProperties.getAuth().getTokenSecret())
                .parseClaimsJws(authToken)
                .getBody();
        return true;

    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(appProperties.getAuth().getTokenSecret()).parseClaimsJws(authToken);
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

}
