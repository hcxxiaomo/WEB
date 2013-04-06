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
		 String yjshlink = request.getParameter("yjsh").toString();
   	     String cms = request.getParameter("cms").toString();
  	     String gzz = request.getParameter("gzz").toString();
  	     String hhlc = request.getParameter("hhlc").toString();
  	     String yst = request.getParameter("yst").toString();
  	     
  	     yjshlink = new String(yjshlink.getBytes("iso-8859-1"),"utf-8");
  	     cms = new String(cms.getBytes("iso-8859-1"),"utf-8");
		 gzz = new String(gzz.getBytes("iso-8859-1"),"utf-8");
		 hhlc = new String(hhlc.getBytes("iso-8859-1"),"utf-8");
		 yst = new String(yst.getBytes("iso-8859-1"),"utf-8");

	String sql_yjsh = "update yjsh_others set content = '"+yjshlink+"' where id = 7 ";
	String sql_cms = "update yjsh_others set content = '"+cms+"' where id = 8 ";
	String sql_gzz = "update yjsh_others set content = '"+gzz+"' where id = 9 ";	
	String sql_hhlc = "update yjsh_others set content = '"+hhlc+"' where id = 10 ";
	String sql_yst = "update yjsh_others set content = '"+yst+"' where id = 11 ";
	yjsh.executeUpdate(sql_yjsh);
	yjsh.executeUpdate(sql_cms);
	yjsh.executeUpdate(sql_gzz);
	yjsh.executeUpdate(sql_hhlc);
	yjsh.executeUpdate(sql_yst);			
			 	    response.sendRedirect("oldlinks.jsp");
	
	
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
