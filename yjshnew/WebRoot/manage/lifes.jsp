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













<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'life.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
	<link rel="stylesheet" href="kindeditor/themes/default/default.css" />
	<link rel="stylesheet" href="kindeditor/plugins/code/prettify.css" />
	<script charset="utf-8" src="kindeditor/kindeditor.js"></script>
	<script charset="utf-8" src="kindeditor/lang/zh_CN.js"></script>
	<script charset="utf-8" src="kindeditor/plugins/code/prettify.js"></script>
	
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
<script>
		KindEditor.ready(function(K) {
			var editor1 = K.create('textarea[name="content1"]', {
				cssPath : 'kindeditor/plugins/code/prettify.css',
				uploadJson : 'kindeditor/jsp/upload_json.jsp',
				fileManagerJson : 'kindeditor/jsp/file_manager_json.jsp',
				allowFileManager : true,
				afterCreate : function() {
					var self = this;
					K.ctrl(document, 13, function() {
						self.sync();
						document.forms['example'].submit();
					});
					K.ctrl(self.edit.doc, 13, function() {
						self.sync();
						document.forms['example'].submit();
					});
				}
			});
			prettyPrint();
		});
	</script>
  </head>
 
  <body style="background-color : #eef2fb">
		<div>
		<h4 style="color:red"><%=item %>后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td>组织生活标题</td>
				<td>作者</td>
				<td>操作</td>
			</tr>
			<%
				while (rs_page.next()) {
			%>
			<tr>
				 <form method='post' action='manage/news_modified.jsp' >
				<td><%=rs_page.getString("time")%></td>
				<td><a href=details.jsp?type=<%=inttype %>&id=<%=rs_page.getString("id")%> target="_top"><%=rs_page.getString("title")%></a>
				</td>
				<td><%=rs_page.getString("author")%></td>
				<%
					{
				%>
				<td>
				<input name="id" type="hidden"	value="<%=rs_page.getString("id")%>" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				  <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" />
				
				  </td>
				<%
					}
				%>
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
								  <a href=manage/lifes.jsp?type=<%=inttype %>&page=1>首页</a>&nbsp; 
								   <a href=manage/lifes.jsp?type=<%=inttype %>&page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=manage/lifes.jsp?type=<%=inttype %>&page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=manage/lifes.jsp?type=<%=inttype %>&page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=manage/lifes.jsp?type=<%=inttype %>&page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>


	<div>
		<form name="news" method="post" action="manage/news_upload.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>新闻标题:</td>
					<td><input id="title" name="title" type="text" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>作者:</td>
					<td><input type="text" id="author" name="author" /></td>
				</tr>
<!-- 				<tr> -->
<!-- 					<td>图片:</td> -->
<!-- 					<td><input name="newsimage" type="text" readonly -->
<!-- 						style="width: 300px;" /> <input name="newsimage" value="上传" -->
<!-- 						type="submit" /> -->
<!-- 					</td> -->
<!-- 				</tr> -->
				<tr>
					<td>新闻内容:</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td>
					<textarea name="content1" cols="100" rows="8" style="width:700px;height:200px;visibility:hidden;"><%=htmlspecialchars(htmlData)%></textarea>
		<br />
		<input type="submit" name="button" value="提交内容" /></td>
				</tr>
<!-- 				<tr> -->
<!-- 					<td></td> -->
<!-- 					<td><input type="submit" value="发布" /></td> -->
<!-- 				</tr> -->
			</table>
		</form>
	</div>

</body>
</html>


<%!
private String htmlspecialchars(String str) {
	str = str.replaceAll("&", "&amp;");
	str = str.replaceAll("<", "&lt;");
	str = str.replaceAll(">", "&gt;");
	str = str.replaceAll("\"", "&quot;");
	return str;
}
%>