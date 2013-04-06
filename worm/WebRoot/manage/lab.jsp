<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	//String path = request.getContextPath();
	//String basePath = request.getScheme() + "://"	+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>


<%@ include file="checkvalid.jsp" %>

<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>



<%
	String submit = null;
	String id = null;


	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	
	Connection conn = null;
	String sql = "select * from worm_others where id = 1";
	PreparedStatement statement = null;
	//PreparedStatement statement1 = null;
	ResultSet rs = null;
	String title = null;


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

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
 <script type="text/javascript" charset="utf-8" src="../ueditor/editor_config.js"></script>
    <!--使用版-->
    <script type="text/javascript" charset="utf-8" src="../ueditor/editor_all.js"></script>





</head>

<body style="background-color:#eef2fb;">

	<div>
	
		<h4 style="color:red;">实验室简介内容后台管理</h4>
		  <form name="news_modified_update" method="post" action="lab_update.jsp"> 
		<table>
			<%
				rs.next() ;
			%>

			<tr>
				<td></td>
				<td><script  id="editor" type="text/plain" style="width:1076px;"><%=rs.getString("content")%></script>
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>

		</table>
		</form>
	</div>
</body>

<script type="text/javascript">

   //实例化编辑器
    //UE.getEditor('editor').initialContent('aaa');
    UE.getEditor('editor');
    //setContent( '' );

    function createEditor(){
        enableBtn();
        UE.getEditor('editor');
    }
</script>
</html>
