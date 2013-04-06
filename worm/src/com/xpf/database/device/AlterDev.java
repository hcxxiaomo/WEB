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


public class AlterDev extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException
	{
		String xpf_device_number = request.getParameter("xpf_device_number").toString();
		xpf_device_number = new String(xpf_device_number.getBytes("iso-8859-1"), "utf-8");

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
		
		
	    Dev dev = new  Dev(xpf_device_number, xpf_dev_name, xpf_dev_number, xpf_dev_property, xpf_dev_begintime, xpf_dev_endtime, xpf_dev_buytime, xpf_dev_dutypeople, xpf_dev_buymount, xpf_dev_nowmount, xpf_dev_lendmount, xpf_dev_inmount, xpf_dev_mountdanwei, xpf_dev_location, xpf_dev_belongto, xpf_dev_other, null);
	    
	    UpdateDev updev = new UpdateDev();
 	    updev.Update(2, dev);
 	    
 	 
 	    
 	    response.sendRedirect("drug/managedrug.jsp");
	}
}
