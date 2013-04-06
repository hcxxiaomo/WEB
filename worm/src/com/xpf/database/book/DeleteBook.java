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

public class DeleteBook extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_books_number = request.getParameter("xpf_books_number").toString();
		xpf_books_number = new String(xpf_books_number.getBytes("iso-8859-1"), "utf-8");
		
		Book book = new Book(xpf_books_number, null, null, null, null, null, null, 0, 0, 0, 0, null, null, null, null);
		
		UpdateBook upbook = new UpdateBook();
 	    upbook.Update(3, book);
 	    
 	    response.sendRedirect("drug/managedrug.jsp");
	}
}
