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


public class DeleteDev extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_device_number = request.getParameter("xpf_device_number").toString();
		xpf_device_number = new String(xpf_device_number.getBytes("iso-8859-1"), "utf-8");
		
		Dev dev = new  Dev(xpf_device_number, null, null, null, null, null, null, null, 0, 0, 0, 0, null, null, null, null, null);
	    
		
	    UpdateDev updev = new UpdateDev();
 	    updev.Update(3, dev);
 	    
 	 
 	    
 	    response.sendRedirect("drug/managedrug.jsp");
	}
}
