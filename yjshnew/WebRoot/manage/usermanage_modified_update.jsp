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
<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<% 
 		 String name = request.getParameter("name").toString();	 
 		 String user = request.getParameter("user").toString();
 		 String sort = request.getParameter("sort").toString();
  	     String password = request.getParameter("password").toString();
		 String id = request.getParameter("id").toString();
		
		 id = new String(id.getBytes("iso-8859-1"), "utf-8");  	     
  	     name = new String(name.getBytes("iso-8859-1"),"utf-8");
  	     user = new String(user.getBytes("iso-8859-1"),"utf-8");
  	     sort = new String(sort.getBytes("iso-8859-1"),"utf-8"); 
  	     password = new String(password.getBytes("iso-8859-1"),"utf-8");
 
		 
		String sql_all = "select * from yjsh_manage ";
		ResultSet rs_all = yjsh.executeQuery(sql_all);
		
		while(rs_all.next()){
		if(user.equals(rs_all.getString("user"))){
%>

<jsp:forward page="usersame.jsp">
<jsp:param name="sort" value="<%=sort%>" />
</jsp:forward>

<%		
		
		}

		      
		}
				
		 String sql_name = "update yjsh_manage set name = '"+name+"' where id='"+id+"'";
   	     String sql_user = "update yjsh_manage set user = '"+user+"' where id='"+id+"'";
   	     String sql_password = "update yjsh_manage set password = '"+password+"' where id='"+id+"'";   	     
  			
		 	    	yjsh.executeUpdate(sql_name);
		 	    	yjsh.executeUpdate(sql_user);
			       	yjsh.executeUpdate(sql_password);
    
%>

<jsp:forward page="usermanage.jsp">
<jsp:param name="sort" value="<%=sort%>" />
</jsp:forward>








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
