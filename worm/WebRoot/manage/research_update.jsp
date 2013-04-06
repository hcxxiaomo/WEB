<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
//String path = request.getContextPath();
//String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>



<%@page import="java.beans.Statement"%>  
<%@page import="com.mysql.jdbc.Driver"%>  
<%@page import="java.sql.*"%>  
<%@page import="java.io.*" %>
<%@page import=" java.util.*" %>

<% 		 		 
 	     String content = request.getParameter("editorValue").toString();
		 content = new String(content.getBytes("iso-8859-1"),"utf-8");
		 String dbUrl = "jdbc:mysql://localhost:3306/worm";
		 String dbUsr = "root";
  	     String dbPwd = "123456";
		 Connection conn = null;
   	     String sql_content = "update worm_others set content = '"+content+"' where id= 2";
  	     PreparedStatement statement_content = null;
  	     try
  	     {
  	     		Class.forName("com.mysql.jdbc.Driver");
		 	    conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		 	    
	
		 	    	statement_content = conn.prepareStatement(sql_content);
		 	    	statement_content.executeUpdate(sql_content);
		 	    	
		 	    response.sendRedirect("research.jsp");
		        
	
  	     }catch(Exception e)
  	     {
  	     	e.printStackTrace();
  	     }
  	     
%>





<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    
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
