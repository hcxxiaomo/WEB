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
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'oldlinks.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<% 

	String sql3 = "select * from yjsh_others where id = 3";
	ResultSet rs3 = yjsh.executeQuery(sql3);
	
	String sql4 = "select * from yjsh_others where id = 4";
	ResultSet rs4 = yjsh.executeQuery(sql4);
	
	String sql5 = "select * from yjsh_others where id = 5";
	ResultSet rs5 = yjsh.executeQuery(sql5);
	
	String sql6 = "select * from yjsh_others where id = 6";
	ResultSet rs6 = yjsh.executeQuery(sql6);
	

	
%>
  </head>
  
  <body style="background-color : #eef2fb">

		<h4 style="color:red;margin-top:12px;">联系方式信息后台管理</h4>
	<form name="oldlinks_update" method="post" action="manage/connections_update.jsp">
	
	<table style="font-size:12px;">
			<%
				rs3.next() ;
			%>
			<tr>
				<td>地址信息:</td>
				<td>
				<input id="address" type = "text" name ="address" style="width:400px;" value="<%=rs3.getString("content")%>"/>
				</td>
			</tr>
		
				
				<%
				rs4.next() ;
			%>
			<tr>
				<td>电话信息:</td>
				
				<td>
				<input id="tele" type = "text" name ="tele" style="width:400px;" value="<%=rs4.getString("content")%>"/>
				</td>
			</tr>
							
					<%
				rs5.next() ;
			%>
			<tr>
				<td>传真信息:</td>
				
				<td>
				<input id="fax" type = "text" name ="fax" style="width:400px;" value="<%=rs5.getString("content")%>"/>
				</td>
			</tr>
			
					<%
				rs6.next() ;
			%>
			<tr>
				<td>邮箱信息:</td>

				<td>
				<input id="email" type = "text" name ="email" style="width:400px;" value="<%=rs6.getString("content")%>"/>
				</td>
			</tr>
			
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>
  </body>
</html>
