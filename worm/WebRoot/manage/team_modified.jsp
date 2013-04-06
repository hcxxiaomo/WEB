<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	//String path = request.getContextPath();
	//String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>




<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>





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
	String sql_delete = "delete from worm_team where id = '" + id + "'";
	//String sql_title = "select * from worm_team where id = '" + id + "'";
	PreparedStatement statement = null;
	PreparedStatement statement1 = null;
	//PreparedStatement statement_title = null;

	ResultSet rs = null;
	//ResultSet rs_title = null;

	//String title = null;

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		if (submit.equals("删除")) {

			statement = conn.prepareStatement(sql_delete);
			statement.executeUpdate(sql_delete);

			response.sendRedirect("team.jsp");
		} else if (submit.equals("修改")) {
			String sql_modified = "select * from worm_team where id = '" + id + "'";
			statement1 = conn.prepareStatement(sql_modified);
			rs = statement1.executeQuery(sql_modified);
%>





<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>


<title></title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

 <script type="text/javascript" charset="utf-8" src="../ueditor/editor_config.js"></script>
    <!--使用版-->
    <script type="text/javascript" charset="utf-8" src="../ueditor/editor_all.js"></script>


</head>

<body style="background-color:#eef2fb;">
	<div>
		<a href="team.jsp">返回</a>
	</div>
	<br>



	<div>
		  <form name="news_modified_update" method="post" action="team_modified_update.jsp"> 
		<table>
			<%
				rs.next();
			%>
			<tr>
				<td>姓名:</td>
				<td><input type="text" id="name" name="name" value="<%=rs.getString("name")%> " style="width: 300px;" />
				</td>
			</tr>
			<tr>
				<td>身份:</td>
				<td>
				<select  id="type" name="type" style="width"50"  size="1">
							    <option value="<%=rs.getString("type") %>"  selected ><%=rs.getString("type") %> </option>
   							    <option value="硕士研究生" >硕士研究生 </option>
							    <option value="博士研究生" >博士研究生 </option>
							    <option value="博士后" >博士后 </option>
							    <option value="教授" >教授 </option>
							    <option value="讲师" >讲师</option>
							    <option value="毕业生" >毕业生</option>
							    <option value="其它人员" >其它人员 </option>
							    <option value="团队带头人" >团队带头人</option>			    
				</select>
				
				</td>
			</tr>
			<tr>
				<td>简介:</td>
				<td><input type="hidden" name="id"	value="<%=rs.getString("id")%>" />
				</td>
			</tr>
			<tr>
				<td></td>
				<td><script  id="editor" type="text/plain" style="width:1076px;"><%=rs.getString("content")%></script> 
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="提交" />
				</td>
			</tr>

			<%
				}
			} catch (Exception e) {
			e.printStackTrace();
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
