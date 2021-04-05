package com.ssafy.util;

import org.apache.commons.lang3.time.DateFormatUtils;

import java.util.Calendar;
import java.util.Date;

public class DateFormat {

    public static String getWeekOfMonth(Date d) {
        String date = DateFormatUtils.format(d, "yyyy-MM-dd");
        Calendar calendar = Calendar.getInstance();
        String[] dates = date.split("-");
        int year = Integer.parseInt(dates[0]);
        int month = Integer.parseInt(dates[1]);
        int day = Integer.parseInt(dates[2]);
        calendar.set(year, month - 1, day);
        int week = calendar.get(Calendar.WEEK_OF_MONTH);
        return month + "월 " + week + "주차 (" + year + ")";
    }

}
