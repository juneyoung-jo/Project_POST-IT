package com.ssafy.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        Info info = new Info().title("Demo API").version("v1")
                .description("Spring Boot를 이용한 Report-Server 웹 애플리케이션 API입니다.")
                .termsOfService("http://swagger.io/terms/")
//                .contact(new Contact().name("jini").url("https://blog.jiniworld.me/").email("jini@jiniworld.me"))
                .license(new License().name("Apache License Version 2.0").url("http://www.apache.org/licenses/LICENSE-2.0"));

        return new OpenAPI()
                .components(new Components())
                .info(info);
    }

}
