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

	String sql7 = "select * from yjsh_others where id = 7";
	ResultSet rs7 = yjsh.executeQuery(sql7);
	
		String sql8 = "select * from yjsh_others where id = 8";
	ResultSet rs8 = yjsh.executeQuery(sql8);
	
		String sql9 = "select * from yjsh_others where id = 9";
	ResultSet rs9 = yjsh.executeQuery(sql9);
	
		String sql10 = "select * from yjsh_others where id = 10";
	ResultSet rs10 = yjsh.executeQuery(sql10);
	
		String sql11 = "select * from yjsh_others where id = 11";
	ResultSet rs11 = yjsh.executeQuery(sql11);
	
%>
  </head>
  
  <body style="background-color : #eef2fb">

		<h4 style="color:red;margin-top:12px;">旧版地址信息后台管理</h4>
	<form name="oldlinks_update" method="post" action="manage/oldlinks_update.jsp">
	
	<table style="font-size:12px;">
			<%
				rs7.next() ;
			%>
			<tr>
				<td>研究生会旧版地址:</td>
				<td>
				<input id="yjsh" type = "text" name ="yjsh" style="width:400px;" value="<%=rs7.getString("content")%>"/>
				</td>
			</tr>
		
				
				<%
				rs8.next() ;
			%>
			<tr>
				<td>传媒社旧版地址:</td>
				
				<td>
				<input id="cms" type = "text" name ="cms" style="width:400px;" value="<%=rs8.getString("content")%>"/>
				</td>
			</tr>
							
					<%
				rs9.next() ;
			%>
			<tr>
				<td>党员园区工作站旧版地址:</td>
				
				<td>
				<input id="gzz" type = "text" name ="gzz" style="width:400px;" value="<%=rs9.getString("content")%>"/>
				</td>
			</tr>
			
					<%
				rs10.next() ;
			%>
			<tr>
				<td>研《含弘论丛》编辑社旧版地址:</td>

				<td>
				<input id="hhlc" type = "text" name ="hhlc" style="width:400px;" value="<%=rs10.getString("content")%>"/>
				</td>
			</tr>
			<%
				rs11.next() ;
			%>
			<tr>
				<td>研究生艺术团旧版地址:</td>
				
				<td>
				<input id="yst" type = "text" name ="yst" style="width:400px;" value="<%=rs11.getString("content")%>"/>
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>
  </body>
</html>
