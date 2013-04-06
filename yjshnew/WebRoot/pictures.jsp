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
<%@page import="java.lang.*"%>
<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<base href="<%=basePath%>">

<title>图片展示</title>

<%

	String sql = "select * from yjsh_pictures order by id desc ";
	ResultSet rs = yjsh.executeQuery(sql);
	
	
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
	

	ResultSet rs_page = yjsh.executeQuery(sql+" limit "+(intPage-1)*intPageSize+","+intPageSize);		

%>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<!-- <link href="ie_css.css" rel="stylesheet" type="text/css" /> -->
<!-- <script src="main.js" type="text/javascript"></script> -->
<script type="text/javascript" language="javascript" src="js/lytebox.js"></script>
<link rel="stylesheet" href="css/lytebox.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/screen.css" type="text/css" media="screen" />
</head>

<body style="magrin: 0 auto;">
<div style="height:auto;width:955px;padding-left:10px;">
		<h3 style="clear: both;color:red;">图片展示</h3>
		
		<div style="height:auto;width:955px;float:left;">
		<%
                            				                            				
       while(rs_page.next())
         {
        %>

		<div style="float:left;" class="thumbnail">
			<a href="<%=rs_page.getString("picurl") %>" rel="lyteshow[vacation]"	title="<%=rs_page.getString("title") %>">
			<img src="<%=rs_page.getString("picurl") %>" width="215px" height="160px" alt="<%=rs_page.getString("title") %>" />
			</a>
		</div>
		<% 
		}
        %>            
	</div>
	

			<br/>	
					<div style="text-align:center;" class="pagenumber">	
					  <a href=pictures.jsp?page=1>首页</a>&nbsp; 
					   <a href=pictures.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
					   <%
					     for(int j=intPage-11;j<=intPage+12;j++){
					         if(j<1||j>intPageCount)
					             continue;
					        
					         %>
					           <a href=pictures.jsp?page=<%=j%>><%=j%></a>&nbsp;
					         <%
					         if(j>10)
					         break;
					     }
					   %>
					  <a href=pictures.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
					   <a href=pictures.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
		</div>
					
</div>
			



</body>
</html>

<%
	yjsh.closecon();
 %>
