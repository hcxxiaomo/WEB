<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>


<%
	String submit = null;
	String id = null;

		submit = request.getParameter("submit").toString();
		submit = new String(submit.getBytes("iso-8859-1"), "utf-8");

		id = request.getParameter("id").toString();
		id = new String(id.getBytes("iso-8859-1"), "utf-8");
	

	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	
	String sql_title = "select * from worm_links where id = '" + id + "'";
	
	PreparedStatement statement = null;
	PreparedStatement statement1 = null;
	PreparedStatement statement_title = null;

	ResultSet rs = null;
	ResultSet rs_title = null;

	String title = null;
	
		try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		String sql = "delete from worm_links where id = '" + id + "'";

		if (submit.equals("删除")) {


			statement = conn.prepareStatement(sql);
			statement.executeUpdate(sql);

			response.sendRedirect("links.jsp");
		} else if (submit.equals("修改")) {
			String sql2 = "select * from worm_links where id = '" + id + "'";
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


</head>

<body  style="background-color:#eef2fb;">
	<div>
		<a href="manage/links.jsp">返回</a>
	</div>
	
	<br>

	<p></p>
	<div>
		  <form name="links_modified_update"  method="post" ENCTYPE="multipart/form-data" action="manage/links_modified_update.jsp"> 
		
			<%
				rs.next();
			%>
			<table style="font-size:14px;">

				<tr>
					<td>链接网址:</td>
					<td><input type="text" id="link" name="link"  value="<%=rs.getString("link") %>" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>上传图片:</td>
					<td><input type="file" name="file" ><input type="text" name="id" hidden value=<%=rs.getString("id") %> ></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" value="提交" /></td>
				</tr>
			</table>

			<%
					}

				} catch (Exception e) {
					e.printStackTrace();
				}
			%>
		
		</form>
	</div>
	<p style="color:#0000ff">说明1：如果只修改“链接网址”，则默认使用原来图片，不必重复上传图片。<br/>说明2：如果需要修改图片，直接上传新图片即可。</p>
</body>
</html>

