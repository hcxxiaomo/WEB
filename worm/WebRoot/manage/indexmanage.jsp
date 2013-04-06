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
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	Connection conn_page = null;	
	PreparedStatement statement = null;
	ResultSet rs = null;
	PreparedStatement statement_page = null;
	ResultSet rs_page = null;
	

	String type =  request.getParameter("type");
	//session.setAttribute("type", type);
	int inttype =  Integer.parseInt(type);
	

	String item = null;
	String sql = null;
	String link = null;
	
	switch(inttype)
	{
		case 1: sql =  "select * from worm_news  order by id desc ";
		item = "新闻动态";
		link = "detail.jsp?type=1";
		break;
		case 2: sql =  "select * from worm_notices  order by id desc ";
		item = "通知公告";
		link = "detail.jsp?type=2";
		break;
		case 3: sql =  "select * from worm_papers  order by id desc ";
		item = "专著论文";
		link = "detail.jsp?type=3";
		break;	
		case 4: sql =  "select * from worm_experiences  order by id desc ";
		item = "经验交流";
		link = "detail.jsp?type=4";
		break;	
		case 5: sql =  "select * from worm_projects  order by id desc ";
		item = "科研项目";
		link = "detail.jsp?type=5";
		break;	
		case 6: sql =  "select * from worm_achievements  order by id desc ";
		item = "获奖成果";
		link = "detail.jsp?type=6";
		break;		
		case 7: sql = "select * from worm_groups  order by id desc ";
		item = "团队文化";	
		link = "detail.jsp?type=7";
		break;			
		case 8: sql = "select * from worm_graduates  order by id desc ";
		item = "研究生文化";
		link = "detail.jsp?type=8";	
		break;	
		
	}
	
	
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
    
    
    <title>My JSP 'indexmanage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

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
	
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
 
  <body style="background-color:#eef2fb;">
		<div>
		<h4 style="color:red"><%=item %>后台管理</h4>

		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td><%=item %>标题</td>
				<td>作者</td>
				<td>操作</td>
			</tr>
			<%
				while (rs_page.next()) {
			%>
			<tr>
				 <form method='post' action='indexmanage_modified.jsp' >
				<td><%=rs_page.getString("time")%></td>
				<td><a href=../<%=link %>&id=<%=rs_page.getString("id")%> target="_blank"><%=rs_page.getString("title")%></a>
				</td>
				<td><%=rs_page.getString("author")%></td>
				<%
					{
				%>
				<td>
				<input name="id" type="hidden"	value="<%=rs_page.getString("id")%>" />
				<input name="type" type="hidden"	value="<%=type%>" />
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
								  <a href=indexmanage.jsp?type=<%=inttype %>&page=1>首页</a>&nbsp; 
								   <a href=indexmanage.jsp?type=<%=inttype %>&page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=indexmanage.jsp?type=<%=inttype %>&page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=indexmanage.jsp?type=<%=inttype %>&page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=indexmanage.jsp?type=<%=inttype %>&page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>


	<div>
		<form name="form1" method="post" action="indexmanage_update.jsp">
			<table style="font-size:14px;">
				<tr>
					<td>标题:</td>
					<td><input id="title" name="title" type="text" style="width: 900px;" /></td>
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
					<td>
				<script  id="editor" type="text/plain" style="width:1076px;"></script>
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
