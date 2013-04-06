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

	intPageSize = 10;
	strPage = request.getParameter("page");
	if (strPage == null) {
		intPage = 1;
	} else {
		intPage = Integer.parseInt(strPage);
		if (intPage < 1) {
			intPage = 1;
		}
	}
	
	rs_news.last();
	record_total = rs_news.getRow();
	intPageCount = (record_total + intPageSize - 1) / intPageSize;
	intPage = intPageCount;

				
				
  %> 
  
   
  
  <body>
   
	  <%@ include file="top.html" %>
    <div id="containerinside">
		<div id="pagebody">
						<div class="mainbobyleft">
						<div class="lefttitle">创新文化</div>
                			<div class="leftword"><a href="groups.jsp">团队文化</a><br/></div>
                			<div class="leftword"><a href="graduate.jsp">研究生文化</a><br/></div>
                			


			
			</div>
			
			
<!-- 				<div id="other_sidebar"> -->
<!-- 					<ul> -->
<!-- 						<li>创新文化</li> -->
<!-- 						<ul> -->
<!-- 							<li><a href="javascript:void(0);" onclick="ff(1)">团队文化</a> -->
<!-- 							</li> -->
<!-- 							<li><a href="javascript:void(0);" onclick="ff(2)">研究生文化</a> -->
<!-- 							</li> -->

<!-- 						</ul> -->
<!-- 					</ul> -->
<!-- 				</div> -->


					<div id="show_graduate" style="text-align:center;">
<!-- 						<p>graduate</p> -->
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > 新闻动态</div>	
						<table
							style="text-align:center; line-height:30px; align:center;margin:0px auto;">
							<tr style="height:5px;">
							<td style="width:8px;"></td>
								<td style="width:60%;text-align:left;"></td>
								<td></td>
							</tr>
							<%
							
								if (intPageCount > 0) {
										rs_news.absolute((intPage - 1) * intPageSize + 1);

										while (i < intPageSize && !rs_news.isAfterLast()) {
							%>
							<tr style="font-size:12px;">
							<td><img src="images/firstico.jpg" border="0"></td>
								<td style="text-align:left;"><a
									href="news_detail.jsp?id=<%=rs_news.getString("id")%>"><%=rs_news.getString("title")%></a>
								</td>
								<td><%=rs_news.getString("time").substring(0, 10)%></td>
							</tr>
							<%
								rs_news.next();
											i++;
										}
									}
							%>
						</table>
						<div class="mainbobybottom">
							<%
								if (intPage > 1) {
							%>
							<a href="news.jsp?page=<%=intPage - 1%>">上一页</a>
							<%
								} else if (intPage == 1) {
							%>
							
							<%
								}
							%>

							<%
								if (intPage < intPageCount) {
							%>
							<a href="graduate.jsp?page=<%=intPage + 1%>">下一页</a>
							<%
								} else if (intPage == intPageCount) {
							%>
							
							<%
								}
							%>

							<br> 第<%=intPage%>页 / 共<%=intPageCount%>页
							
						</div>
					</div>
				</div>



    </div>
     <%@ include file="bottom.jsp" %>

  </body>
</html>
