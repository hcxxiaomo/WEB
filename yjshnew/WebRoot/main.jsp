<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path_main2 = request.getContextPath();
String basePath_main2 = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path_main2+"/";
%>
<%-- <%@ include file="sql/newssql.jsp" %> --%>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>
<%@page import="java.util.regex.Pattern" %>
<%@page import="java.io.IOException"%>
<%@page import="java.util.regex.*"%>
<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

	<%
	
	String sql_news_8 =  "select * from yjsh_news where type ='yes' order by id desc limit 0,10";
   	ResultSet rs_news_8 = yjsh.executeQuery(sql_news_8);
   	String sql_notices_8 =  "select * from yjsh_notices where type ='yes' order by id desc limit 0,10";
   	ResultSet rs_notices_8 = yjsh.executeQuery(sql_notices_8);
   	String sql_hhdjt_4 =  "select * from yjsh_hhdjt where type ='yes' order by id desc limit 0,4";
   	ResultSet rs_hhdjt_4 = yjsh.executeQuery(sql_hhdjt_4);   
   	String sql_hhxzjt_4 =  "select * from yjsh_hhxzjt where type ='yes' order by id desc limit 0,4";
   	ResultSet rs_hhxzjt_4 = yjsh.executeQuery(sql_hhxzjt_4);  
   	String sql_jobs_8 =  "select * from yjsh_jobs where type ='yes' order by id desc limit 0,10";
   	ResultSet rs_jobs_8 = yjsh.executeQuery(sql_jobs_8);  	
   	String sql_practices_8 =  "select * from yjsh_practices where type ='yes' order by id desc limit 0,10";
   	ResultSet rs_practices_8 = yjsh.executeQuery(sql_practices_8);  	
   	
   	String sql_news_pic =  "select * from yjsh_news where type ='yes' order by id desc limit 0,20";
   	ResultSet rs_news_pic = yjsh.executeQuery(sql_news_pic); 
   	String sql_hhdjt_fly = "select * from yjsh_hhdjt where type ='yes' order by id desc limit 0,1";
   	ResultSet rs_hhdjt_fly = yjsh.executeQuery(sql_hhdjt_fly); 
   	
   	String sql_oldlinks = "select * from yjsh_others where id limit 6,11";
   	ResultSet rs_oldlink = yjsh.executeQuery(sql_oldlinks); 
   	
   	String sql_links = "select * from yjsh_links";
	ResultSet rs_links = yjsh.executeQuery(sql_links);
	
	String sql_pic = "select * from yjsh_pictures order by id desc limit 0,6";
   	ResultSet rs_pic= yjsh.executeQuery(sql_pic); 
	
	%>

<script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath_main2%>">
 
  
    <title>My JSP 'main2.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	

	<style type="text/css">
	img{border:0;}
	</style>
<style type="text/css">

</style>
  </head>
  
  <body>
  
    
<DIV id=ad1 style="Z-INDEX: 999999" >
	<div style="width:150px;height:95px;background-image:url(images/hhdjt.jpg);overflow:hidden"><br/>
	
	<%
		rs_hhdjt_fly.next();
	 %>
	<A href="details.jsp?type=3&id=<%=rs_hhdjt_fly.getString("id") %>" target=_blank ><font color="#ffffff"><%=rs_hhdjt_fly.getString("title") %></font></A>
	</div>
	</DIV>
	<SCRIPT type=text/javascript>
	        var ad1=new AdMove("ad1");
	        ad1.Run();
</SCRIPT>
  
  <div id="container"  style="text-align:left;background-image:url(images/containernew.jpg)  ">
   <table width="950px" >
   	<tr>
   			<td style="height:300px;width:300px;">
<!--    				    <div id="leftsidenotice"> -->
      <div class="pretty" style="background:url(images/forum.jpg);padding-left:6px;margin-left:8px;background-repeat:no-repeat;">
        <div class="titleWord"><br/>
          <br/>
          通知公告<div class="more"><a href="titles.jsp?type=2"><img src="images/more.jpg"/></a></div>
          <br/>
          <br/>
        </div>
