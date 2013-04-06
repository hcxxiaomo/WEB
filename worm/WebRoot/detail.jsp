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
	String id = request.getParameter("id");
	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	String sql = null;
	PreparedStatement stm = null;
	ResultSet rs = null;

String sql_info = "select * from worm_others order by id limit 2,4";
PreparedStatement stm_info = null;
ResultSet rs_info = null;

String type =  request.getParameter("type");
//session.setAttribute("type", type);
int inttype =  Integer.parseInt(type);


String item = null;
String link = null;


switch(inttype)
{
	case 1: sql =  "select * from worm_news where id='" + id + "'";
	item = "新闻动态";
	link = "news.jsp";
	break;
	case 2: sql =  "select * from worm_notices where id='" + id + "'";
	item = "通知公告";
	link = "notices.jsp";
	break;
	case 3: sql =  "select * from worm_papers where id='" + id + "'";
	item = "专著论文";
	link = "papers.jsp";
	break;	
	case 4: sql =  "select * from worm_experiences where id='" + id + "'";
	item = "经验交流";
	link = "experiences.jsp";
	break;	
	case 5: sql =  "select * from worm_projects where id='" + id + "'";
	item = "科研项目";
	link = "projects.jsp";
	break;	
	case 6: sql =  "select * from worm_achievements where id='" + id + "'";
	item = "获奖成果";
	link = "ach.jsp";
	break;		
	case 7: sql = "select * from worm_groups where id='" + id + "'";
	item = "团队文化";	
	link = "groups.jsp";
	break;			
	case 8: sql = "select * from worm_graduates where id='" + id + "'";
	item = "研究生文化";
	link = "graduates.jsp";	
	break;	
}




	String title = null;
	//char title_check;
	String where = null;
	String time = null;
	String author = null;
	String content = null;
	
	String position = "center";
	String size = "24px";

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		stm = conn.prepareStatement(sql);
		rs = stm.executeQuery(sql);
		
		stm_info = conn.prepareStatement(sql_info);
		rs_info = stm_info.executeQuery(sql_info);

		

	} catch (Exception e) {
		e.printStackTrace();
	}
	
		rs.next();
		title = rs.getString("title");
		
		
		//title_check = (char)title.substring(0,1);
		time = rs.getString("time").substring(0, 10);
		author = rs.getString("author");
		content = rs.getString("content");
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title><%=item %>正文</title>

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
		var path = document.getElementsByTagName("link")[0].href;
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

		<div style="text-align:left;padding-top:8px;padding-bottom:12px;">
			当前位置: <a href="index.jsp">首页</a> > <a href="<%=link%>"><%=item %></a> >
			正文
		</div>
		<div>
			<div>
			
			<%
		
		char char_title = title.trim().charAt(0);
		if ((char_title <= 'Z'&& char_title >= 'A')||(char_title <= 'z'&&char_title >= 'a')){
			 position = "left";
			 size = "20px";
		}
		%>
				<div style="text-align:<%=position %>; font-size:<%=size %>; margin:0px auto;"><%=title%></div>
				<div style="margin:0px auto;padding-top:10px;padding-bottom:10px;">
				<!--  style="border-bottom:1px solid #7B68EE border:1px solid #7B68EE; -->
					<table style="text-align:left; width:950px;margin:0px auto;border:#7B68EE 1px solid;">
						<tr>
							<td style="width:260px;"></td>
							<td >作者：<%=author%></td>
							<td style="width:400px;">时间：<%=time%></td>
						</tr>
					</table>
				</div>
			</div>
			<div style="margin-top:15px;">
				<p>
					<%=content%>
				</p>
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
