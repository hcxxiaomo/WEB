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
<%@page import="java.util.regex.Pattern" %>
<%@page import="java.io.IOException"%>
<%@page import="java.util.regex.*"%>




<%
	Connection conn = null;

	String dbUrl = "jdbc:mysql://127.0.0.1:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";

	String sql_notices = "select * from worm_notices order by id desc limit 0 ,9";
	String sql_news = "select * from worm_news order by id desc limit 0 ,100";
	String sql_links = "select * from worm_links limit 0 ,6";	
	String sql_papers = "select * from worm_papers order by id desc limit 0 ,9";
	String sql_experiences = "select * from worm_experiences order by id desc limit 0 ,9";

	String sql_info = "select * from worm_others order by id limit 2,4";

	PreparedStatement stm_notices = null;
	PreparedStatement stm_news = null;
	PreparedStatement stm_links = null;	
	PreparedStatement stm_papers = null;
	PreparedStatement stm_experiences = null;
	PreparedStatement stm_teachers = null;
	PreparedStatement stm_elegances = null;
	PreparedStatement stm_images = null;
	PreparedStatement stm_manage = null;
	PreparedStatement stm_info = null;

	ResultSet rs_notices = null;
	ResultSet rs_news = null;
	ResultSet rs_links = null;
	ResultSet rs_papers = null;
	ResultSet rs_experiences = null;
	ResultSet rs_teachers = null;
	ResultSet rs_elegances = null;
	ResultSet rs_images = null;
	ResultSet rs_manage = null;
	ResultSet rs_info = null;

	String notices_title = null;
	String notices_content = null;
	String notices_auther = null;
	String notices_time = null;
	// String notices_number = null;	   	       	     

	String news_title = null;
	String news_content = null;
	//String news_image_content = null;
	String news_auther = null;
	String news_time = null;
	// String news_number = null;	   	  

	String papers_title = null;
	String papers_content = null;
	String papers_auther = null;
	String papers_time = null;
	//String papers_number = null;	 

	String experiences_title = null;
	String experiences_content = null;
	String experiences_auther = null;
	String experiences_time = null;
	//String experiences_number = null;	 
	
	String links_title = null;
	String links_links = null;
	
	//String info_address = null;
	
	
	String sql_botpic = "select * from worm_pictures order by id desc";
	PreparedStatement stm_botpic = null;
	ResultSet rs_botpic = null;

	String sql_flyword = "select * from worm_others where id = 7";
	PreparedStatement stm_flyword = null;
	ResultSet rs_flyword = null;	

	try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

		stm_notices = conn.prepareStatement(sql_notices);
		rs_notices = stm_notices.executeQuery(sql_notices);
		
		stm_news = conn.prepareStatement(sql_news);
		rs_news = stm_news.executeQuery(sql_news);
		
		
		stm_links = conn.prepareStatement(sql_links);
		rs_links = stm_links.executeQuery(sql_links);		
		
		stm_papers = conn.prepareStatement(sql_papers);
		rs_papers = stm_papers.executeQuery(sql_papers);

		stm_experiences = conn.prepareStatement(sql_experiences);
		rs_experiences = stm_experiences.executeQuery(sql_experiences);
		
		stm_info = conn.prepareStatement(sql_info);
		rs_info = stm_info.executeQuery(sql_info);
		
		stm_botpic = conn.prepareStatement(sql_botpic);
		rs_botpic = stm_botpic.executeQuery(sql_botpic);
		
		stm_flyword = conn.prepareStatement(sql_flyword);
		rs_flyword = stm_flyword.executeQuery(sql_flyword);
		

	} catch (Exception e) {
		e.printStackTrace();
	}
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>重庆市昆虫分子重点实验室</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />

<link href="ie_css.css" rel="stylesheet" type="text/css" />
<script src="main.js" type="text/javascript"></script>
</head>





