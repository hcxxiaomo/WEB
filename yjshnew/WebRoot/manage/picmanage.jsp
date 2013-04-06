<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%
request.setCharacterEncoding("UTF-8");
String htmlData = request.getParameter("content1") != null ? request.getParameter("content1") : "";
%>

<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>


<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%

	//String type =  request.getParameter("type");
	//session.setAttribute("type", type);
	//int inttype =  Integer.parseInt(type);
	

	//String item = null;
	String sql =  "select * from yjsh_pictures order by id desc ";

	
	
	
	ResultSet rs = yjsh.executeQuery(sql);

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
	

	ResultSet rs_page = yjsh.executeQuery(sql+"limit "+(intPage-1)*intPageSize+","+intPageSize);			


 %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'picmanage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	
	<style  type="text/css">
.table {
	font-size: 13px;
	/*margin-left: 3px;*/
	line-height: 20px;
}

.table tr {
	line-height: 20px;
}
.pagenumber{
font-size:12px;
text-align:center;
}

</style>
	
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <body style="background-color : #eef2fb">
		<div>
		<h4 style="color:red">图片展示后台管理</h4>

		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td>图片展示标题</td>

				<td>操作</td>
			</tr>
			<%
				while (rs_page.next()) {
			%>
			<tr>
				 <form method='post' action='manage/picmanage_modified.jsp' >
				<td><%=rs_page.getString("time")%></td>
				<td><a href=<%=rs_page.getString("picurl")%> target="_blank"><%=rs_page.getString("title")%></a>
				</td>
			

				<td>
				<input name="id" type="hidden"	value="<%=rs_page.getString("id")%>" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				  <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" />

				  </td>

				</form>
			</tr>
			<%
				}
			%>

		</table>
	</div>
	
	<div>
						<br/>	
								<div class="pagenumber">	
								  <a href=manage/picmanage.jsp?page=1>首页</a>&nbsp; 
								   <a href=manage/picmanage.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=manage/picmanage.jsp?page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=manage/picmanage.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=manage/picmanage.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>


	<div>
		<form name="form1" method="post" enctype="multipart/form-data" action="manage/picmanage_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>标题:</td>
					<td><input id="title" name="title" type="text" style="width: 300px;" /></td>
				</tr>

				<tr>
					<td>图片:<input type="hidden"  id="id" name="id" /></td>
					<td><input name="file" type="file" readonly/>
					</td>
					
				</tr>
				<tr>
					<td></td>
				<td><input type="submit" name="submit" value="提交内容" /></td>
				</tr>

			</table>
		</form>
	</div>

</body>
</html>