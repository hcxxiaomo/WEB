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
	
	  	 String id = request.getParameter("id").toString();
 		 String title = request.getParameter("title").toString();
  	     String author = request.getParameter("author").toString();

  	     String content = request.getParameter("content1").toString();
  	     String type = request.getParameter("type").toString();
  	     
  	     id = new String(id.getBytes("iso-8859-1"),"utf-8");
  	     title = new String(title.getBytes("iso-8859-1"),"utf-8");
  	     author = new String(author.getBytes("iso-8859-1"),"utf-8");

		 content = new String(content.getBytes("iso-8859-1"),"utf-8");
		 type = new String(type.getBytes("iso-8859-1"),"utf-8");

// SmartUpload su = new SmartUpload();
	
// 	long file_size_max = 4000000;
// 	String fileName2 = "", ext = "", testvar = "";
// 	String url = "upload/"; //应保证在根目录中有此目录的存在（也就是说需要自己建立相应的文件夹）
	//初始化
// 	su.initialize(pageContext);
	//只允许上载此类文件

		//su.setAllowedFilesList("jpg,gif");//此处的文件格式可以根据需要自己修改
		//上载文件

// 		su.setDeniedFilesList("cmd,asp,jsp,exe,run,sh");
// 		su.upload();

// 		String title = su.getRequest().getParameter("title");
// 		String author = su.getRequest().getParameter("author");
// 		String type = su.getRequest().getParameter("type");
// 		String id = su.getRequest().getParameter("id");
// 		String content = su.getRequest().getParameter("content1");
// 		String filemodi = su.getRequest().getParameter("filemodi");

  	     
//   	     title = new String(title.getBytes("utf-8"),"utf-8");
//   	     author = new String(author.getBytes("utf-8"),"utf-8");
// 	 	 type = new String(type.getBytes("utf-8"),"utf-8");
// 	     id = new String(id.getBytes("utf-8"),"utf-8");	 	
// 		 content = new String(content.getBytes("utf-8"),"utf-8");
// 		 filemodi = new String(filemodi.getBytes("utf-8"),"utf-8");	 	 
		 
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
	
  	     
  	     	 String sql_title = "update "+talbe+" set title = '"+title+"' where id='"+id+"'";
	   	     String sql_author = "update "+talbe+" set author = '"+author+"' where id='"+id+"'";
	   	     String sql_content = "update  "+talbe+" set content = '"+content+"' where id='"+id+"'";
	   	     yjsh.executeUpdate(sql_title);
			 yjsh.executeUpdate(sql_author);
			 yjsh.executeUpdate(sql_content);
		
		 //response.sendRedirect("indexmanage.jsp");
%>
<jsp:forward page="indexmanage.jsp">
<jsp:param name="type" value="<%=type%>" />
</jsp:forward>

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

  </body>
</html>
