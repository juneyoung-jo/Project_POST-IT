package com.ssafy.authsvr.security.oauth2.user;


import java.util.Map;

public class NaverOAuth2UserInfo extends OAuth2UserInfo{

    public NaverOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return ((Map<String, String>)attributes.get("response")).get("id");
    }

    @Override
    public String getName() {
        return ((Map<String, String>)attributes.get("response")).get("name");
    }

    @Override
    public String getEmail() {
        return ((Map<String, String>)attributes.get("response")).get("email");
    }

    @Override
    public String getImageUrl() {
        return ((Map<String, String>)attributes.get("response")).get("profile_image");
    }
}