<!--         <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!--         <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!--         <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!--         <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
<!--         <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!--         <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!--         <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!--         <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->

						<table class="table">
     		<%
							String notices_time = null;
							String notices_title = null;
							while (rs_notices_8.next()) {
								notices_time = rs_notices_8.getString("time").substring(0, 10);

								if (rs_notices_8.getString("title").length() > 13) {
									notices_title = rs_notices_8.getString("title").substring(0, 13);
									notices_title += "...";
								} else {
									notices_title = rs_notices_8.getString("title");
								}
						%>
					


							<tr>
								<td style="width:200px;text-align:left;"><a	href="details.jsp?type=2&id=<%=rs_notices_8.getInt("id")%>"  target="_blank"><%=notices_title%></a>
								</td>
								<td><a href="details.jsp?type=2&id=<%=rs_notices_8.getInt("id")%>"  target="_blank"><%=notices_time%></a>
								</td>
								</tr>
					
						<%
						
							}
						%>
					</table>
        <br/>
      </div>

			</td>
   			<td style="height:300px;width:7px;"></td>
   			<td style="height:300px;width:300px;text-align:left;">
				 <div id="middlepicture"  style="text-align:left;border:1px solid #CCC;margin-left:0px;margin-top:-13px;">
			     <div id="myFocus" class="mF_liuzg" style="text-align:left;" >
			     <div class="loading"><span></span></div>
        <!--载入画面-->
        
        <ul class="pic" style="text-align:left;">
          <!--内容列表-->
          <%//以下为新闻中图片显示效果
					int count_newsImage = 0;
					 String s[] = new String[4];
					 String imageid[] = new String[4];
			        for(int count1 = 0;count1<4;count1++){
					s[count1]="/yjshnew/images/01.jpg";
					imageid[count1]="#";
							//out.println(s[count]+"来自数组s["+count+"]");
						}
			 
					int count_image = 0;
					while (rs_news_pic.next()) {
	
		//String newsImage = ;
        //  out.println(m.find());
     	// out.println(m.groupCount());
      	 Pattern p = Pattern.compile("<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>");//<img[^<>]*src=[\'\"]([0-9A-Za-z.\\/]*)[\'\"].(.*?)>");
     	 Matcher m = p.matcher(rs_news_pic.getString("content"));
      
           // out.println(m.group());
           // out.println(m.group(1));
       
			for(int i = 0;i< 4;i++){
	
				 	while(m.find()){   
				//int count_new = 0;
					if(count_image>3){break;}
					s[count_image]=m.group(1);
							
				//out.println(s[count]+"来自数组s["+count+"]");
						//out.println(count_new);
				imageid[count_image]=rs_news_pic.getString("id");
							count_image++;
							//out.print(rs_news.getString("id"));
							}	
							if(count_image>3){break;}
						}
		}
		for(int i = 0;i<4;i++){		
          %>
          
          <li><a href="details.jsp?type=1&id=<%=imageid[i]%>"><img src="<%=s[i] %>"  /></a></li>
<!--           <li><a href="#"><img src="images/02.jpg"  /></a></li> -->
<!--           <li><a href="#"><img src="images/03.jpg" /></a></li> -->
<!--           <li><a href="#"><img src="images/04.jpg" /></a></li> -->

			<%
			}
			 %>
        </ul>
      </div>
    </div>
			</td>
   			<td style="height:300px;width:7px;"></td>
   			<td style="height:300px;width:300px;">
				  <div class="pretty" style="background:url(images/forum.jpg);padding-left:6px;background-repeat:no-repeat;">
			        <div class="titleWord"><br/>
			          <br/>
			          新闻动态 <div class="more"><a href="titles.jsp?type=1"><img src="images/more.jpg"/></a></div>
			          <br/>
			          <br/>
			         
			        </div>
