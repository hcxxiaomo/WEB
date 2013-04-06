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


public class AlterMed extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_medicine_number = request.getParameter("xpf_medicine_number").toString();
		xpf_medicine_number = new String(xpf_medicine_number.getBytes("iso-8859-1"), "utf-8");
		
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
		
		Med med = new Med(xpf_medicine_number, xpf_med_name, xpf_med_number, xpf_med_kind, xpf_med_property, xpf_med_begintime, xpf_med_endtime, xpf_med_buytime, xpf_med_dutypeople, xpf_med_buymount, xpf_med_nowmount, xpf_med_mountdanwei, xpf_med_location, xpf_med_belongto, xpf_med_other, null);
	
		UpdateMed upmed = new UpdateMed();
   	    upmed.Update(2, med);
   	    
   	    response.sendRedirect("drug/managedrug.jsp");
	}
}
