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
<%@page import="java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*,com.jspsmart.upload.*"%>
<%@page import="java.beans.Statement"%>



<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%
	//String type =  (String)session.getAttribute("type");
	//String type =  request.getParameter("type");
	//int inttype =  Integer.parseInt(type);
	 

	
		String title = request.getParameter("title");
		String author = request.getParameter("author");
		String type = request.getParameter("type");
		String content = request.getParameter("content1");

  	     
  	     title = new String(title.getBytes("utf-8"),"utf-8");
  	     author = new String(author.getBytes("utf-8"),"utf-8");
	 	type = new String(type.getBytes("utf-8"),"utf-8");
		 content = new String(content.getBytes("utf-8"),"utf-8");
		 
		 
		  //String type = request.getParameter("type");
			 int inttype =  Integer.parseInt(type);
		
			String item = null;
			String talbe = null;
				
			switch(inttype)
			{
				case 1: talbe =  "yjsh_news ";
				item = "新闻动态";
				break;
				case 2: talbe =  "yjsh_notices ";
				item = "通知公告";
				break;
				case 3: talbe =  "yjsh_hhdjt";
				item = "含弘大讲堂";
				break;	
				case 4: talbe =  "yjsh_hhxzjt";
				item = "含弘学子讲堂";
				break;	
				case 5: talbe =  "yjsh_jobs";
				item = "就业信息";
				break;	
				case 6: talbe =  "yjsh_practices";
				item = "社会实践";
				break;				
				case 7: talbe =  "yjsh_files";
				item = "下载中心";
				break;							
			}
	
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
	    String time = df.format(new Date());// new Date()为获取当前系统时间
	   String sql_add = "insert into "+talbe+" (title,content,author,type,time) values('" +title+ "','" +content+ "','" +author+ "','yes','" +time+ "')";
	    yjsh.executeUpdate(sql_add);
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
