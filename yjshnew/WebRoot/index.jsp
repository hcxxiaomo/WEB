<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    <base href="<%=basePath%>">
    
    <title>西南大学研究生组织</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<link href="css/stylenew.css" rel="stylesheet" type="text/css" />
	<script src="js/main.js" type="text/javascript"></script>
  </head>
 
  <body style="margin:0 auto;background-color:#ffffff">
<%@ include file="top.html" %>
<%@ include file="main.jsp" %>
<%@ include file="bottom.jsp" %>
  </body>
</html>
<%
	yjsh.closecon();
%>