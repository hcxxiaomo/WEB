package com.xpf.database.book;

import java.io.IOException;
import java.io.PrintWriter;



import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.xpf.database.device.Dev;
import com.xpf.database.device.UpdateDev;
import com.xpf.database.medicine.Med;
import com.xpf.database.medicine.UpdateMed;

import java.util.*;
import java.util.regex.*;
import java.io.*;

public class AddBook extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_books_number = "";
		
		String xpf_book_name = request.getParameter("xpf_book_name").toString();
		xpf_book_name = new String(xpf_book_name.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_number = request.getParameter("xpf_book_number").toString();
		xpf_book_number = new String(xpf_book_number.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_kind = request.getParameter("xpf_book_kind").toString();
		xpf_book_kind = new String(xpf_book_kind.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_begintime = request.getParameter("xpf_book_begintime").toString();
		xpf_book_begintime = new String(xpf_book_begintime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_buytime = request.getParameter("xpf_book_buytime").toString();
		xpf_book_buytime = new String(xpf_book_buytime.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_dutypeople = request.getParameter("xpf_book_dutypeople").toString();
		xpf_book_dutypeople = new String(xpf_book_dutypeople.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_buymount2 = request.getParameter("xpf_book_buymount").toString();
		xpf_book_buymount2 = new String(xpf_book_buymount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_nowmount2 = request.getParameter("xpf_book_nowmount").toString();
		xpf_book_nowmount2 = new String(xpf_book_nowmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_lendmount2 = request.getParameter("xpf_book_lendmount").toString();
		xpf_book_lendmount2 = new String(xpf_book_lendmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_inmount2 = request.getParameter("xpf_book_inmount").toString();
		xpf_book_inmount2 = new String(xpf_book_inmount2.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_location = request.getParameter("xpf_book_location").toString();
		xpf_book_location = new String(xpf_book_location.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_belongto = request.getParameter("xpf_book_belongto").toString();
		xpf_book_belongto = new String(xpf_book_belongto.getBytes("iso-8859-1"), "utf-8");
		
		String xpf_book_other = request.getParameter("xpf_book_other").toString();
		xpf_book_other = new String(xpf_book_other.getBytes("iso-8859-1"), "utf-8");
		
		int xpf_book_buymount = Integer.parseInt(xpf_book_buymount2);
		int xpf_book_nowmount = Integer.parseInt(xpf_book_nowmount2);
		int xpf_book_lendmount = Integer.parseInt(xpf_book_lendmount2);
		int xpf_book_inmount = Integer.parseInt(xpf_book_inmount2);
		
		String xpf_book_time = null;
		
		
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
		 xpf_book_time = log_time_yearmonthday + " " +log_time_hourminute;
		
		 xpf_books_number += log_year;
		 xpf_books_number += log_month;
		 xpf_books_number += log_day;
		 xpf_books_number += log_hour1;
		 xpf_books_number += log_minute1;
		
		Random random = new Random(); 
 	    int x = 1000 + random.nextInt(9000);
 	    
 	    xpf_books_number += x;
 	    
 	    Book book = new Book(xpf_books_number, xpf_book_name, xpf_book_number, xpf_book_kind, xpf_book_begintime, xpf_book_buytime, xpf_book_dutypeople, xpf_book_buymount, xpf_book_nowmount, xpf_book_lendmount, xpf_book_inmount, xpf_book_location, xpf_book_belongto, xpf_book_other, xpf_book_time);
 	    
 	    UpdateBook upbook = new UpdateBook();
 	    upbook.Update(1, book);
 	    
 	    response.sendRedirect("drug/managedrug.jsp");
	}
}