<body>
	<div id="container">
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
		<!-- nav box end -->
		<div id="flywords">
					<%
				rs_flyword.next();
			 %>
			<p style="color:#ff0000;margin-top:5px;"><marquee><%=rs_flyword.getString("content") %></marquee></p>
			<!--<a herf="ddd-->
		</div>




		<div id="midbodyup">
			<div id="leftsidepicture">
				<div id="idContainer2" class="container">
				
				<%//以下为新闻中图片显示效果
					int count_newsImage = 0;
					 String s[] = new String[5];
					 String imageid[] = new String[5];
			        for(int count1 = 0;count1<5;count1++){
					s[count1]="/worm/image/01.jpg";
					imageid[count1]="#";
							//out.println(s[count]+"来自数组s["+count+"]");
						}
			 
					int count = 0;
					while (rs_news.next()) {
	
		//String newsImage = ;
        //  out.println(m.find());
     	// out.println(m.groupCount());
      	 Pattern p = Pattern.compile("<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>");//<img[^<>]*src=[\'\"]([0-9A-Za-z.\\/]*)[\'\"].(.*?)>");
     	 Matcher m = p.matcher(rs_news.getString("content"));
      
           // out.println(m.group());
           // out.println(m.group(1));
       
			for(int i = 0;i< 5;i++){
	
				 	while(m.find()){   
				//int count_new = 0;
					if(count>4){break;}
							s[count]=m.group(1);
							
				//out.println(s[count]+"来自数组s["+count+"]");
						//out.println(count_new);
						imageid[count]=rs_news.getString("id");
							count++;
							//out.print(rs_news.getString("id"));
							}	
							if(count>4){break;}
						}
		}
			%>
			
				
					<table id="idSlider2" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td class="td_f"><a	onclick="pgvSendClick({hottag:'ISD.SHOW.BANNER.SOFTMGR'});"	href="detail.jsp?type=1&id=<%=imageid[0]%>"><img src="<%=s[0] %>" width="400" height="245">
							</a>
							
							</td>
							<td class="td_f"><a	onclick="pgvSendClick({hottag:'ISD.SHOW.BANNER.SOFTMGR'});" href="detail.jsp?type=1&id=<%=imageid[1]%>"><img src="<%=s[1]%>" width="400" height="245">
							</a>
							</td>
							<td class="td_f"><a	onclick="pgvSendClick({hottag:'ISD.SHOW.BANNER.SOFTMGR'});" href="detail.jsp?type=1&id=<%=imageid[2]%>"><img src="<%=s[2] %>" width="400" height="245">
							</a>
							</td>
							<td class="td_f"><a onclick="pgvSendClick({hottag:'ISD.SHOW.BANNER.SOFTMGR'});" href="detail.jsp?type=1&id=<%=imageid[3]%>"><img src="<%=s[3] %>" width="400" height="245">
							</a>
							</td>
							<td class="td_f"><a	onclick="pgvSendClick({hottag:'ISD.SHOW.BANNER.SOFTMGR'});" href="detail.jsp?type=1&id=<%=imageid[4]%>"><img src="<%=s[4] %>" width="400" height="245">
							</a>
							</td>
							<%
				rs_news.beforeFirst();
				%>
		
						</tr>
					</table>
					<ul id="idNum" class="num"></ul>
				</div>
			</div>
	




				<div id="middlenews_box">
					<div class="noticetitle">
						通知公告<a href="notices.jsp"><div class="noticemore"></div>
						</a>
					</div>
					<ul class="side_menu">

						<%
						while (rs_notices.next()) {
	 							int number_notices = 23;
								notices_time = rs_notices.getString("time").substring(0, 10);
								
								char char_notice = rs_notices.getString("title").trim().charAt(0);
								if ((char_notice <= 'Z'&&char_notice >= 'A')||(char_notice <= 'z'&&char_notice >= 'a')){
									number_notices = 46;
								}
								if (rs_notices.getString("title").length() > number_notices) {
									notices_title = rs_notices.getString("title").substring(0,number_notices);
									notices_title += "...";
								} else {
									notices_title = rs_notices.getString("title");
								}
								
								
						%>
						<table class="table" style="border-top:#048dc6 1px dashed;">
						<tr>
								<td><img src="image/firstico.png"> </td>
								<td style="width:400px"><a
									href="detail.jsp?type=2&id=<%=rs_notices.getInt("id")%>"><%=notices_title%></a>
								</td>
								<td><a
									href="detail.jsp?type=2&id=<%=rs_notices.getInt("id")%>"><%=notices_time%></a>
								</td>
						</table>
						<%
// 							count_notices++;
// 								if (count_notices == 9)
// 									break;
							}
						%>
					</ul>

				</div>

		</div>

		<script language="javascript">
			//new SlideTrans("idContainer", "idSlider", 3).Run();

			var forEach = function(array, callback, thisObject) {
				if (array.forEach) {
					array.forEach(callback, thisObject);
				} else {
					for ( var i = 0, len = array.length; i < len; i++) {
						callback.call(thisObject, array[i], i, array);
					}
				}
			}
			var st = new SlideTrans("idContainer2", "idSlider2", 5, {
				Vertical : false
			});
			var nums = [];
			//插入数字
			for ( var i = 0, n = st._count - 1; i <= n;) {
				(nums[i] = $("idNum").appendChild(document.createElement("li"))).innerHTML = ++i;
			}
			forEach(nums, function(o, i) {
				o.onmouseover = function() {
					o.className = "on";
					st.Auto = false;
					st.Run(i);
				}
				o.onmouseout = function() {
					o.className = "";
					st.Auto = true;
					st.Run();
				}
			})
			//设置按钮样式
			st.onStart = function() {
				forEach(nums, function(o, i) {
					o.className = st.Index == i ? "on" : "";
				})
			}
			st.Run();
		</script>


		<div id="middlepicture">
			<center>
				<img src="/worm/image/middlepic.jpg">
			</center>
		</div>

		<div id="bottom">
			<div id="bottomleftnotice">
				<div class="templatemo_box">
					<h2>
						<a href="news.jsp"><div class="morethings"></div>
						</a>新闻动态
					</h2>
					<ul class="side_menu">
						<table class="table">
						<%
							int count_news = 0;
							while (rs_news.next()) {
								int number_news = 13;	
								news_time = rs_news.getString("time").substring(0, 10);

								char char_news = rs_news.getString("title").trim().charAt(0);
								if ((char_news <= 'Z'&&char_news >= 'A')||(char_news <= 'z'&&char_news >= 'a')){
									number_news = 23;
								}
								
								if (rs_news.getString("title").length() > number_news) {
									news_title = rs_news.getString("title").substring(0, number_news);
									news_title += "...";
								} else {
									news_title = rs_news.getString("title");
								}
						%>
							<tr height="22px;">
							<td><img src="image/firstico.png"> </td>
								<td style="width:195px;"><a
									href="detail.jsp?type=1&id=<%=rs_news.getInt("id")%>"><%=news_title%></a>
								</td>
								<td><a href="detail.jsp?type=1&id=<%=rs_news.getInt("id")%>"><%=news_time%></a>
								</td>
								</tr>

						<%
							count_news++;
								if (count_news == 9)
									break;
							}
						%>
						</table>
					</ul>

				</div>
			</div>
			<div id="bottommiddlepaper">
				<div class="templatemo_box">
					<h2>
						<a href="papers.jsp"><div class="morethings"></div>
						</a>专著论文
					</h2>
					<ul class="side_menu"  style="font-size:13px;">

                      	<marquee direction="up" behavior="scroll" scrollamount="2">
						<%
