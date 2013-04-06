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
	String id =  request.getParameter("id");
	String item_id = null;
	int inttype =1;
	int intid = Integer.parseInt(id);
	//session.setAttribute("id", id);
	if(type !=null)
	{	
	inttype =  Integer.parseInt(type);
	}

	switch(intid % 3){
		case 1 :item_id = "组织概况";
		break;
		case 2 :item_id = "主席团介绍";
		break;
		case 0 :item_id = "品牌活动";
		break;		
	
	}
	

	String item = null;
	String sql = "select * from yjsh_organis where id = '" + id + "'";
	String sql_number = null;
	
	switch(inttype)
	{
		case 1: //sql =  "select * from yjsh_organis where id='" + id + "'";
		item = "研究生会";
		break;
		case 2: //sql =  "select * from yjsh_organis where id='" + id + "'";
		item = "研究生传媒社";
		break;
		case 3: //sql =  "select * from yjsh_organis where id='" + id + "'";
		item = "党园区工作站";
		break;	
		case 4: //sql =  "select * from yjsh_organis where id='" + id + "'";
		item = "《含弘论丛》编辑社";
		break;	
		case 5: //sql =  "select * from yjsh_organis where id='" + id + "'";
		item = "研究生艺术团";
		break;					
	}
	
	
	
		ResultSet rs = yjsh.executeQuery(sql);

	
// 	intPage = intPageCount;
	

	


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
  
<script type="text/javascript" charset="utf-8"
	src="kindeditor/kindeditor.js"></script>
<script type="text/javascript" charset="utf-8"
	src="kindeditor/lang/zh_CN.js"></script>


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

<body  style="background-color : #eef2fb">

	<div>
	
		<h4 style="color:red;"><%=item%> <%=item_id%> 后台管理</h4>
		  <form name="organis_update" method="post" action="manage/organis_update.jsp"> 
		<table>
			<%
				rs.next() ;
			%>
			<tr>
				<td></td>
				<td><input type="hidden" name="id"	value="<%=id%>" />
				</td>
			</tr>
			<tr>
				<td></td>
				<td><textarea name="content1"
						style="width:800px;height:400px;visibility:hidden;"> <%=rs.getString("content")%> </textarea>
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>

			<%
				
				
			%>
		</table>
		</form>
	</div>
	
	
  </body>
</html>
