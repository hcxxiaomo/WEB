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
<%@page import="java.io.*,java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*,java.sql.*,com.jspsmart.upload.*"%>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>

<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>


<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%
	String type =  request.getParameter("type");
	int inttype =1;
	
	if(type ==null){
	%>
	<jsp:forward page="manage.jsp"></jsp:forward>
	<%
	}else	
	{	
	inttype =  Integer.parseInt(type);
	}

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
	}
	
	  	 String id = request.getParameter("id").toString();
 		 String title = request.getParameter("title").toString();
  	     String author = request.getParameter("author").toString();
     	 //String newsimage = request.getParameter("newsimage").toString();
  	     String content = request.getParameter("content1").toString();
  	     
  	     id = new String(id.getBytes("iso-8859-1"),"utf-8");
  	     title = new String(title.getBytes("iso-8859-1"),"utf-8");
  	     author = new String(author.getBytes("iso-8859-1"),"utf-8");
 		 //newsimage = new String(newsimage.getBytes("iso-8859-1"),"utf-8");
		 content = new String(content.getBytes("iso-8859-1"),"utf-8");

   	     String sql_title = "update "+talbe+" set title = '"+title+"' where id='"+id+"'";
   	     String sql_author = "update "+talbe+" set author = '"+author+"' where id='"+id+"'";
   	     String sql_content = "update  "+talbe+" set content = '"+content+"' where id='"+id+"'";
	
  	     
		 yjsh.executeUpdate(sql_title);
		 yjsh.executeUpdate(sql_author);
		 yjsh.executeUpdate(sql_content);
		 //response.sendRedirect("indexmanage.jsp");
%>
<jsp:forward page="indexmanage.jsp"></jsp:forward>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indexmanage_modified_update.jsp' starting page</title>
    
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
    This is my JSP page. <br>
  </body>
</html>
