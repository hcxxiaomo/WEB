package com.xpf.database.device;


import java.io.IOException;
import java.io.PrintWriter;



import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.xpf.database.medicine.Med;
import com.xpf.database.medicine.UpdateMed;

import java.util.*;
import java.util.regex.*;
import java.io.*;

public class AddDev extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		
		String xpf_device_number = "";
		
		String xpf_dev_name = request.getParameter("xpf_dev_name").toString();
		xpf_dev_name = new String(xpf_dev_name.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_number = request.getParameter("xpf_dev_number").toString();
		xpf_dev_number = new String(xpf_dev_number.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_property = request.getParameter("xpf_dev_property").toString();
		xpf_dev_property = new String(xpf_dev_property.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_begintime = request.getParameter("xpf_dev_begintime").toString();
		xpf_dev_begintime = new String(xpf_dev_begintime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_endtime = request.getParameter("xpf_dev_endtime").toString();
		xpf_dev_endtime = new String(xpf_dev_endtime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_buytime = request.getParameter("xpf_dev_buytime").toString();
		xpf_dev_buytime = new String(xpf_dev_buytime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_dutypeople = request.getParameter("xpf_dev_dutypeople").toString();
		xpf_dev_dutypeople = new String(xpf_dev_dutypeople.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_buymount2 = request.getParameter("xpf_dev_buymount").toString();
		xpf_dev_buymount2 = new String(xpf_dev_buymount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_nowmount2 = request.getParameter("xpf_dev_nowmount").toString();
		xpf_dev_nowmount2 = new String(xpf_dev_nowmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_lendmount2 = request.getParameter("xpf_dev_lendmount").toString();
		xpf_dev_lendmount2 = new String(xpf_dev_lendmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_inmount2 = request.getParameter("xpf_dev_inmount").toString();
		xpf_dev_inmount2 = new String(xpf_dev_inmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_mountdanwei = request.getParameter("xpf_dev_mountdanwei").toString();
		xpf_dev_mountdanwei = new String(xpf_dev_mountdanwei.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_location = request.getParameter("xpf_dev_location").toString();
		xpf_dev_location = new String(xpf_dev_location.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_belongto = request.getParameter("xpf_dev_belongto").toString();
		xpf_dev_belongto = new String(xpf_dev_belongto.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_dev_other = request.getParameter("xpf_dev_other").toString();
		xpf_dev_other = new String(xpf_dev_other.getBytes("iso-8859-1"), "utf-8");
		
		int xpf_dev_buymount = Integer.parseInt(xpf_dev_buymount2);
		int xpf_dev_nowmount = Integer.parseInt(xpf_dev_nowmount2);
		int xpf_dev_lendmount = Integer.parseInt(xpf_dev_lendmount2);
		int xpf_dev_inmount = Integer.parseInt(xpf_dev_inmount2);
		
		String xpf_dev_time = null;
		
		
		
		int log_year,log_month,log_day,log_hour,log_minute; 
		 Calendar log_c = Calendar.getInstance(); 
		 log_year = log_c.get(Calendar.YEAR); //骞�
		 log_month = log_c.get(Calendar.MONTH) + 1; //鏈�
		 log_day = log_c.get(Calendar.DAY_OF_MONTH); //鏃�
		 log_hour = log_c.get(Calendar.HOUR_OF_DAY); //鏃讹紙HOUR鈥斺�鍗佷簩灏忔椂鍒讹紱HOUR_OF_DAY鈥斺�浜屽崄鍥涘皬鏃跺埗锛�
		 log_minute = log_c.get(Calendar.MINUTE); //鍒�
		 
		 String log_hour1 = "";
		 String log_minute1 = "";
		 
		 if(log_hour < 10)
		 {
		 	log_hour1 += "0";
		 	log_hour1 += log_hour;
		 }
		 else 
		 {
		 	log_hour1 += log_hour;
		 }
		 
		 if(log_minute < 10)
		 {
		 	log_minute1 += "0";
		 	log_minute1 += log_minute;
		 }
		 else
		 {
		 	log_minute1 += log_minute;
		 }
		 
		 
		 String log_time_yearmonthday = "";
		 log_time_yearmonthday += log_year;
		 log_time_yearmonthday += "-";
		 log_time_yearmonthday += log_month;
		 log_time_yearmonthday += "-";
		 log_time_yearmonthday += log_day;
		 
		 String log_time_hourminute = "";
		 log_time_hourminute += log_hour1;
		 log_time_hourminute += ":";
		 log_time_hourminute += log_minute1;
		 xpf_dev_time = log_time_yearmonthday + " " +log_time_hourminute;
		
		 xpf_device_number += log_year;
		 xpf_device_number += log_month;
		 xpf_device_number += log_day;
		 xpf_device_number += log_hour1;
		 xpf_device_number += log_minute1;
		
		Random random = new Random(); 
  	    int x = 1000 + random.nextInt(9000);
  	    
  	    xpf_device_number += x;
  	    
  	    
  	    Dev dev = new  Dev(xpf_device_number, xpf_dev_name, xpf_dev_number, xpf_dev_property, xpf_dev_begintime, xpf_dev_endtime, xpf_dev_buytime, xpf_dev_dutypeople, xpf_dev_buymount, xpf_dev_nowmount, xpf_dev_lendmount, xpf_dev_inmount, xpf_dev_mountdanwei, xpf_dev_location, xpf_dev_belongto, xpf_dev_other, xpf_dev_time);
		
  	    UpdateDev updev = new UpdateDev();
 	    updev.Update(1, dev);
 	    
 	    response.sendRedirect("drug/managedrug.jsp");
	}
}
