<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>



<%@page import="java.beans.Statement"%>  
<%@page import="com.mysql.jdbc.Driver"%>  
<%@page import="java.sql.*"%>  
<%@page import="java.io.*" %>
<%@page import=" java.util.*" %>




<% 		 		 
		 String user = request.getParameter("user").toString();
  	     String password = request.getParameter("password").toString();
  	     String id = request.getParameter("id").toString();
  	     user = new String(user.getBytes("iso-8859-1"),"utf-8");
  	     password = new String(password.getBytes("iso-8859-1"),"utf-8");
		 id = new String(id.getBytes("iso-8859-1"),"utf-8");

		 String dbUrl = "jdbc:mysql://localhost:3306/worm";
		 String dbUsr = "root";
  	     String dbPwd = "123456";
		 Connection conn = null;
   	     String sql_title = "update worm_manage set username = '"+user+"' where id='"+id+"'";
   	     String sql_author = "update worm_manage set password = '"+password+"' where id='"+id+"'";
   	     
   	     
  	     PreparedStatement statement_title = null;
  	     PreparedStatement statement_author = null;
  	     try
  	     {
  	     		Class.forName("com.mysql.jdbc.Driver");
		 	    conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		 	    
	
		 
					statement_title = conn.prepareStatement(sql_title);
		 	    	statement_title.executeUpdate(sql_title);
		 	    
		 	    	statement_author = conn.prepareStatement(sql_author);
		 	    	statement_author.executeUpdate(sql_author);
		 	    

		 response.sendRedirect("user.jsp");
		        
	
  	     }catch(Exception e)
  	     {
  	     	e.printStackTrace();
  	     }
  	     
%>





<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
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
