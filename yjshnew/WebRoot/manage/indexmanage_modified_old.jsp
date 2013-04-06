<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>

<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%
		
	String submit = null;
	String id = null;
	if (request.getParameter("submit") != null) {
		submit = request.getParameter("submit").toString();
		submit = new String(submit.getBytes("iso-8859-1"), "utf-8");

		id = request.getParameter("id").toString();
		id = new String(id.getBytes("iso-8859-1"), "utf-8");
	} 
// 	else {
// 		submit = "修改";
// 		id = session.getAttribute("id").toString();
// 	}
	
	String type =  request.getParameter("type");
	int inttype =1;
	
	if(type !=null)
	{	
	inttype =  Integer.parseInt(type);
	}

	String item = null;
	String talbe = null;
	
	
	
	
	switch(inttype)
	{
		case 1: talbe =  "yjsh_news ";
		item = "新闻动态";
		break;
		case 2: talbe =  "yjsh_notices ";
		item = "通知公告";
		break;
		case 3: talbe =  "yjsh_hhdjt";
		item = "含弘大讲堂";
		break;	
		case 4: talbe =  "yjsh_hhxzjt";
		item = "含弘学子讲堂";
		break;	
		case 5: talbe =  "yjsh_jobs";
		item = "就业信息";
		break;	
		case 6: talbe =  "yjsh_practices";
		item = "社会实践";
		break;						
	}
	
	// talbe =  "select * from yjsh_hhxzjt  where type ='yes' order by id desc ";
	String sql_delete = "delete from "+talbe+" where id = '" + id + "'";
	String sql_title = "select * from worm_news where id = '" + id + "'";
	String sql_forze = "update "+talbe+" set type = 'no' where id = '" + id + "'";
	
	if (submit.equals("删除")) {

			
			//ResultSet rs = yjsh.executeQuery(sql_delete);

// 			rs_title.next();
// 			title = rs_title.getString("title");
			

// 			statement = conn.prepareStatement(sql);
			yjsh.executeUpdate(sql_delete);

			//session.setAttribute("newsmanager_message",	"delete_success");

			// 		 	    	 log_caozuo = "在学院新闻版块删除新闻:" + title;

			// 		 	    	 String log_sql2 = "insert into system_users_log(time_yearmonthday,time_hourminute,username,rights,caozuo,result) values('" +log_time_yearmonthday+ "','" +log_time_hourminute+ "','" +houtai_username+ "','" +log_rights_des+ "','" +log_caozuo+ "','成功')";
			// 					 log_statement2 = conn.prepareStatement(log_sql2);		
			// 					 log_statement2.executeUpdate(log_sql2);

			//response.sendRedirect("news.jsp");
			%>
<jsp:forward page="indexmanage.jsp"></jsp:forward>			
			<%
		} else if (submit.equals("冻结")){
			yjsh.executeUpdate(sql_forze);
			%>
<jsp:forward page="indexmanage.jsp"></jsp:forward>			
			<%		
		}
		
		
		else if (submit.equals("修改")) {
			String sql_modify = "select * from "+talbe+" where id = '" + id + "'";
		
			 ResultSet rs_modify = yjsh.executeQuery(sql_modify);

			session.setAttribute("id", id);

	%>




<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indexmanage_modified.jsp' starting page</title>
    
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
		  <form name="indexmanage_modified_update" method="post" action="manage/indexmanage_modified_update.jsp"> 
		<table>
			<%
				rs_modify.next();
			%>
			<tr>
				<td>新闻标题:</td>
				<td><input type="text" id="title" name="title"
					value="<%=rs_modify.getString("title")%> " style="width: 300px;" />
				</td>
			</tr>
			<tr>
				<td>作者:</td>
				<td><input type="text" id="author" name="author"
					value="<%=rs_modify.getString("author")%> " />
				</td>
			</tr>
			<tr>
				<td>新闻内容:</td>
				<td><input type="hidden" name="id"	value="<%=rs_modify.getString("id")%> " />
				</td>
			</tr>
			<tr>
				<td></td>
				<td><textarea name="content1"
						style="width:800px;height:400px;visibility:hidden;"> <%=rs_modify.getString("content")%> </textarea>
				</td>
			</tr>
			<tr>
					<td>附件:</td>
					<td><input name="file" type="file" readonly/>
					</td>
					
				</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>

			<%
				}
					

			 
			%>
		</table>
		</form>
	</div>
  </body>
</html>
