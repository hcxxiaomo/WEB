<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>

<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%
		
	String submit = null;
	String id = null;
	if (request.getParameter("submit") != null) {
		submit = request.getParameter("submit").toString();
		submit = new String(submit.getBytes("iso-8859-1"), "utf-8");

		id = request.getParameter("id").toString();
		id = new String(id.getBytes("iso-8859-1"), "utf-8");
	} 

	
	
	
	String sql_delete = "delete from yjsh_pictures where id = '" + id + "'";
	String sql_title = "select * from yjsh_pictures where id = '" + id + "'";

	
	if (submit.equals("删除")) {
			yjsh.executeUpdate(sql_delete);
			%>
<jsp:forward page="picmanage.jsp"></jsp:forward>			
			<%
		}else if (submit.equals("修改")) {
			String sql_modify = "select * from yjsh_pictures where id = '" + id + "'";
			 ResultSet rs_modify = yjsh.executeQuery(sql_modify);

%>




<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indexmanage_modified.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
		<link rel="stylesheet" href="kindeditor/themes/default/default.css" />
	<link rel="stylesheet" href="kindeditor/plugins/code/prettify.css" />
	<script charset="utf-8" src="kindeditor/kindeditor.js"></script>
	<script charset="utf-8" src="kindeditor/lang/zh_CN.js"></script>
	<script charset="utf-8" src="kindeditor/plugins/code/prettify.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->



  </head>
  
  <body style="background-color : #eef2fb">
    <div>
		  <form name="picmanage_modified_update" method="post" enctype="multipart/form-data"  action="manage/picmanage_modified_update.jsp"> 
		<p style="font-size:12px;color:red">如果重新选择图片，则会覆盖原图片；否则仍然使用原图片。</p>
		<table>
			<%
				rs_modify.next();
			%>
			<tr>
				<td>标题:</td>
				<td><input type="text" id="title" name="title"
					value="<%=rs_modify.getString("title")%> " style="width: 300px;" />
				</td>
			</tr>
			<tr>
					<td>图片:<input type="hidden" name="id"	value="<%=rs_modify.getString("id")%> " />
					</td>
					<td><input name="file" type="file" readonly/>
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