// 							int count_papers = 0;
							while (rs_papers.next()) {
								papers_time = rs_papers.getString("time").substring(0, 10);
								papers_title = rs_papers.getString("title");

						%>

							<img src="image/firstico.png" style="marginh-top:0px"> 
								<a href="detail.jsp?type=3&id=<%=rs_papers.getInt("id")%>"><%=papers_title%></a><br/>

						<%
// 							count_papers++;
// 								if (count_papers == 9)
// 									break;
							}
						%>
												</marquee>	
					</ul>
<!-- 					<div class="box_bottom"> -->
<!-- 						<span></span> -->
<!-- 					</div> -->
				</div>
			</div>
			<div id="bottomrightexprence">
				<div class="templatemo_box">
					<h2>
						<a href="experiences.jsp"><div class="morethings"></div>
						</a>经验交流
					</h2>
					<ul class="side_menu">
						<table class="table">
						<%
							int number_experiences = 13;
							while (rs_experiences.next()) {
								experiences_time = rs_experiences.getString("time").substring(0, 10);
	
								char char_experiences = rs_experiences.getString("title").trim().charAt(0);
								if ((char_experiences <= 'Z'&&char_experiences >= 'A')||(char_experiences <= 'z'&&char_experiences >= 'a')){
									number_experiences = 23;
								}
								
								
								if (rs_experiences.getString("title").length() > number_experiences) {
									experiences_title = rs_experiences.getString("title").substring(0, number_experiences);
									experiences_title += "...";
								} else {
									experiences_title = rs_experiences.getString("title");
								}
						%>



							<tr  height="22px;">
							<td><img src="image/firstico.png"> </td>
								<td style="width:195px"><a
									href="detail.jsp?type=4&id=<%=rs_experiences.getInt("id")%>"><%=experiences_title%></a>
								</td>
								<td><a
									href="detail.jsp?type=4&id=<%=rs_experiences.getInt("id")%>"><%=experiences_time%></a>
								</td>
							</tr>	

						<%
// 							count_experiences++;
// 								if (count_experiences == 9)
// 									break;
							}
						%>

						</table>

					</ul>

				</div>
			</div>
		</div>

		<div id="middlepicture">
			<center>
				<img src="/worm/image/middlepic.jpg">
			</center>
		</div>

		<div id="bottompicandlink">
			<div id="bottompic">
				<div class="titleWord">实验室风采</div>
				<div id="botpic">
					<div id="demo">
						<div id="indemo">
							<div id="demo1">
								<%
									int count_botpic = 0;
									while(rs_botpic.next()){
								 %>
								 <a href="picture.jsp"><img src="<%=rs_botpic.getString("picurl") %>" border="0"	height="150" width="200"/></a>
								 <%
									 count_botpic++;
									 if(count_botpic == 6){break;}
								 }
								  %>
							
							</div>
						</div>
					</div>
				</div>


				<div id="demo2"></div>
			</div>


			<div id="link">
				<div class="titleWord">
					友情链接<br />
					<br />
				</div>
				<div style="width:235px;height:120px;">
				<%
