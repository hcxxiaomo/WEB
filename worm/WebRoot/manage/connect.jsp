<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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



<%
	String submit = null;

	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	PreparedStatement stm3 = null;
	PreparedStatement stm4 = null;
	PreparedStatement stm5 = null;
	PreparedStatement stm6 = null;
	
	ResultSet rs3 = null;
	ResultSet rs4 = null;
	ResultSet rs5 = null;
	ResultSet rs6 = null;	

	

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		{
			String sql3 = "select * from worm_others where id = 3";
			stm3 = conn.prepareStatement(sql3);
			rs3 = stm3.executeQuery(sql3);

			String sql4 = "select * from worm_others where id = 4";
			stm4 = conn.prepareStatement(sql4);
			rs4 = stm4.executeQuery(sql4);
			
			String sql5 = "select * from worm_others where id = 5";
			stm5 = conn.prepareStatement(sql5);
			rs5 = stm5.executeQuery(sql5);
			
			String sql6 = "select * from worm_others where id = 6";
			stm6 = conn.prepareStatement(sql6);
			rs6 = stm6.executeQuery(sql6);			
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
			<h4 style="color:red;">联系信息后台管理</h4>
		  <form name="news_modified_update" method="post" action="manage/connect_update.jsp"> 
		<table style="font-size:12px;">
			<%
				rs3.next() ;
			%>
			<tr>
				<td>地址信息:</td>
				<td><input id="address" type = "text" name ="address" style="width:400px;" value="<%=rs3.getString("content")%>"/>
				
				</td>
			</tr>
			<tr>
				<td height="20px;"></td>
				<td>
				
				</td>
			</tr>
		
				
				<%
				rs4.next() ;
			%>
			<tr>
				<td>电话信息:</td>
				<td><input id="telephone" type = "text" name ="telephone" style="width:400px;" value="<%=rs4.getString("content")%>"/>

				</td>
			</tr>
			<tr>
				<td height="20px;"></td>
				<td>
				
				</td>
			</tr>
							
			<%
				rs5.next() ;
			%>
			<tr>
				<td>传真信息:</td>
				<td><input id="fax" type = "text" name ="fax" style="width:400px;" value="<%=rs5.getString("content")%>"/>
				</td>
			</tr>
			<tr>
			<td height="20px;"></td>
				<td>
				
				</td>
			</tr>
			
					<%
				rs6.next() ;
			%>
			<tr>
				<td>邮箱信息:</td>
				<td><input id="email" type = "text" name ="email" style="width:400px;" value="<%=rs6.getString("content")%>"/>
				</td>
			</tr>
			<tr>
				<td height="20px;"></td>
				<td>
				
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
