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

<%
	//String number = request.getParameter("id");
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	//leader
	String sql_leader = "select * from worm_team where type = '团队带头人'";
	PreparedStatement stm_leader = null;
	ResultSet rs_leader = null;
	//professor
	String sql_pro = "select * from worm_team where type = '教授'";
	PreparedStatement stm_pro = null;
	ResultSet rs_pro = null;
	//doctor
	String sql_doctor = "select * from worm_team where type = '博士研究生'";
	PreparedStatement stm_doctor = null;
	ResultSet rs_doctor = null;
	//master
	String sql_master = "select * from worm_team where type = '硕士研究生'";
	PreparedStatement stm_master = null;
	ResultSet rs_master = null;
	//other
	String sql_other= "select * from worm_team where type = '其它人员'";
	PreparedStatement stm_other = null;
	ResultSet rs_other = null;
	//phd
	String sql_phd= "select * from worm_team where type = '博士后'";
	PreparedStatement stm_phd = null;
	ResultSet rs_phd = null;
	//instructor
	String sql_ins= "select * from worm_team where type = '讲师'";
	PreparedStatement stm_ins = null;
	ResultSet rs_ins = null;
	//graduate
	String sql_gra= "select * from worm_team where type = '毕业生'";
	PreparedStatement stm_gra = null;
	ResultSet rs_gra = null;

	String sql_info = "select * from worm_others order by id limit 2,4";
	PreparedStatement stm_info = null;
	ResultSet rs_info = null;
	
	String sql_links = "select * from worm_links";	
	PreparedStatement stm_links = null;
	ResultSet rs_links = null;

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
	//leader
		stm_leader = conn.prepareStatement(sql_leader);
		rs_leader = stm_leader.executeQuery(sql_leader);
	//professor
		stm_pro = conn.prepareStatement(sql_pro);
		rs_pro = stm_pro.executeQuery(sql_pro);
	//doctor
		stm_doctor = conn.prepareStatement(sql_doctor);
		rs_doctor = stm_doctor.executeQuery(sql_doctor);
	//master
		stm_master = conn.prepareStatement(sql_master);
		rs_master = stm_master.executeQuery(sql_master);
	//other
		stm_other= conn.prepareStatement(sql_other);
		rs_other = stm_other.executeQuery(sql_other);
		//other
		stm_phd= conn.prepareStatement(sql_phd);
		rs_phd = stm_phd.executeQuery(sql_phd);
		//other
		stm_gra= conn.prepareStatement(sql_gra);
		rs_gra = stm_gra.executeQuery(sql_gra);
		//other
		stm_ins= conn.prepareStatement(sql_ins);
		rs_ins = stm_ins.executeQuery(sql_ins);
		
stm_info = conn.prepareStatement(sql_info);
rs_info = stm_info.executeQuery(sql_info);	

stm_links= conn.prepareStatement(sql_links);
rs_links = stm_links.executeQuery(sql_links);

	
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>研究人员</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
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


	<div id="container" style="height:auto;">
		
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
<!-- 			<div  style="height:auto;margin-left:30px;"> -->
<!-- 				<div style="height:auto;"> -->
<!-- 					<div > -->
	 <div id="pagebody">
 
                			<div class="mainbobyleft">
                			<div class="lefttitle">常用链接</div>
                			<%
                			while(rs_links.next()){
                			 %>
                			<div class="leftpic"><a href="<%=rs_links.getString("link")%>" target="_blank"><img src="<%=rs_links.getString("imgurl")%>" width="110px" height="35px;"></a><br/></div>
                			<%
                				}
                			 %>
                			</div>
                		
                			<div style="margin-left:200px;">
                			<div style="text-align:left;font-size:13px;">当前位置: <a href="index.jsp">首页</a> > <a href="team.jsp">研究队伍</a></div>
                			
						<div class="teacher">

							<div class="teacher_row">

								<div class="teacher_l" >团队带头人</div>

								<div class="teacher_r">
								<%
									while(rs_leader.next())
									{
								 %>
								 
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_leader.getString("id")%>"><%=rs_leader.getString("name") %></a>

									</div>
								<%
									}
									
								 %>
								</div>

								<div class="teacher_l" >教授</div>

								<div class="teacher_r">
								<%
									while(rs_pro.next())
									{
								 %>
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_pro.getString("id")%>"><%= rs_pro.getString("name") %></a>

									</div>
								<%
									}
									
								 %>
								</div>
								
								

							<div class="teacher_l">讲师</div>

								<div class="teacher_r">
								<%
									while(rs_ins.next())
									{
								 %>
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_ins.getString("id")%>"><%= rs_ins.getString("name") %></a>

									</div>
								<%
									}
									
								 %>
								</div>
								
								<div class="teacher_l">博士后</div>

								<div class="teacher_r">
									<%
									while(rs_phd.next())
									{
									
								 %>
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_phd.getString("id")%>"><%= rs_phd.getString("name") %></a>

									</div>
								<%
										//break;
									}
									
								 %>
								</div>
								
								<div class="teacher_l">博士研究生</div>

								<div class="teacher_r">
									<%
									while(rs_doctor.next())
									{
									
								 %>
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_doctor.getString("id")%>"><%= rs_doctor.getString("name") %></a>

									</div>
								<%
										//break;
									}
									
								 %>
								</div>


								<div class="teacher_l">硕士研究生</div>

								<div class="teacher_r">
									<%
									while(rs_master.next())
									{
								 %>
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_master.getString("id")%>"><%= rs_master.getString("name") %></a>

									</div>
								<%
									}
									
								 %>

								</div>

								<div class="teacher_l">毕业生</div>
								<div class="teacher_r">
									<%
									while(rs_gra.next())
									{
								 %>
								 
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_gra.getString("id")%>"><%=rs_gra.getString("name") %></a>

									</div>
								<%
									}
	
									
								 %>

								</div>

								<div class="teacher_l">其它人员</div>
								<div class="teacher_r">
									<%
									while(rs_other.next())
									{
								 %>
								 
									<div class="teacher_name">

										<a href="team_detail.jsp?id=<%=rs_other.getString("id")%>"><%=rs_other.getString("name") %></a>

									</div>
								<%
									}

									
									} catch (Exception e) {
											e.printStackTrace();
										}
								 %>

								</div>
							</div>
						</div>
					</div>
					<!--teacher-->

				</div>
				<!--中间主要内容-->
		
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
				 <%=info[0] %><a href="manage/manage.jsp">后台管理</a><br />
				电话：<%=info[1] %> 传真：<%=info[2] %> 邮箱：<A
					href="mailto:jjwang7008@yahoo.com"><%=info[3] %></a><br />
			</div>
		</div>

</div>


</body>
</html>