// 					int count_links = 0;
					while(rs_links.next()){
						links_title = rs_links.getString("imgurl");
					    links_links = rs_links.getString("link");
			 %>
				<div style="width:115px;height:40px;text-align:center;float:left;"><a href="<%=links_links%>" target="_blank"><img src="<%=links_title%>" width="110px" height="35px;"></a></div>
				<%
// 					count_links++;
// 					if(count_links == 10)
// 					break;
					}
					
				 %>
				</div>
			</div>
		</div>
		<%	String info[] = new String[4];
			count = 0;
			while(rs_info.next()){
				info[count++] = rs_info.getString("content");
			}
		
		 %>
		<div id="foot">
			<br />
			<div id="footword">
				 <%=info[0] %>&nbsp;&nbsp;<a href="manage/manage.jsp" target="_blank">后台管理</a>
				 &nbsp;&nbsp;<a href="drug/index.jsp" target="_blank">实验室查询</a><br />
				电话：<%=info[1] %> 传真：<%=info[2] %> 邮箱：<A
					href="mailto:<%=info[3] %>"><%=info[3] %></a><br />
			</div>
		</div>
		
		
</div>
		<script>
			var speed = 10;
			var tab = document.getElementById("demo");
			var tab1 = document.getElementById("demo1");
			var tab2 = document.getElementById("demo2");
			tab2.innerHTML = tab1.innerHTML;
			function Marquee() {
				if (tab2.offsetWidth - tab.scrollLeft <= 0)
					tab.scrollLeft -= tab1.offsetWidth
				else {
					tab.scrollLeft++;
				}
			}
			var MyMar = setInterval(Marquee, speed);
			tab.onmouseover = function() {
				clearInterval(MyMar)
			};
			tab.onmouseout = function() {
				MyMar = setInterval(Marquee, speed)
			};
		</script>
</body>
</html>
