<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>


<%@ include file="checkvalid.jsp" %>

<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>



<%
	String submit = null;
	String id = null;


	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;

	PreparedStatement statement = null;
	PreparedStatement statement1 = null;


	ResultSet rs = null;


	String title = null;

	
	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		
			
		
			String sql2 = "select * from worm_others where id = 7";
			statement1 = conn.prepareStatement(sql2);
			rs = statement1.executeQuery(sql2);
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

<body  style="background-color:#eef2fb;">
	
	<div>
			<h4 style="color:red">飞行文字后台管理</h4>
		  <form name="news_modified_update" method="post" action="manage/flyword_update.jsp"> 
		<table>
			<%
				rs.next() ;
			%>
			<tr>

				<td><input type="text" id="flyword" name="flyword" value="<%=rs.getString("content")%>" style="width:400px;"/>
				</td>
			</tr>
			<tr>

				<td height="20px;">
				</td>
			</tr>
			<tr>

				<td><input type="submit" value="提交" />
				</td>
			</tr>

			<%
				
					
				} catch (Exception e) {
					e.printStackTrace();
				}
			%>
		</table>
		</form>
	</div>


</body>
</html>
