<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
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
	String sql = "select * from worm_links";
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


<title></title>
<base href="<%=basePath%>">
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
		<h4 style="color:red">友情链接后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>链接图片</td>
				<td>链接网址</td>
				<td>操作</td>
			</tr>
			
			<%
				while (rs.next()) {
			%>
			 <form method='post' action='manage/links_modified.jsp' >
			<tr>
			<td><a href=<%=rs.getString("link")%> target="_top"><img src="<%=rs.getString("imgurl")%>" width="110px" height="35px;"></a>
				</td>
				<td><%=rs.getString("link")%></td>

				<td>
				<input name="id" type="hidden"	value="<%=rs.getString("id")%>" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				  <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" /></td>
				</form>

			</tr>
			<%
				}
			%>

		</table>
	</div>


	<div>
		<form name="news" method="post" enctype="multipart/form-data"  action="manage/links_update.jsp">
			<table style="font-size:14px;">

				<tr>
					<td>链接网址:</td>
					<td><input type="text" id="link" name="link"  style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>上传图片:</td>
					<td><input type="file" name="file" ></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" value="提交" /></td>
				</tr>
			</table>
		</form>
	</div>
	<p style="color:#0000ff">说明：主页只能显示前6个链接，多的将不会显示。</p>

</body>
</html>