<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>


<%
	//String path = request.getContextPath();
	//String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>
<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>


<%
String dbUrl = "jdbc:mysql://localhost:3306/worm";
String dbUsr = "root";
String dbPwd = "123456";
Connection conn = null;
Connection conn_page = null;	
PreparedStatement statement = null;
ResultSet rs = null;
PreparedStatement statement_page = null;
ResultSet rs_page = null;

	String sql = "select * from worm_team order by id desc";


	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		statement = conn.prepareStatement(sql);
		rs = statement.executeQuery(sql);


	} catch (Exception e) {
		e.printStackTrace();
	}
	
	
	

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
	
String sql_title = sql+" limit "+(intPage-1)*intPageSize+","+intPageSize;	
	
	
// 	intPage = intPageCount;
	

		
try {
		Class.forName("com.mysql.jdbc.Driver");
		conn_page = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		
		statement_page = conn_page.prepareStatement(sql_title);
		rs_page = statement_page.executeQuery(sql_title);
	} catch (Exception e) {
		e.printStackTrace();
	
}

	
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
</head>

<body style="background-color:#eef2fb;">

	<div>
		<h4 style="color:red">研究队伍后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td>姓名</td>
				<td>类型</td>
				<td>操作</td>
			</tr>
			<%
				while (rs_page.next()) {
			%>
			<tr>
				 <form method='post' action='team_modified.jsp' >
				<td><%=rs_page.getString("time")%></td>
				<td><a href=../team_detail.jsp?id=<%=rs_page.getString("id")%> target="_top"><%=rs_page.getString("name")%></a>
				</td>
				<td><%=rs_page.getString("type")%></td>
				<%
					{
				%>
				<td>
				<input name="id" type="hidden"	value="<%=rs_page.getString("id")%>" />
				 <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="删除" />
				  <input style="border-bottom:1px solid #005aa7; border-top:0px; border-left:0px; border-right:0px; background-color:transparent;" type="submit" name="submit" value="修改" /></td>
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
								  <a href=team.jsp?page=1>首页</a>&nbsp; 
								   <a href=team.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=team.jsp?page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=team.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=team.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>



	<div>
		<form name="team" method="post" action="team_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>姓名:</td>
					<td><input id="name" name="name" type="text" style="width: 300px;" /></td>
				</tr>
				<tr>
					<td>身份:</td>
					<td>
						<select  id="type" name="type" style="width"50"  size="1">
							    <option value="硕士研究生"  selected >硕士研究生 </option>
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
<!-- 				<tr> -->
<!-- 					<td>图片:</td> -->
<!-- 					<td><input name="newsimage" type="text" readonly -->
<!-- 						style="width: 300px;" /> <input name="newsimage" value="上传" -->
<!-- 						type="submit" /> -->
<!-- 					</td> -->
<!-- 				</tr> -->
				<tr>
					<td>简介:</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td>
					<script  id="editor" type="text/plain" style="width:1076px;"></script>
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

