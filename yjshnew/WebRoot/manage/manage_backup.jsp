<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="checkvalid.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

 	String sort = (String)request.getAttribute("sort");
 	String mainpage = null;
 	int intsort = Integer.parseInt(sort);
 	String left = "left0.html";
	if(intsort == 0){
		mainpage = "upmanage.jsp?type=1";
	}else{
		mainpage = "indexmanage.jsp?type=1";
	}
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>管理中心</title>
<meta http-equiv=Content-Type content=text/html;charset=utf-8>
</head>
<frameset rows="64,*"  frameborder="NO" border="0" framespacing="0">
	<frame src="admin_top.jsp" noresize="noresize" frameborder="NO" name="topFrame" scrolling="no" marginwidth="0" marginheight="0" target="main" />
  <frameset cols="200,*"  rows="1000,*" id="frame">
	<frame src="left<%=sort %>.html" name="leftFrame" noresize="noresize" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" target="main" />
	<frame src="<%=mainpage%>" name="main" marginwidth="0" marginheight="0" frameborder="0" scrolling="auto" target="_self" />
  </frameset>
<noframes>
  <body></body>
    </noframes>
</html>
