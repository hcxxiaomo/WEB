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
  
 <%
 	String sql_news =  "select * from yjsh_news order by id desc";
   	ResultSet rs_news = yjsh.executeQuery(sql_news);
   	
	//以下为页数
	int record_total = 0; //记录总数
	int intPageSize = 0; //一页显示的记录数
	int intPageCount = 0; //总页数
	int intPage = 0; //待显示页码
	String strPage = null;
	int i = 0;

	rs_news.last();
	record_total = rs_news.getRow();
	intPageSize = 10;
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

	ResultSet rs_news_page = yjsh.executeQuery("select * from yjsh_news order by id desc limit "+(intPage-1)*intPageSize+" ,"+intPageSize);			
				
  %> 
  
   
  
  <body>
   
	  <%@ include file="top.html" %>
    <div id="containerinside">
		<div id="pagebody">
						<div class="mainbodyleft">
                			<div class="leftword"><a href="notices.jsp">通知公告</a><br/></div>
							<div class="leftword"><a href="news.jsp">新闻动态</a><br/></div>
							<div class="leftword"><a href="hhjt.jsp">含弘讲堂</a><br/></div>
							<div class="leftword"><a href="jobs.jsp">就业信息</a><br/></div>
							<div class="leftword"><a href="practices.jsp">社会实践</a><br/></div>
                			


			
						</div>
			
			



					<div class="mainbodyright">
<!-- 						<p>news</p> -->
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > 新闻动态</div>	
						<table  class="tableall" style="border-top:#ccc 1px dashed;">
						
							<%
								//rs_news_page.beforeFirst();
									
										while (rs_news_page.next()) {
										%>
										<tr  style="height:5px;">
											<td style="width:8px;"><img src="images/firstico.png" border="0"></td>
	                            			<td  style="width:600px;text-align:left;"><a href="details.jsp?type=1&id=<%=rs_news_page.getString("id") %>"><%=rs_news_page.getString("title") %></a></td>
											<td><%=rs_news_page.getString("time").substring(0,10) %></td>
										</tr>
										
							<% 
										}
							%>
							
						</table>
						
						

					</div>
					<div>
						<br/>	
								<div class="pagenumber">	
								  <a href=news.jsp?page=1>首页</a>&nbsp; 
								   <a href=news.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=news.jsp?page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=news.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=news.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>
    </div>
    </div>
     <%@ include file="bottom.jsp" %>

  </body>
</html>
