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
		 String address = request.getParameter("address").toString();
   	     String telephone = request.getParameter("telephone").toString();
  	     String fax = request.getParameter("fax").toString();
  	     String email = request.getParameter("email").toString();
  	     
  	     address = new String(address.getBytes("iso-8859-1"),"utf-8");
  	     telephone = new String(telephone.getBytes("iso-8859-1"),"utf-8");
		 fax = new String(fax.getBytes("iso-8859-1"),"utf-8");
		 email = new String(email.getBytes("iso-8859-1"),"utf-8");

		 String dbUrl = "jdbc:mysql://localhost:3306/worm";
		 String dbUsr = "root";
  	     String dbPwd = "123456";
		 Connection conn = null;
   	     String sql_address = "update worm_others set content = '"+address+"' where id = 3";
   	     String sql_telephone = "update worm_others set content = '"+telephone+"' where id = 4";
   	     String sql_fax = "update worm_others set content = '"+fax+"' where id = 5";
   	     String sql_email = "update worm_others set content = '"+email+"' where id= 6";
   	     
   
   	     
   	     
  	     PreparedStatement stm_address = null;
  	     PreparedStatement stm_telephone = null;
  	     PreparedStatement stm_fax = null;
  	     PreparedStatement stm_email = null;
 	     
  	     
  	     try
  	     {
  	     		Class.forName("com.mysql.jdbc.Driver");
		 	    conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		 	    
	
		 
					 stm_address = conn.prepareStatement(sql_address);
		 	    	stm_address.executeUpdate(sql_address);
		 	    
		 	    	stm_telephone = conn.prepareStatement(sql_telephone);
		 	    	stm_telephone.executeUpdate(sql_telephone);
		 	    
		 	    	stm_fax = conn.prepareStatement(sql_fax);
		 	    	stm_fax.executeUpdate(sql_fax);
		 	    
		 	    	stm_email = conn.prepareStatement(sql_email);
		 	    	stm_email.executeUpdate(sql_email);
		 	    	
		 	    response.sendRedirect("connect.jsp");
		        
	
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
