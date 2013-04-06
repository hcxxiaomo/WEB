package com.xpf.database.medicine;

import java.io.IOException;
import java.io.PrintWriter;



import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.util.*;
import java.util.regex.*;
import java.io.*;


public class AddMed extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_medicine_number = "";
		
		String xpf_med_name = request.getParameter("xpf_med_name").toString();
		xpf_med_name = new String(xpf_med_name.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_number = request.getParameter("xpf_med_number").toString();
		xpf_med_number = new String(xpf_med_number.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_kind = request.getParameter("xpf_med_kind").toString();
		xpf_med_kind = new String(xpf_med_kind.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_property = request.getParameter("xpf_med_property").toString();
		xpf_med_property = new String(xpf_med_property.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_begintime = request.getParameter("xpf_med_begintime").toString();
		xpf_med_begintime = new String(xpf_med_begintime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_endtime = request.getParameter("xpf_med_endtime").toString();
		xpf_med_endtime = new String(xpf_med_endtime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_buytime = request.getParameter("xpf_med_buytime").toString();
		xpf_med_buytime = new String(xpf_med_buytime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_dutypeople = request.getParameter("xpf_med_dutypeople").toString();
		xpf_med_dutypeople = new String(xpf_med_dutypeople.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_buymount2 = request.getParameter("xpf_med_buymount").toString();
		xpf_med_buymount2 = new String(xpf_med_buymount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_nowmount2 = request.getParameter("xpf_med_nowmount").toString();
		xpf_med_nowmount2 = new String(xpf_med_nowmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_mountdanwei = request.getParameter("xpf_med_mountdanwei").toString();
		xpf_med_mountdanwei = new String(xpf_med_mountdanwei.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_location = request.getParameter("xpf_med_location").toString();
		xpf_med_location = new String(xpf_med_location.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_belongto = request.getParameter("xpf_med_belongto").toString();
		xpf_med_belongto = new String(xpf_med_belongto.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_med_other = request.getParameter("xpf_med_other").toString();
		xpf_med_other = new String(xpf_med_other.getBytes("iso-8859-1"), "utf-8");
		
		int xpf_med_buymount = Integer.parseInt(xpf_med_buymount2);
		int xpf_med_nowmount = Integer.parseInt(xpf_med_nowmount2);
		
		 String xpf_med_time = null;
		
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
	    xpf_med_time = log_time_yearmonthday + " " +log_time_hourminute;
		
	    xpf_medicine_number += log_year;
		xpf_medicine_number += log_month;
		xpf_medicine_number += log_day;
		xpf_medicine_number += log_hour1;
		xpf_medicine_number += log_minute1;
		
		Random random = new Random(); 
   	    int x = 1000 + random.nextInt(9000);
   	    
   	    xpf_medicine_number += x;
		
   	    Med med = new Med(xpf_medicine_number, xpf_med_name, xpf_med_number, xpf_med_kind, xpf_med_property, xpf_med_begintime, xpf_med_endtime, xpf_med_buytime, xpf_med_dutypeople, xpf_med_buymount, xpf_med_nowmount, xpf_med_mountdanwei, xpf_med_location, xpf_med_belongto, xpf_med_other, xpf_med_time);
	
   	    UpdateMed upmed = new UpdateMed();
   	    upmed.Update(1, med);
   	    
   	    response.sendRedirect("drug/managedrug.jsp");
	}
	
	public static void main(String args[])
	{
	
	}
}
