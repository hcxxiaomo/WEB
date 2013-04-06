<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<%@ include file="checkvalid.jsp" %>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>
<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat" %>
<%@page import="java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*"%>
<%@page import="java.beans.Statement"%>





<%
	//String type =  (String)session.getAttribute("type");
	//String type =  request.getParameter("type");
	//int inttype =  Integer.parseInt(type);
	 

	String dbUrl = "jdbc:mysql://localhost:3306/worm";
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection conn = null;
	
	PreparedStatement statement = null;
	ResultSet rs = null;


	
		String title = request.getParameter("title");
		String author = request.getParameter("author");
		String type = request.getParameter("type");
		String content = request.getParameter("editorValue");

  	     
  	     title = new String(title.getBytes("iso-8859-1"),"utf-8");
  	     author = new String(author.getBytes("iso-8859-1"),"utf-8");
	 	type = new String(type.getBytes("iso-8859-1"),"utf-8");
		 content = new String(content.getBytes("iso-8859-1"),"utf-8");
		 
		 
		  //String type = request.getParameter("type");
			 int inttype =  Integer.parseInt(type);
		
			String item = null;
			String talbe = null;
				
			switch(inttype)
			{
		case 1: talbe =  " worm_news";
		item = "新闻动态";
		break;
		case 2: talbe =  " worm_notices";
		item = "通知公告";
		break;
		case 3: talbe =  " worm_papers";
		item = "专著论文";
		break;	
		case 4: talbe =  " worm_experiences";
		item = "经验交流";
		break;	
		case 5: talbe =  " worm_projects";
		item = "科研项目";
		break;	
		case 6: talbe =  " worm_achievements";
		item = "获奖成果";
		break;		
		case 7: talbe = " worm_groups";
		item = "团队文化";	
		break;			
		case 8: talbe = " worm_graduates";
		item = "研究生文化";	
		break;	
			
			
					
			}
	
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
	    String time = df.format(new Date());// new Date()为获取当前系统时间

try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);

   String sql_add = "insert into "+talbe+" (title,content,author,time) values('" +title+ "','" +content+ "','" +author+ "','" +time+ "')";

		statement = conn.prepareStatement(sql_add);
		statement.executeUpdate(sql_add);
		 

	} catch (Exception e) {
		e.printStackTrace();
	
}
	
	    
// 	   String sql_add = "insert into "+talbe+" (title,content,author,type,time) values('" +title+ "','" +content+ "','" +author+ "','yes','" +time+ "')";
// 	    yjsh.executeUpdate(sql_add);
	    
	    
// response.sendRedirect("indexmanage.jsp");

%>
<jsp:forward page="indexmanage.jsp">
<jsp:param name="type" value="<%=type%>" />
</jsp:forward>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>



  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indexmanage_update.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
  </body>
</html>
