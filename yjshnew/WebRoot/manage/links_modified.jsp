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
<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>


<%
		String submit = request.getParameter("submit").toString();
		submit = new String(submit.getBytes("iso-8859-1"), "utf-8");
		String id = request.getParameter("id").toString();
		id = new String(id.getBytes("iso-8859-1"), "utf-8");
		

	
	
	

		if (submit.equals("删除")) {
	String sql_del = "delete from yjsh_links where id = '" + id + "'";
			yjsh.executeUpdate(sql_del);	
			response.sendRedirect("links.jsp");
		} 
		
		 if (submit.equals("修改")) {
	String sql_mod = "select * from yjsh_links where id = '" + id + "'";
			ResultSet rs_mod = yjsh.executeQuery(sql_mod);
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


<script type="text/javascript" charset="utf-8"
	src="kindeditor/kindeditor.js"></script>
<script type="text/javascript" charset="utf-8"
	src="kindeditor/lang/zh_CN.js"></script>


</head>

<body style="background-color : #eef2fb">
	<div>
		<a href="manage/links.jsp">返回</a>
	</div>
	
	<br>

	<div>
		  <form name="news_modified_update" method="post" action="manage/links_modified_update.jsp"> 
		<table>
			<%
				rs_mod.next();
			%>
			<tr>
				<td>链接标题:</td>
				<td><input type="text" id="title" name="title"
					value="<%=rs_mod.getString("title")%> " style="width: 300px;" />
				</td>
			</tr>
			<tr>
				<td>链接网址:</td>
				<td><input type="text" id="link" name="link"
					value="<%=rs_mod.getString("link")%> "  style="width: 300px;"  />
				</td>
			</tr>
				<td></td>
				<td><input type="hidden" name="id"	value="<%=rs_mod.getString("id")%> " />
				</td>
			</tr>
			
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>

			<%
				}
					
			%>
		</table>
		</form>
	</div>


</body>
</html>
