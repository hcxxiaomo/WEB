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

 <%
 	String id = request.getParameter("id");
	String type =  request.getParameter("type");
	int inttype = Integer.parseInt(type);
	String item = null;
	String sql = null;
	int typetoid = (inttype-1)*3+1;
	
	switch(inttype)
	{
		case 1: sql =  "select * from yjsh_lifes where lable = 'yjsh' ";
		item = "研究生会";
		break;
		case 2: sql =  "select * from yjsh_lifes where lable = 'cms' ";
		item = "研究生传媒社";
		break;
		case 3: sql =  "select * from yjsh_lifes where lable = 'gzz' ";
		item = "党园区工作站";
		break;	
		case 4: sql =  "select * from yjsh_lifes where lable = 'bjs' ";
		item = "《含弘论丛》编辑社";
		break;	
		case 5: sql =  "select * from yjsh_lifes where lable = 'yst' ";
		item = "研究生艺术团";
		break;	
	}
 	
 	
 	
 
 
 
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
	

	ResultSet rs_page = yjsh.executeQuery(sql+" order by id desc limit "+(intPage-1)*intPageSize+","+intPageSize);			
				
  %> 
  


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
  

   
  
  <body>
   
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
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > <%=item %></div>	
						<table  class="tableall" style="border-top:#ccc 1px dashed;">
						
							<%
								//rs_news_page.beforeFirst();
									
										while (rs_page.next()) {
										%>
										<tr  style="height:5px;">
											<td style="width:8px;"><img src="images/firstico.png" border="0"></td>
	                            			<td  style="width:600px;text-align:left;"><a href="lifes_details.jsp?type=<%=type%>&id=<%=rs_page.getString("id") %>"><%=rs_page.getString("title") %></a></td>
											<td><%=rs_page.getString("time").substring(0,10) %></td>
										</tr>
										
							<% 
										}
							%>
							
						</table>
						
						

					</div>
					<div>
						<br/>	
								<div class="pagenumber">	
								  <a href=lifes.jsp?type=<%=inttype %>&page=1>首页</a>&nbsp; 
								   <a href=lifes.jsp?type=<%=inttype %>&page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=lifes.jsp?type=<%=inttype %>&page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=lifes.jsp?type=<%=inttype %>&page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=lifes.jsp?type=<%=inttype %>&page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>
    </div>
    </div>
     <%@ include file="bottom.jsp" %>

  </body>
</html>
