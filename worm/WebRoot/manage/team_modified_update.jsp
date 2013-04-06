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
		 String name = request.getParameter("name").toString();
  	     String type = request.getParameter("type").toString();
  	     String content = request.getParameter("editorValue").toString();
  	     String id = request.getParameter("id").toString();
  	     name = new String(name.getBytes("iso-8859-1"),"utf-8");
  	     type = new String(type.getBytes("iso-8859-1"),"utf-8");
		 content = new String(content.getBytes("iso-8859-1"),"utf-8");
		 id = new String(id.getBytes("iso-8859-1"),"utf-8");
		 

		 
		 //int id = 0;


		 String dbUrl = "jdbc:mysql://localhost:3306/worm";
		 String dbUsr = "root";
  	     String dbPwd = "123456";
		 Connection conn = null;
   	     String sql_name = "update worm_team set name= '"+name+"' where id='"+id+"'";
   	     String sql_type = "update worm_team set type= '"+type+"' where id='"+id+"'";
   	     String sql_content = "update worm_team set content = '"+content+"' where id='"+id+"'";
   	     
   
   	     
   	     
  	     PreparedStatement statement_title = null;
  	     PreparedStatement statement_author = null;
  	     PreparedStatement statement_content = null;
  	     
  	     try
  	     {
  	     		Class.forName("com.mysql.jdbc.Driver");
		 	    conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		 	    
	
		 
					statement_title = conn.prepareStatement(sql_name);
		 	    	statement_title.executeUpdate(sql_name);
		 	    
		 	    	statement_author = conn.prepareStatement(sql_type);
		 	    	statement_author.executeUpdate(sql_type);
		 	    	statement_content = conn.prepareStatement(sql_content);
		 	    	statement_content.executeUpdate(sql_content);
		 	    	
		 	    response.sendRedirect("team.jsp");
		        
	
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
