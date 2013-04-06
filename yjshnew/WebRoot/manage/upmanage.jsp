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

	String type =  request.getParameter("type");
	//session.setAttribute("type", type);
	int inttype =  Integer.parseInt(type);
	

	String item = null;
	String sql = null;
	
	switch(inttype)
	{
		case 1: 
		item = "新闻动态";
		break;
		case 2: 
		item = "通知公告";
		break;
		case 3: 
		item = "含弘大讲堂";
		break;	
		case 4:
		item = "含弘学子讲堂";
		break;	
		case 5: 
		item = "就业信息";
		break;	
		case 6: 
		item = "社会实践";
		break;						
	}
	
	
	
	
 %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indexmanage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
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
	
		<h4 style="color:red"><%=item %>上传后台界面</h4>
	<div>
		<form name="form1" method="post" enctype="multipart/form-data" action="manage/upmanage_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>标题:</td>
					<td><input id="title" name="title" type="text" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>作者:</td>
					<td><input type="text" id="author" name="author" /></td>
				</tr>
				<tr>
					<td>内容:</td>
					<td><input name="type" type="hidden"	value="<%=type%>" /></td>
				</tr>
				
				<tr>
					<td></td>
					<td><%htmlData="";%>
					<textarea name="content1" cols="100" rows="8" style="width:700px;height:200px;visibility:hidden;"><%=htmlspecialchars(htmlData)%></textarea>
		</td>
				</tr>
				<tr>
					<td>附件:</td>
					<td><input name="file" type="file" readonly/>
					</td>
					
				</tr>
				<tr>
					<td></td>
				<td><input type="submit" name="submit" value="提交内容" /></td>
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