package com.ssafy.zuul.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private final Auth auth = new Auth();

    public static class Auth {
        private String tokenSecret;
        private long tokenExpirationMsec;
        private long refreshTokenExpirationMesc;

        public String getTokenSecret() {
            return tokenSecret;
        }

        public void setTokenSecret(String tokenSecret) {
            this.tokenSecret = tokenSecret;
        }

        public long getTokenExpirationMsec() {
            return tokenExpirationMsec;
        }

        public long getRefreshTokenExpirationMesc() {
            return refreshTokenExpirationMesc;
        }

        public void setTokenExpirationMsec(long tokenExpirationMsec) {
            this.tokenExpirationMsec = tokenExpirationMsec;
        }

        public void setRefreshTokenExpirationMesc(long refreshTokenExpirationMesc) {
            this.refreshTokenExpirationMesc = refreshTokenExpirationMesc;
        }
    }

    public Auth getAuth() {
        return auth;
    }
}
