<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
		//request.setCharacterEncoding("utf-8");//尝试加的
%>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>


<%@ include file="checkvalid.jsp" %>
<%
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
				String dbUsr = "root";
				String dbPwd = "123456";
				Connection conn = null;
				Connection conn_page = null;
				String sql = "select * from worm_file order by id desc";
				PreparedStatement stm = null;
				ResultSet rs = null;
				PreparedStatement statement_page = null;
				ResultSet rs_page = null;
				
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
			
					stm = conn.prepareStatement(sql);
					rs = stm.executeQuery(sql);
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
				
				
//			 	intPage = intPageCount;
				

					
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
<br/>
<div>
<h4 style="color:red">下载中心后台管理</h4>
		<table style="font-size:14px;">
			<tr style="text-align:center;">
				<td>时间</td>
				<td>名称</td>
				<td>操作</td>
			</tr>
			<%
				while (rs_page.next()) {
			%>
			<tr>
				 <form method='post' action='file_modified.jsp' >
				<td><%=rs_page.getString("time")%></td>
				<td><a href=<%=rs_page.getString("name")%> target="_blank"><%=rs_page.getString("title")%></a>
				</td>
				
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
								  <a href=file.jsp?page=1>首页</a>&nbsp; 
								   <a href=file.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=file.jsp?page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=file.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=file.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
					</div>
					
					</div>
		<p>上传新文件：</p>
			<form action="file_update.jsp" method="post" enctype="multipart/form-data" name="form1">
					<input type="file" name="file" > <input type="submit" name="Submit" value="上传">
				</form>

	</body>
</html>

