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
<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>




<% 		 		 
		 String title = request.getParameter("title").toString();
  	     String link = request.getParameter("link").toString();
  	     String id = request.getParameter("id").toString();
  	     
  	     title = new String(title.getBytes("iso-8859-1"),"utf-8");
  	     link= new String(link.getBytes("iso-8859-1"),"utf-8");
		 id = new String(id.getBytes("iso-8859-1"),"utf-8");
		 

		 
		 //int id = 0;


		
   	     String sql_title = "update yjsh_links set title = '"+title+"' where id='"+id+"'";
   	     String sql_link = "update yjsh_links set link = '"+link+"' where id='"+id+"'";
  			
		 	    	yjsh.executeUpdate(sql_title);
		 	    	yjsh.executeUpdate(sql_link);

		 	    response.sendRedirect("links.jsp");        
	
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
