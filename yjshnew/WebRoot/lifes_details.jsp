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
	int typetoid = (inttype-1)*3+1;
	
	switch(inttype)
	{
		case 1: sql =  "select * from yjsh_lifes where id='" + id + "'";
		item = "研究生会";
		break;
		case 2: sql =  "select * from yjsh_lifes where id='" + id + "'";
		item = "研究生传媒社";
		break;
		case 3: sql =  "select * from yjsh_lifes where id='" + id + "'";
		item = "党园区工作站";
		break;	
		case 4: sql =  "select * from yjsh_lifes where id='" + id + "'";
		item = "《含弘论丛》编辑社";
		break;	
		case 5: sql =  "select * from yjsh_lifes where id='" + id + "'";
		item = "研究生艺术团";
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
              		<div class="leftword"><a href="organis.jsp?type=<%=type %>&id=<%=typetoid%>">组织概况</a><br/></div>
					<div class="leftword"><a href="organis.jsp?type=<%=type %>&id=<%=typetoid+1%>">主席团介绍</a><br/></div>
					<div class="leftword"><a href="organis.jsp?type=<%=type %>&id=<%=typetoid+2%>"">品牌活动</a><br/></div>
					<div class="leftword"><a href="lifes.jsp?type=<%= type%>">组织生活</a><br/></div>
 
				</div>
				<div class="detailsbodyright">
<!-- 						<p>news</p> -->
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > <%=item%> > 组织生活 </div>	
						
						
					<div>
						<div style="border-bottom:1px solid #7B68EE">
							<div style="text-align:center; font:30px Tahoma; margin:0px auto;"><%=rs.getString("title")%></div>
							<div style="margin:0px auto; border:1px solid #7B68EE;">
								<table style="margin-left:0px;">
									<tr>
										<td width=150px;></td>
										<td width=200px;>作者：<%=rs.getString("author")%></td>
										<td width=240px;>时间：<%=rs.getString("time")%></td>
										<td width=160px></td>
									</tr>
								</table>
							</div>
						</div>
						<div style="margin-top:15px;">
							<p>
								<%=rs.getString("content")%>
							</p>
						</div>
					</div>
				</div>
				
    	</div>
    </div>
    
    <%@ include file="bottom.jsp" %>
  </body>
  
  
</html>
