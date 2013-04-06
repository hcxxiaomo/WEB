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
	String type =  request.getParameter("type");
	int inttype = Integer.parseInt(type);
	String item = null;
	String sql = null;
	
	switch(inttype)
	{
		case 1: sql =  "select * from yjsh_news where id='" + id + "'";
		item = "新闻动态";
		break;
		case 2: sql =  "select * from yjsh_notices where id='" + id + "'";
		item = "通知公告";
		break;
		case 3: sql =  "select * from yjsh_hhdjt where id='" + id + "'";
		item = "含弘大讲堂";
		break;	
		case 4: sql =  "select * from yjsh_hhxzjt where id='" + id + "'";
		item = "含弘学子讲堂";
		break;	
		case 5: sql =  "select * from yjsh_jobs where id='" + id + "'";
		item = "就业信息";
		break;	
		case 6: sql =  "select * from yjsh_practices where id='" + id + "'";
		item = "社会实践";
		break;	
		case 7: sql = "select * from yjsh_files where id='" + id + "'";
		item = "下载中心";	
		break;		
		case 8: sql = "select * from yjsh_magazines where id='" + id + "' ";
		item = "研究生杂志";	
		break;	
	}
	
	
	
	
   	ResultSet rs = yjsh.executeQuery(sql);
   	rs.next();
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">

    <title><%=item %></title>
    
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
              		<div class="leftword"><a href="titles.jsp?type=2">通知公告</a><br/></div>
					<div class="leftword"><a href="titles.jsp?type=1">新闻动态</a><br/></div>
					<div class="leftword"><a href="titles.jsp?type=3">含弘大讲堂</a><br/></div>
					<div class="leftword"><a href="titles.jsp?type=4">含弘学子讲堂</a><br/></div>
					<div class="leftword"><a href="titles.jsp?type=5">就业信息</a><br/></div>
					<div class="leftword"><a href="titles.jsp?type=6">社会实践</a><br/></div>
 
				</div>
				<div class="detailsbodyright">
<!-- 						<p>news</p> -->
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > <%=item%>> 正文</div>	
						
						
					<div>
						<div style="border-bottom:1px solid #7B68EE">
							<div style="text-align:center; font:26px Tahoma; margin:0px auto;"><%=rs.getString("title")%></div>
							<div style="margin:0px auto; border:1px solid #7B68EE;">
								<table style="font-size:14px;">
									<tr>
										<td width = 120px;></td>
										<td width=300px;>作者：<%=rs.getString("author")%></td>
										<td >时间：<%=rs.getString("time")%></td>
									</tr>
								</table>
							</div>
						</div>
						<div style="margin-top:15px;text-align:left;">
							<p>
								<%=rs.getString("content")%>
							</p>
						</div>
						<br/>
						<%
							String file = rs.getString("file");
							String show = "display:none;";
							if(file != null){
							show = "display";
							}
						
						 %>
						
						<div style="<%=show%>">
							<p >
								<a style="text-decoration:underline;color:#0000ff;font-size:12px;" href="<%=rs.getString("file")%>"><%=rs.getString("origanname")%></a>
							</p>
						</div>
					</div>
				</div>
				
    	</div>
    </div>
    
    <%@ include file="bottom.jsp" %>
  </body>
<%
	yjsh.closecon();
%>  
  
</html>
