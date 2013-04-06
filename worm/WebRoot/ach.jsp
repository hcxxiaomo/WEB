<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>


<%
	//String number = request.getParameter("id");
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	String sql = "select * from worm_achievements order by id desc";
	PreparedStatement statement = null;
	ResultSet rs = null;

	PreparedStatement statement_page = null;
	ResultSet rs_page = null;
	
	String sql_info = "select * from worm_others order by id limit 2,4";
	PreparedStatement stm_info = null;
	ResultSet rs_info = null;



	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		statement = conn.prepareStatement(sql);
		rs = statement.executeQuery(sql);

stm_info = conn.prepareStatement(sql_info);
		rs_info = stm_info.executeQuery(sql_info);

		
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




	
	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		String sql_page = sql+" limit "+(intPage-1)*intPageSize+","+intPageSize;

		statement_page = conn.prepareStatement(sql_page);
		rs_page = statement_page.executeQuery(sql_page);


	} catch (Exception e) {
		e.printStackTrace();
	
}
	
%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>获奖成果</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="ie_css.css" rel="stylesheet" type="text/css" />

<script type="text/javascript">
	

	if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
		setActiveStyleSheet("ie_css.css");
	} else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
		setActiveStyleSheet("ie_css.css");
	} else if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
		setActiveStyleSheet("ie_css.css");
	} else if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
		setActiveStyleSheet("ie_css.css");
	} else if (navigator.userAgent.indexOf("MSIE 10.0") > 0) {
		setActiveStyleSheet("css.css");
	} else if (navigator.userAgent.indexOf("Firefox") > 0) {
		setActiveStyleSheet("css.css");
	} else if (navigator.userAgent.indexOf("Chrome") > 0) {
		setActiveStyleSheet("css.css");
	}

	function setActiveStyleSheet(filename) {
		//alert(filename);
		//var path = document.getElementsByTagName("link")[0].href;
		document.getElementsByTagName("link")[0].href = filename;
	}
</script>
</head>

<body>
	<div class="containerdetail">
		<div id="header">
			<!-- <img src="/worm/image/head.jpg" width="950" height="200"> -->
			<EMBED src="/worm/image/head.swf" width="950" height="200"
				type="application/x-shockwave-flash" wmode="transparent" />
		</div>

		<div id="titlebar">
			<!-- nav box begin -->

		 <div id="menu" align="center">
									<a href="index.jsp">首页</a>
				<a href="research.jsp">研究概况</a>
				<a href="news.jsp">新闻动态</a> 
				<a href="projects.jsp">科学研究</a> 
				<a href="team.jsp">研究队伍</a> 
				<a href="experiences.jsp">经验交流</a>
				<a href="download.jsp">下载中心</a> 
				<a href="groups.jsp">创新文化</a>
					</div>
					</div>
	 <div id="pagebody">
                		<div class="mainbobyleft">
			<div class="lefttitle">科学研究</div>
                			<div class="leftword"><a href="papers.jsp">专著论文</a><br/></div>
                			<div class="leftword"><a href="projects.jsp" >科研项目</a><br/></div>
							<div class="leftword"><a href="ach.jsp" >获奖成果</a><br/></div>
			
			</div>
                			
                        	<div style="margin-left:200px;text-align:center;">
                        	<div style="text-align:left;font-color:#123546;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > 获奖成果</div>
                           
                            		<table style="text-align:center; line-height:30px; align:center;margin:0px auto;">
                            			<tr style="height:30px;">
                            				<td style="width:8px;"></td>
                            				<td style="width:640px;text-align:left;"></td>                       
                            				<td style="width:100px;text-align:left;"></td>
                            			</tr>
                      
                            			<%
                            			while(rs_page.next()){

                            			%>
                            			<tr style="font-size:12px;">
                            				<td valign="baseline"><img src="image/firstico.jpg" border="0"></td>
                            				<td valign="baseline" style="text-align:left;"><a href="detail.jsp?type=6&id=<%=rs_page.getString("id")%>"><%=rs_page.getString("title") %></a></td>                           				
                            				<td><%=rs_page.getString("time").substring(0,10) %></td>
                            			</tr>
                            			<% 

                            				}
                            			%>                            				                            			
                            		</table>
                            		</div>
                            		<div class="mainbobybottom">
                            		 <a href=ach.jsp?page=1>首页</a>&nbsp; 
								   <a href=ach.jsp?page=<%=intPage-1 %>>上一页</a>&nbsp;
								   <%
								     for(int j=intPage-11;j<=intPage+12;j++){
								         if(j<1||j>intPageCount)
								             continue;
								        
								         %>
								           <a href=ach.jsp?page=<%=j%>><%=j%></a>&nbsp;
								         <%
								         if(j>10)
								         break;
								     }
								   %>
								  <a href=ach.jsp?page=<%=intPage+1 %>>下一页</a>&nbsp;
								   <a href=ach.jsp?page=<%=intPageCount %>>尾页</a>&nbsp;	
                            		</div>
                            </div>



<%	
             
             String info[] = new String[4];
			int count = 0;
			while(rs_info.next()){
				info[count++] = rs_info.getString("content");
			}
		
		 %>
		<div id="foot">
			<br />
			<div id="footword">
				 <%=info[0] %>&nbsp;&nbsp;<a href="manage/manage.jsp">后台管理</a><br />
				电话：<%=info[1] %>传真：<%=info[2] %> 邮箱：<A
					href="mailto:jjwang7008@yahoo.com"><%=info[3] %></a><br />
			</div>
		</div>
	</div>
</body>
</html>