<!-- 			         <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!-- 			        <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!-- 			        <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!-- 			        <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
<!-- 			        <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!-- 			        <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!-- 			        <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!-- 			        <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
     					<table class="table">
     <%
							String news_time = null;
							String news_title = null;
							while (rs_news_8.next()) {
								news_time = rs_news_8.getString("time").substring(0, 10);

								if (rs_news_8.getString("title").length() > 13) {
									news_title = rs_news_8.getString("title").substring(0, 13);
									news_title += "...";
								} else {
									news_title = rs_news_8.getString("title");
								}
						%>
						


							<tr>
								<td style="width:200px;text-align:left;"><a
									href="details.jsp?type=1&id=<%=rs_news_8.getInt("id")%>"  target="_blank"><%=news_title%></a>
								</td>
								<td><a href="details.jsp?type=1&id=<%=rs_news_8.getInt("id")%>"  target="_blank"><%=news_time%></a>
								</td>
						
						<%
						
							}
						%>
     	</table>

        <br/>
      </div>
			</td>
   	</tr>
   <tr>
   			<td style="height:275px;width:300px;">
				 <div class="pretty"  style="background:url(images/forum.jpg);margin-left:6px;padding-left:6px;background-repeat:no-repeat;">
		        <div class="titleWord"><br/>
		          <br/>
		          含弘讲堂<div class="more"><a href="titles.jsp?type=3"><img src="images/more.jpg"/></a></div>
		          <br/>
		          <br/>
        </div>
      				<p style="font-size:12px;color:#048dc6;"><strong>含弘大讲堂</strong></p>
<table class="table">
					<%
							String hhdjt_time = null;
							String hhdjt_title = null;
							while (rs_hhdjt_4.next()) {
								hhdjt_time = rs_hhdjt_4.getString("time").substring(0, 10);

								if (rs_hhdjt_4.getString("title").length() > 13) {
									hhdjt_title = rs_hhdjt_4.getString("title").substring(0, 13);
									hhdjt_title += "...";
								} else {
									hhdjt_title = rs_hhdjt_4.getString("title");
								}
						%>
						


							<tr>
								<td style="width:200px;text-align:left;"><a
									href="details.jsp?type=3&id=<%=rs_hhdjt_4.getInt("id")%>"  target="_blank"><%=hhdjt_title%></a>
								</td>
								<td><a href="details.jsp?type=3&id=<%=rs_hhdjt_4.getInt("id")%>"  target="_blank"><%=hhdjt_time%></a>
								</td>
						
						<%
						
							}
						%>
			</table>
						<p style="font-size:12px;color:#048dc6;"><strong>含弘学子讲堂</strong></p>
	<table class="table">
					<%
							String hhxzjt_time = null;
							String hhxzjt_title = null;
							while (rs_hhxzjt_4.next()) {
								hhxzjt_time = rs_hhxzjt_4.getString("time").substring(0, 10);

								if (rs_hhxzjt_4.getString("title").length() > 13) {
									hhxzjt_title = rs_hhxzjt_4.getString("title").substring(0, 13);
									hhxzjt_title += "...";
								} else {
									hhxzjt_title = rs_hhxzjt_4.getString("title");
								}
						%>


					


							<tr>
								<td style="width:200px;text-align:left;"><a
									href="details.jsp?type=4&id=<%=rs_hhxzjt_4.getInt("id")%>"  target="_blank"><%=hhxzjt_title%></a>
								</td>
								<td><a href="details.jsp?type=4&id=<%=rs_hhxzjt_4.getInt("id")%>"  target="_blank"><%=hhxzjt_time%></a>
								</td>
					
						<%
						
							}
						%>
				</table>
     

        <br/>
      </div>
			</td>
   			<td style="height:275px;width:7px;"></td>
   			<td style="height:275px;width:300px;">
				<div class="pretty" style="background:url(images/forum.jpg);padding-left:6px;background-repeat:no-repeat;">
		        <div class="titleWord" ><br/>
		          <br/>
		          就业信息<div class="more"><a href="titles.jsp?type=5"><img src="images/more.jpg"/></a></div>
		          <br/>
		          <br/>
		        </div>
