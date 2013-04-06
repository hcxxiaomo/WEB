<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>

<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%

	 String address = request.getParameter("address").toString();
   	     String tele = request.getParameter("tele").toString();
  	     String fax = request.getParameter("fax").toString();
  	     String email = request.getParameter("email").toString();
  	     
  	     address = new String(address.getBytes("iso-8859-1"),"utf-8");
  	     tele = new String(tele.getBytes("iso-8859-1"),"utf-8");
		 fax = new String(fax.getBytes("iso-8859-1"),"utf-8");
		 email = new String(email.getBytes("iso-8859-1"),"utf-8");



		
   	     String sql_address = "update yjsh_others set content = '"+address+"' where id = 3";
   	     String sql_tele = "update yjsh_others set content = '"+tele+"' where id = 4";
   	     String sql_fax = "update yjsh_others set content = '"+fax+"' where id = 5";
   	     String sql_email = "update yjsh_others set content = '"+email+"' where id= 6";
   	     
   	    	yjsh.executeUpdate(sql_address);
   	    	yjsh.executeUpdate(sql_tele);
   	        yjsh.executeUpdate(sql_fax);
			yjsh.executeUpdate(sql_email);
			
			
			 	    response.sendRedirect("connections.jsp");
	
	
 %>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'oldlink_ipdate.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>

  </body>
</html>
