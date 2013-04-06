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
		
	

	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	String sql_delete = "delete from worm_file where id = '" + id + "'";
	String sql_title = "select * from worm_file where id = '" + id + "'";
	
	PreparedStatement statement = null;
	PreparedStatement statement1 = null;
	PreparedStatement statement_title = null;

	ResultSet rs = null;
	ResultSet rs_title = null;

	String title = null;
	
		try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		// statement = conn.prepareStatement(sql);
		//rs = statement.executeQuery(sql);

		if (submit.equals("删除")) {

// 			statement_title = conn.prepareStatement(sql_title);
// 			rs_title = statement_title.executeQuery(sql_title);

// 			while (rs_title.next()) {
// 				title = rs_title.getString("title");
// 			}

			statement = conn.prepareStatement(sql_delete);
			statement.executeUpdate(sql_delete);

			//session.setAttribute("newsmanager_message",	"delete_success");

			

			response.sendRedirect("file.jsp");
		} else if (submit.equals("修改")) {
					//session.setAttribute("id", id);
			String sql2 = "select * from worm_file where id = '" + id + "'";
			statement1 = conn.prepareStatement(sql2);
			rs = statement1.executeQuery(sql2);

			//session.setAttribute("id", id);
				//response.sendRedirect("file_modified_update.jsp");

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
		<a href="manage/file.jsp">返回</a>
	</div>
	
	<br>


	<div>
		  <form name="file_modified_update"  method="post" ENCTYPE="multipart/form-data" action="manage/file_modified_update.jsp"> 
		
			<%
				rs.next();
			%>
			<input name="id" type="hidden"	value="<%=rs.getString("id")%>" /> <!--  -->
				 	<input type="file" name="file" > <input type="submit" name="Submit" value="上传">

			<%
			
				
			
				}
			
				} catch (Exception e) {
					e.printStackTrace();
				}
			%>
		
		</form>
	</div>


</body>
</html>

