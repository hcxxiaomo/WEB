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


public class AlterBook extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{		
		String xpf_books_number = request.getParameter("xpf_books_number").toString();
		xpf_books_number = new String(xpf_books_number.getBytes("iso-8859-1"), "utf-8");
		
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
		
		Book book = new Book(xpf_books_number, xpf_book_name, xpf_book_number, xpf_book_kind, xpf_book_begintime, xpf_book_buytime, xpf_book_dutypeople, xpf_book_buymount, xpf_book_nowmount, xpf_book_lendmount, xpf_book_inmount, xpf_book_location, xpf_book_belongto, xpf_book_other, null);
	
		UpdateBook upbook = new UpdateBook();
 	    upbook.Update(2, book);
 	    
 	    response.sendRedirect("drug/managedrug.jsp");
	}
}