<!-- 		         <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!-- 			        <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!-- 			        <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!-- 			        <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
<!-- 			        <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!-- 			        <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!-- 			        <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!-- 			        <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
 					<table class="table">
 						<%
							String jobs_time = null;
							String jobs_title = null;
							while (rs_jobs_8.next()) {
								jobs_time = rs_jobs_8.getString("time").substring(0, 10);

								if (rs_jobs_8.getString("title").length() > 13) {
									jobs_title = rs_jobs_8.getString("title").substring(0, 13);
									jobs_title += "...";
								} else {
									jobs_title = rs_jobs_8.getString("title");
								}
						%>



							<tr>
								<td style="width:200px;text-align:left;"><a
									href="details.jsp?type=5&id=<%=rs_jobs_8.getInt("id")%>"  target="_blank"><%=jobs_title%></a>
								</td>
								<td><a href="details.jsp?type=5&id=<%=rs_jobs_8.getInt("id")%>"  target="_blank"><%=jobs_time%></a>
								</td>
					
						<%
						
							}
						%>
     				</table>
     

        <br/>
      </div>
			</td>
   			<td style="height:275px;width:7px;"></td>
   			<td style="height:275px;width:300px;">
					<div class="pretty"  style="background:url(images/forum.jpg);padding-left:6px;background-repeat:no-repeat;">
			        <div class="titleWord"><br/>
			          <br/>
			          社会实践<div class="more"><a href="titles.jsp?type=6"><img src="images/more.jpg"/></a></div>
			          <br/>
			          <br/>
			        </div>
<!-- 			         <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!-- 						        <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!-- 						        <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!-- 						        <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
<!-- 						        <p><a href="#">研究生学院辅导员走访学生暑期……</a></p> -->
<!-- 						        <p><a href="#">我院80级校友李显春博士学术报告…… </a></p> -->
<!-- 						        <p><a href="#">研究生学院积极开展大走访活动……</a></p> -->
<!-- 						        <p><a href="#">重庆市教育委员会关于开展2012年……</a></p> -->
						<table class="table">
			      <%
							String practices_time = null;
							String practices_title = null;
							while (rs_practices_8.next()) {
								practices_time = rs_practices_8.getString("time").substring(0, 10);

								if (rs_practices_8.getString("title").length() > 13) {
									practices_title = rs_practices_8.getString("title").substring(0, 13);
									practices_title += "...";
								} else {
									practices_title = rs_practices_8.getString("title");
								}
						%>
						


							<tr>
								<td style="width:200px;text-align:left;"><a
									href="details.jsp?type=6&id=<%=rs_practices_8.getInt("id")%>" target="_blank"><%=practices_title%></a>
								</td>
								<td><a href="details.jsp?type=6&id=<%=rs_practices_8.getInt("id")%>"  target="_blank"><%=practices_time%></a>
								</td>
					
						<%
						
							}
						%>
				</table>
			        <br/>
			      </div>
			</td>
   	</tr>
   	<tr>
   			<td  colspan="5" style="height:165px;width:900px;">
				    <div class="titleWord" style="margin-top:5px;">图片展示</div>
				    <div id="botpic" style="margin-left:7px;">
				      <div id="demo">
				        <div id="indemo">
				          <div id="demo1"> 
				          	<%
				          		while(rs_pic.next()){
				          	 %>
				          
				          				   <a href="pictures.jsp"  target="_blank"><img src="<%=rs_pic.getString("picurl")%>" border="0" width="240px" height="150px" /> </a> 
				          	
				          	<%
				          		}
				          	 %>
				          				   
