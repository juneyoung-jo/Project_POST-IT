package com.ssafy.authsvr.util;

import java.util.Random;

public class RandomStringGenerator {

    public static final String[] prefix = {
            "발칙한 ", "용감한 ", "소심한 ", "용맹한 ", "얌전한 ", "레전드 "
    };

    public static final String[] name = {
            "사자", "포도", "호랭이", "토끼", "여우", "감자", "고구마", "콩나물", "소고기"
    };

    public static String generateName(){
        // random prefix
        Random rnd_prefix = new Random();
        int randomPrefix = Integer.valueOf(rnd_prefix.nextInt(prefix.length));

        // random name
        Random rnd_name = new Random();
        int randomValue = Integer.valueOf(rnd_name.nextInt(name.length));

        return prefix[randomPrefix] + name[randomValue];
    }
}
