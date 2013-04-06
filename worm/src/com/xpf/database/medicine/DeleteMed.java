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


public class DeleteMed extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_medicine_number = request.getParameter("xpf_medicine_number").toString();
		xpf_medicine_number = new String(xpf_medicine_number.getBytes("iso-8859-1"), "utf-8");
		
		Med med = new Med(xpf_medicine_number, null, null, null, null, null, null, null, null, 0, 0, null, null, null, null, null);
		
		UpdateMed upmed = new UpdateMed();
   	    upmed.Update(3, med);
   	    
   	    response.sendRedirect("drug/managedrug.jsp");
	}
}
