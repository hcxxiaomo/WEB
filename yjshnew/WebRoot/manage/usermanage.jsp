<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%
request.setCharacterEncoding("UTF-8");
String htmlData = request.getParameter("content1") != null ? request.getParameter("content1") : "";
%>

<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>


<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%

	String sort =  request.getParameter("sort");
	//session.setAttribute("type", type);
		
		ResultSet rs = yjsh.executeQuery("select * from yjsh_manage  where sort = "+sort+" order by id desc ");
 %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indexmanage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	
	<style  type="text/css">
.table {
	font-size: 13px;
	/*margin-left: 3px;*/
	line-height: 20px;
}

.table tr {
	line-height: 20px;
}
.pagenumber{
font-size:12px;
text-align:center;
}

</style>
	
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <body style="background-color : #eef2fb">
		<div>
		<h4 style="color:red">登录用户后台管理</h4>

		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td>用户名</td>
				<td>登录名</td>
				<td>操作</td>
			</tr>
			<%
				while (rs.next()) {
			%>
			<tr>
				 <form method='post' action='manage/usermanage_modified.jsp' >
				<td><%=rs.getString("time")%></td>
				<td><%=rs.getString("name")%></td>
				<td><%=rs.getString("user")%></td>
				<%
				{
				%>
				<td>
				<input name="id" type="hidden"	value="<%=rs.getString("id")%>" />
				<input name="sort" type="hidden"	value="<%=sort%>" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				  <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" />
				
				  </td>
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
		<form name="form1" method="post" action="manage/usermanage_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>用户:</td>
					<td><input id="name" name="name" type="text" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>登录名:</td>
					<td><input type="text" id="user" name="user" /></td>
				</tr>
				<tr>
					<td>密码:<input name="sort" type="hidden"	value="<%=sort%>" /></td>
					<td><input type="password" id="password" name="password" /></td>
				</tr>
				
			
				<tr>
					<td></td>
				<td><input type="submit" name="submit" value="提交内容" /></td>
				</tr>

			</table>
		</form>
	</div>

</body>
</html>