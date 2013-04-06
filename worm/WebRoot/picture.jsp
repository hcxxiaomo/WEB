<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>


<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>实验室风采</title>

<%

	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	Connection conn_page = null;	
	String sql = "select * from worm_pictures order by id desc";

	PreparedStatement statement = null;
	ResultSet rs = null;
	PreparedStatement statement_page = null;
	ResultSet rs_page = null;
	
	
	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		statement = conn.prepareStatement(sql);
		rs = statement.executeQuery(sql);} 
		catch (Exception e) {
			e.printStackTrace();
		}
	
	
	//以下为页数
	int record_total = 0; //记录总数
	int intPageSize = 0; //一页显示的记录数
	int intPageCount = 0; //总页数
	int intPage = 0; //待显示页码
	String strPage = null;
	int i = 0;

	
	rs.last();
	record_total = rs.getRow();
	intPageSize = 16;
	intPageCount = (record_total + intPageSize - 1) / intPageSize;

	
	strPage = request.getParameter("page");
	if (strPage == null) {
		intPage = 1;
	} else {
		intPage = Integer.parseInt(strPage);
		if (intPage < 1) {
			intPage = 1;
		}
		if(intPage > intPageCount){
			intPage = intPageCount;
		}
	}
	
	
	
// 	intPage = intPageCount;
	
	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn_page = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);


		statement_page = conn.prepareStatement(sql+" limit "+(intPage-1)*intPageSize+","+intPageSize);
		rs_page = statement_page.executeQuery(sql+" limit "+(intPage-1)*intPageSize+","+intPageSize);	

	} catch (Exception e) {
		e.printStackTrace();
	}
%>


<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="ie_css.css" rel="stylesheet" type="text/css" />
<script src="main.js" type="text/javascript"></script>
<script type="text/javascript" language="javascript" src="jsofimage/lytebox.js"></script>
<link rel="stylesheet" href="jsofimage/lytebox.css" type="text/css" media="screen" />
<link rel="stylesheet" href="jsofimage/screen.css" type="text/css" media="screen" />
</head>

<body>
<div id="container" style="height:auto;width:965px;padding-left:10px;">

		<h3 style="clear: both;color:red;">实验室风采</h3>
		
		<div style="height:auto;width:965px;float:left;">		
		<%
 				                            				
		while(rs_page.next())
		{
 			%>
		<div class="thumbnail">
			<a href="<%=rs_page.getString("picurl") %>" rel="lyteshow[vacation]"	title="<%=rs_page.getString("title") %>">
			<img src="<%=rs_page.getString("picurl") %>" width="215px" height="160px" alt="<%=rs_page.getString("title") %>" />
			</a>
		</div>
		<% 
     }
     %>         
     </div>
     	<br/>	
					<div style="text-align:center;font-size:12px;">	
					  <a href=picture.jsp?page=1>首页</a>&nbsp; 
					   <a href=picture.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
					   <%
					     for(int j=intPage-11;j<=intPage+12;j++){
					         if(j<1||j>intPageCount)
					             continue;
					        
					         %>
					           <a href=picture.jsp?page=<%=j%>><%=j%></a>&nbsp;
					         <%
					         if(j>10)
					         break;
					     }
					   %>
					  <a href=picture.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
					   <a href=picture.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
		</div>   
	</div>
	
	
</body>
</html>