<!-- 				          				   <a href="#"><img src="images/02.jpg" border="0" height="150" /> </a>  -->
<!-- 				                           <a href="#"><img src="images/03.jpg" border="0" height="150" /> </a>  -->
<!-- 				                           <a href="#"><img src="images/04.jpg" border="0" height="150" /> </a> -->
<!-- 				                           <a href="#"><img src="images/05.jpg" border="0" height="150" /> </a>  -->
<!-- 				                           <a href="#"><img src="images/03.jpg" border="0" height="150" /> </a>  -->
				                           </div>
				          <div id="demo2"></div>
				        </div>
				      </div>
				    </div>
			</td>
   	</tr>
   	</table>
   		<%
   			String link[] = new String[5];
   			int count_link = 0;
   			while(rs_oldlink.next()){
   			link[count_link] = rs_oldlink.getString("content");
   			count_link++;
   			}
   		
   		 %>
   	
   	
   	<table>
   <tr>
   			<td colspan="5"  style="height:20px;width:760px;">
   				 <div class="titleWord" style="margin-top:5px;">&nbsp;访问旧版</div>
   			</td>
   </tr>
   <tr>
   			<td style="height:80px;width:187px;">
				<a href="<%=link[0]%>"><img src="images/yjsh.png" height="50" width="175"/></a>
			</td>
   			<td style="height:80px;width:187px;">
   				<a href="<%=link[1]%>"><img src="images/cms.png" height="50" width="175"/></a>
   			</td>
   			<td style="height:80px;width:187px;">
   				<a href="<%=link[2]%>"><img src="images/gzz.png" height="50" width="175"/></a>
   			</td>
   			<td style="height:80px;width:187px;">
   				<a href="<%=link[3]%>"><img src="images/bjb.png" height="50" width="175"/></a>
   			</td>
   			<td style="height:80px;width:187px;">
   				<a href="<%=link[4]%>n"><img src="images/yst.png" height="50" width="175"/></a>
   			</td>
   	</tr>
   	   <tr>
   			<td style="height:20px;width:190px;">
				<wb:follow-button uid="2802772780" type="red_2" width="100%" height="24" ></wb:follow-button>
			</td>
   			<td style="height:20px;width:190px;">
   				<wb:follow-button uid="2562547300" type="red_2" width="100%" height="24" ></wb:follow-button>
   			</td>
   			<td style="height:20px;width:190px;">
   				<wb:follow-button uid="3107008407" type="red_2" width="100%" height="24" ></wb:follow-button>
   			</td>
   			<td style="height:20px;width:190px;">
   				<wb:follow-button uid="2805856492" type="red_2" width="100%" height="24" ></wb:follow-button>
   			</td>
   			<td style="height:20px;width:190px;">
   				<wb:follow-button uid="2773399790" type="red_2" width="100%" height="24" ></wb:follow-button>
   			</td>
   	</tr>
   	<tr>
   			<td style="height:80px;;width:190px;">
   				<a href="titles.jsp?type=7"><img src="images/download.jpg" width="160" height="80" /></a>
   			</td>
   			<td style="height:80px;;width:190px;">
   				<a href="titles.jsp?type=8"><img src="images/magazine.jpg" width="160" height="80" /></a>
   			</td>
   			<td colspan="3"  style="height:80px;width:680px;">
   				 <div id="friendlink">
      <div class="titleWord"  style="margin-top:5px;">友情链接</div>
      <table style="text-align:center;margin-top:13px;" >
        <tr >
        
     		<!-- 下载的链接已修改 -->
	<a href="http://www.moe.gov.cn/"><img src="images/jyb.jpg" width="95" height="50" /></a>
	<a href="http://www.swu.edu.cn/"><img src="images/swu.jpg" width="95" height="50" /></a>
	<a href="http://graduate.cqu.edu.cn/"><img src="images/cdyjsy.jpg" width="95" height="50" /></a>
	<a href="http://dwxcb.swu.edu.cn/"><img src="images/dwxcb.jpg" width="95" height="50" /></a>
	<a href="http://ygb.swu.edu.cn/final/index.html"><img src="images/ygb.jpg" width="95" height="50" /></a>
	<a href="http://pgs.swu.edu.cn/new/index.php"><img src="images/yjsy.jpg" width="95" height="50" /></a>
        </tr>
			</table>
			


    </div>
   			</td>
   	</tr>
   </table> 
   
   </div>
       <script>
//以下为下面图片滚动效果
var speed = 10;//速度数值越大速度越慢
			var tab = document.getElementById("demo");
			var tab1 = document.getElementById("demo1");
			var tab2 = document.getElementById("demo2");
			tab2.innerHTML = tab1.innerHTML;
			function Marquee() {
				if (tab2.offsetWidth - tab.scrollLeft <= 0)/*offsetWidth 是对象的可见宽度*/
					tab.scrollLeft -= tab1.offsetWidth;/*scrollWidth 是对象的实际内容的宽，不包边线宽度*/
				else {
					tab.scrollLeft++;
				}
			}
			var MyMar = setInterval(Marquee, speed);
			tab.onmouseover = function() {
				clearInterval(MyMar);
			};
			tab.onmouseout = function() {
				MyMar = setInterval(Marquee, speed);
			};
</script>
   </body>
</html>