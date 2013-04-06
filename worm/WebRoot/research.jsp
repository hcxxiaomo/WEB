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
	String number = request.getParameter("id");
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	String sql = "select * from worm_others where lable = 'research'";
	PreparedStatement statement = null;
	ResultSet rs = null;
	
	String sql_info = "select * from worm_others order by id limit 2,4";
PreparedStatement stm_info = null;
ResultSet rs_info = null;

	String name = "in";
	String name2 = "in";
	int id = 0;

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		statement = conn.prepareStatement(sql);
		rs = statement.executeQuery(sql);
		
		stm_info = conn.prepareStatement(sql_info);
rs_info = stm_info.executeQuery(sql_info);
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>研究概况</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="ie_css.css" rel="stylesheet" type="text/css" />
<script src="main.js" type="text/javascript"></script>
<script type="text/javascript" src='js_menu/jquery.min.js'></script>
<script type="text/javascript"
	src='js_menu/jquery.hoverIntent.minified.js'></script>
<script type="text/javascript" src='js_menu/jquery.dcmegamenu.1.3.2.js'></script>

<script type="text/javascript">
	$(document).ready(function($) {
		$('#mega-menu-2').dcMegaMenu({
			rowItems : '1',
			speed : 'fast',
			effect : 'fade',
			event : 'click'
		});
	});
</script>

<script>
	var record_div;

	function ff(div_now) {
		switch (div_now) {
		case 1:
			document.getElementById("show_libdetail").style.display = "";
			document.getElementById("show_researchcontents").style.display = "none";
			break;
		case 2:
			document.getElementById("show_libdetail").style.display = "none";
			document.getElementById("show_researchcontents").style.display = "";
			break;

		}

	}
</script>






</head>
<body>
	<div id="container" style="height:auto;">
		<div id="header" style="center;">
			<!-- <img src="/worm/image/head.jpg" width="950" height="200"> -->
			<EMBED src="/worm/image/head.swf" width="950" height="200"
				type="application/x-shockwave-flash" wmode="transparent" />
		</div>

		<div id="titlebar">
			<!-- nav box begin -->
			<div id="menu" align="middle">
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
			<div class="lefttitle">研究概况</div>
                			<div class="leftword"><a href="javascript:void(0);" onclick="ff(1)">实验室简介</a><br/></div>
                			<div class="leftword"><a href="javascript:void(0);" onclick="ff(2)">研究简介</a><br/></div>

			
			</div>
<!-- 				<div id="other_sidebar"> -->
<!-- 					<ul> -->
<!-- 						<li>研究概况</li> -->

<!-- 						<ul> -->
<!-- 							<li><a href="javascript:void(0);" onclick="ff(1)">实验室简介</a> -->
<!-- 							</li> -->
<!-- 							<li><a href="javascript:void(0);" onclick="ff(2)">研究简介</a></li> -->
<!-- 						</ul> -->
<!-- 					</ul> -->
<!-- 				</div> -->

				<div style="margin-left:200px;">

					<div id="show_libdetail" >
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> ><a href="research.jsp">研究概况</a> > 实验室简介</div>
						<%
							while (rs.next()) {
						%>
						<p><%=rs.getString("content")%></p>
						<%
							break;
								}
						%>
					</div>

					<div id="show_researchcontents" style="display:none;">
					<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> ><a href="research.jsp">研究概况</a> > 研究简介</div>					
						<%
							while (rs.next()) {
						%>
						<p><%=rs.getString("content")%></p>
						<%
							break;
								}
						%>
					</div>
					<%
						} catch (Exception e) {
							e.printStackTrace();
						}
					%>


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