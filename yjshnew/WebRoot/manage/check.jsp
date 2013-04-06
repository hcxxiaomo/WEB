<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'check.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.lang.*"%>

<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%  
	String sql = "select * from yjsh_manage";
	ResultSet rs = yjsh.executeQuery(sql);
	boolean bool = false;
	String sort = null;
	
	 

while(rs.next()){
	 if(request.getParameter("uid")==null&&request.getParameter("upwd")==null){
	 //response.sendRedirect("manage_backup.jsp");
	 %> 

<jsp:forward page="manage.jsp"/> 
<% 
	 
	}
   else if(request.getParameter("uid").equals(rs.getString("user"))&&request.getParameter("upwd").equals(rs.getString("password"))){ 
        session.setAttribute("login","ok"); 
        session.setMaxInactiveInterval(-1); 
        bool = true;
         sort=rs.getString("sort");
         request.setAttribute("sort",sort);

%> 
<!-- <input name="type" type="text" value=""> -->
<jsp:forward page="manage_backup.jsp"/> 
<% 
    }else{ 
            bool = false;
} 

}
if (bool == false){
out.println("<center>用户名或密码输入错误！</center>"); }
%>
  </head>
  
  <body>

  </body>
</html>
