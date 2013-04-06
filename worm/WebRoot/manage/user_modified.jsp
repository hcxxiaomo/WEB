<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>




<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>

<%
	String submit = null;
	String id = null;
	if (request.getParameter("submit") != null) {
		submit = request.getParameter("submit").toString();
		submit = new String(submit.getBytes("iso-8859-1"), "utf-8");

		id = request.getParameter("id").toString();
		//id = new String(id.getBytes("iso-8859-1"), "utf-8");
	} else {
		submit = "修改";
		id = session.getAttribute("id").toString();
	}

	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	String sql = "delete from worm_manage where id = '" + id + "'";
	//String sql_title = "select * from worm_manage where id = '" + id + "'";
	String sql2 = "select * from worm_manage where id = '" + id + "'";


	PreparedStatement statement = null;
	PreparedStatement statement1 = null;
	////PreparedStatement statement_title = null;

	ResultSet rs = null;
	//ResultSet rs_title = null;

	String title = null;

	


	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		if (submit.equals("删除")) {

			statement = conn.prepareStatement(sql);
			//rs_title = statement_title.executeQuery(sql);

			statement.executeUpdate(sql);

			//session.setAttribute("newsmanager_message",	"delete_success");

			
			response.sendRedirect("user.jsp");
		} else if (submit.equals("修改")) {
			
			statement1 = conn.prepareStatement(sql2);
			rs = statement1.executeQuery(sql2);
			session.setAttribute("id", id);

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

<body style="background-color:#eef2fb;">
	<div>
		<a href="manage/user.jsp">返回</a>
	</div>
	
	<br>

	<div>
		  <form name="news_modified_update" method="post" action="manage/user_modified_update.jsp"> 
		<table>
			<%
				rs.next();
			%>
			<tr>
				<td>用户名:</td>
				<td><input type="text" id="user" name="user"
					value="<%=rs.getString("username")%> " style="width: 300px;" />
				</td>
			</tr>
			<tr>
				<td>密码:</td>
				<td><input type="password" id="password" name="password"
					value="<%=rs.getString("password")%> " />
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="hidden" name="id"	value="<%=rs.getString("id")%> " />
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>

			<%
				
					}

				} catch (Exception e) {
					e.printStackTrace();
				}
			%>
		</table>
		</form>
	</div>


</body>
</html>
