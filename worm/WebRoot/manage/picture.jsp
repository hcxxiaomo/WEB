<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
		//request.setCharacterEncoding("utf-8");//尝试加的
%>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>

<%@ include file="checkvalid.jsp" %>
<%
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
				String dbUsr = "root";
				String dbPwd = "123456";
				Connection conn = null;
				String sql = "select * from worm_pictures order by id desc";
				PreparedStatement stm = null;
				ResultSet rs = null;
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
			
					stm = conn.prepareStatement(sql);
					rs = stm.executeQuery(sql);
				} catch (Exception e) {
					e.printStackTrace();
				}
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
</head>
<body   style="background-color:#eef2fb;">

<h4 style="color:red">实验室风采后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td>实验室风采</td>
				
				<td>操作</td>
			</tr>
			<%
				while (rs.next()) {
			%>
			<tr>
				 <form method='post' action='manage/picture_modified.jsp' >
				<td><%=rs.getString("time")%></td>
				<td><a href="<%=rs.getString("picurl")%>"><%=rs.getString("title")%></a></td>
				
				<%
					{
				%>
				<td>
				<input name="id" type="hidden"	value="<%=rs.getString("id")%>" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" /></td>
				<%
					}
				%>
				
				</form>
			</tr>
			<%
				}
			%>

		</table>
	<table border="0"  cellpadding="0" cellspacing="0">
		<tr>
		<td>上传新图片：</td>
			<td height="45"  valign="middle">
			<form action="manage/picture_update.jsp" method="post" enctype="multipart/form-data" name="form1">
					<input type="file" name="file" > <input type="submit" name="Submit" value="上传">
				</form>
			</td>
		</tr>
	</table>
		<p style="color:#0000ff">说明：单个页面显示12张图片。</p>
	
	</body>
</html>

