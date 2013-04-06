<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%
request.setCharacterEncoding("UTF-8");
String htmlData = request.getParameter("content1") != null ? request.getParameter("content1") : "";
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
<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>


<%
	
	String sql_links = "select * from yjsh_links";

	ResultSet rs_links = yjsh.executeQuery(sql_links);



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

<body  style="background-color : #eef2fb">

	<div>
		<h4 style="color:red">友情链接后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				
				<td>链接标题</td>
				<td>链接网址</td>
				<td>操作</td>
			</tr>
			<%
				while (rs_links.next()) {
			%>
			<tr>
				 <form method='post' action='manage/links_modified.jsp' >
				
				<td><a href=<%=rs_links.getString("link")%> target="_top"><%=rs_links.getString("title")%></a>
				</td>
				<td><%=rs_links.getString("link")%></td>
				<%
					{
				%>
				<td>
				<input name="id" type="hidden"	value="<%=rs_links.getString("id")%>" />
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
	</div>


	<div>
		<form name="news" method="post" action="manage/links_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>链接标题:</td>
					<td><input id="title" name="title" type="text" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>链接网址:</td>
					<td><input type="text" id="link" name="link"  style="width: 300px;" /></td>
				</tr>
<!-- 				<tr> -->
<!-- 					<td>图片:</td> -->
<!-- 					<td><input name="newsimage" type="text" readonly -->
<!-- 						style="width: 300px;" /> <input name="newsimage" value="上传" -->
<!-- 						type="submit" /> -->
<!-- 					</td> -->
<!-- 				</tr> -->
				
				<tr>
					<td></td>
					<td><input type="submit" value="提交" /></td>
				</tr>
			</table>
		</form>
	</div>

</body>
</html>


<%!
private String htmlspecialchars(String str) {
	str = str.replaceAll("&", "&amp;");
	str = str.replaceAll("<", "&lt;");
	str = str.replaceAll(">", "&gt;");
	str = str.replaceAll("\"", "&quot;");
	return str;
}
%>