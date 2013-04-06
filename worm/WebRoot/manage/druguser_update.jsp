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
<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat" %>

<% 
 		 String user = request.getParameter("user").toString();
  	     String password = request.getParameter("password").toString();
  	     
  	     user = new String(user.getBytes("iso-8859-1"),"utf-8");
  	     password = new String(password.getBytes("iso-8859-1"),"utf-8");
 
		 
		 int id = 0;

		 String dbUrl = "jdbc:mysql://localhost:3306/worm";
		 String dbUsr = "root";
  	     String dbPwd = "123456";
		 Connection conn = null;
   	     String sql = "select * from worm_manage";
  	     PreparedStatement statement = null;
  	     PreparedStatement statement_add = null;
  	     ResultSet rs = null;
  	     
	     
  	     try
  	     {
  	     		Class.forName("com.mysql.jdbc.Driver");
		 	    conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		 
		        statement = conn.prepareStatement(sql);
		        rs = statement.executeQuery(sql);
		

		      
				SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
	            String time = df.format(new Date());// new Date()为获取当前系统时间
 

		        String sql_add = "insert into worm_managedrug (username,password,time) values('" +user+ "','" +password+ "','" +time+ "')";
	
  	            statement = conn.prepareStatement(sql_add);
		       	statement.executeUpdate(sql_add);
		       	
			
		       	
		       	response.sendRedirect("druguser.jsp");
  	     }catch(Exception e)
  	     {
  	     	e.printStackTrace();
  	     }
  	     
  	    
%>










<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>news_upload.jsp page</title>
    
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
