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
// 		 String name = request.getParameter("name").toString();	 
//  		 String user = request.getParameter("user").toString();
  		 String sort = request.getParameter("sort").toString();
//   	     String password = request.getParameter("password").toString();
		 String submit = request.getParameter("submit").toString();
		 String id = request.getParameter("id").toString();
		
		 id = new String(id.getBytes("iso-8859-1"), "utf-8");
 	     submit = new String(submit.getBytes("iso-8859-1"), "utf-8");
//   	     name = new String(name.getBytes("iso-8859-1"),"utf-8");
//   	     user = new String(user.getBytes("iso-8859-1"),"utf-8");
  	     sort = new String(sort.getBytes("iso-8859-1"),"utf-8"); 
//   	     password = new String(password.getBytes("iso-8859-1"),"utf-8");
		

	
	
	

		if (submit.equals("删除")) {
	String sql_del = "delete from yjsh_manage where id = '" + id + "'";
			yjsh.executeUpdate(sql_del);

//			response.sendRedirect("links.jsp");
	%>
<jsp:forward page="usermanage.jsp">
<jsp:param name="sort" value="<%=sort%>" />
</jsp:forward>
	<%
	
		} 
		
		 if (submit.equals("修改")) {
	String sql_mod = "select * from yjsh_manage where id = '" + id + "'";
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
		<a href="manage/usermanage.jsp?sort=<%=sort%>">返回</a>
	</div>
	
	<br>

	<div>
		  <form name="usermanage_modified_update" method="post" action="manage/usermanage_modified_update.jsp"> 
		<table>
			<%
				rs_mod.next();
			%>
							<tr>
					<td>用户:</td>
					<td><input id="name" name="name" type="text"  value="<%=rs_mod.getString("name")%>" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>登录名:</td>
					<td><input type="text" id="user" name="user" value="<%=rs_mod.getString("user")%>" /></td>
				</tr>
				<tr>
					<td>密码:<input name="sort" type="hidden"	value="<%=sort%>" /><input name="id" type="hidden"	value="<%=rs_mod.getString("id")%>" /></td>
					<td><input type="password" id="password" name="password" value="<%=rs_mod.getString("password")%>"  /></td>
				</tr>
				
			
				<tr>
					<td></td>
				<td><input type="submit" name="submit" value="提交内容" /></td>
				</tr>

			<%
				}
					
			%>
		</table>
		</form>
	</div>


</body>
</html>
