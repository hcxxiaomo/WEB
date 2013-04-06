<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>

<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>



<%
	String id = request.getParameter("id");
	String sql_news =  "select * from yjsh_news where id='" + id + "'";
   	ResultSet rs_news = yjsh.executeQuery(sql_news);
   	rs_news.next();
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">

    <title>新闻动态</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<link href="css/stylenew.css" rel="stylesheet" type="text/css" />
  </head>
  
  <body >
  <%@ include file="top.html" %>
    <div id="containerinside">
		<div id="pagebody">
				<div class="detailsbodyleft">
              			<div class="leftword"><a href="notices.jsp">通知公告</a><br/></div>
					<div class="leftword"><a href="news.jsp">新闻动态</a><br/></div>
					<div class="leftword"><a href="hhjt.jsp">含弘讲堂</a><br/></div>
					<div class="leftword"><a href="jobs.jsp">就业信息</a><br/></div>
					<div class="leftword"><a href="practices.jsp">社会实践</a><br/></div>
 
				</div>
				<div class="detailsbodyright">
<!-- 						<p>news</p> -->
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > 新闻动态</div>	
						
						
					<div>
						<div style="border-bottom:1px solid #7B68EE">
							<div style="text-align:center; font:30px Tahoma; margin:0px auto;"><%=rs_news.getString("title")%></div>
							<div style="margin:0px auto; border:1px solid #7B68EE;">
								<table>
									<tr>
										<td width = 300px;></td>
										<td width=200px;>作者：<%=rs_news.getString("author")%></td>
										<td >时间：<%=rs_news.getString("time")%></td>
									</tr>
								</table>
							</div>
						</div>
						<div style="margin-top:15px;">
							<p>
								<%=rs_news.getString("content")%>
							</p>
						</div>
					</div>
				</div>
				
    	</div>
    </div>
    
    <%@ include file="bottom.jsp" %>
  </body>
  
  
</html>
