<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
//String path = request.getContextPath();
//String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>



<%
		
	String submit = null;
	String id = null;


		submit = request.getParameter("submit").toString();
		submit = new String(submit.getBytes("iso-8859-1"), "utf-8");

		id = request.getParameter("id").toString();
		id = new String(id.getBytes("iso-8859-1"), "utf-8");
			
		


	
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	Connection conn_mod = null;
	
	
	String type =  request.getParameter("type");
	int inttype =  Integer.parseInt(type);


	String item = null;
	String talbe = null;
	String sql_modify = null;
	PreparedStatement statement_modify = null;
	ResultSet rs_modify = null;
	
	
	
	switch(inttype)
	{
		case 1: talbe =  " worm_news";
		item = "新闻动态";
		break;
		case 2: talbe =  " worm_notices";
		item = "通知公告";
		break;
		case 3: talbe =  " worm_papers";
		item = "专著论文";
		break;	
		case 4: talbe =  " worm_experiences";
		item = "经验交流";
		break;	
		case 5: talbe =  " worm_projects";
		item = "科研项目";
		break;	
		case 6: talbe =  " worm_achievements";
		item = "获奖成果";
		break;		
		case 7: talbe = " worm_groups";
		item = "团队文化";	
		break;			
		case 8: talbe = " worm_graduates";
		item = "研究生文化";	
		break;		
	}
	
	
	
// 	String sql_title = "select * from "+talbe+" where id = '" + id + "'";
	
	
	if (submit.equals("删除")) {

		try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

  String sql_delete = "delete from "+talbe+" where id = '" + id + "'";

		PreparedStatement statement = conn.prepareStatement(sql_delete);
		statement.executeUpdate(sql_delete);
		 

	} catch (Exception e) {
		e.printStackTrace();
	
}
		
		
		


			%>
<jsp:forward page="indexmanage.jsp">
<jsp:param name="type" value="<%=type%>" />
</jsp:forward>			
			<%
		}else if (submit.equals("修改")) {
	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn_mod = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
	 sql_modify = "select * from "+talbe+" where id = '" + id + "'";
		 statement_modify = conn_mod.prepareStatement(sql_modify);
		 rs_modify = statement_modify.executeQuery(sql_modify);
			} catch (Exception e) {
				e.printStackTrace();
			
		}

	%>




<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   
    
    <title>My JSP 'indexmanage_modified.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
    <script type="text/javascript" charset="utf-8" src="../ueditor/editor_config.js"></script>
    <!--使用版-->
    <script type="text/javascript" charset="utf-8" src="../ueditor/editor_all.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->


  </head>
  
  <body style="background-color:#eef2fb;">
    <div>
		  <form name="indexmanage_modified_update" method="post" action="indexmanage_modified_update.jsp"> 
		<p style="font-size:12px;color:red"></p>
		<table>
			<%
				rs_modify.next();
			%>
			<tr>
				<td>标题:</td>
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
				<td>内容:</td>
				<td><input type="hidden" name="id"	value="<%=rs_modify.getString("id")%> " /><input name="type" type="hidden"	value="<%=type%>" />
				</td>
			</tr>
			<tr>
				<td></td>
				<td><script  id="editor" type="text/plain" style="width:1076px;"> <%=rs_modify.getString("content")%> </script>
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
  
  <script type="text/javascript">

   //实例化编辑器
    //UE.getEditor('editor').initialContent('aaa');
    UE.getEditor('editor');
    //setContent( '' );

    function createEditor(){
        enableBtn();
        UE.getEditor('editor');
    }
</script>
</html>
