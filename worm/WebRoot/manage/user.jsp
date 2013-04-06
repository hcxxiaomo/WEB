<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%
request.setCharacterEncoding("UTF-8");

%>
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
<%@page import="java.lang.*"%>


<%
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	String sql = "select * from worm_manage order by id desc";
	PreparedStatement statement = null;
	ResultSet rs = null;

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		statement = conn.prepareStatement(sql);
		rs = statement.executeQuery(sql);


	} catch (Exception e) {
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

<body style="background-color:#eef2fb;">

	<div>
		<h4 style="color:red">用户后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>创建时间</td>
				<td>用户名</td>
				<td>操作</td>
			</tr>
			<%
				while (rs.next()) {
			%>
			 <form method='post' action='manage/user_modified.jsp' >
			<tr>
				
				<td><%=rs.getString("time")%></td>
				<td><%=rs.getString("username")%></td>
				<td>
				<input name="id" type="hidden"	value="<%=rs.getString("id")%>" />
				<input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				<input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" /></td>


			</tr>
							</form>
			<%
				}
			%>

		</table>
	</div>


	<div>
		<form name="news" method="post" action="manage/user_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>用户:</td>
					<td><input id="user" name="user" type="text" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>密码:</td>
					<td><input type="password" id="password" name="password" /></td>
				</tr>
				<tr>
				<td></td>
				<td><input type="submit" name="button" value="增加用户" /></td>
				</tr>
			
			</table>
		</form>
	</div>

</body>
</html>