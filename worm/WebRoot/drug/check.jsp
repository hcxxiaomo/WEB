<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ page errorPage="manage.jsp"%>

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
<%
String sessionCode = (String) session.getAttribute("_CODE_");

String dbUrl = "jdbc:mysql://localhost:3306/worm";
				String dbUsr = "root";
				String dbPwd = "123456";
				Connection conn = null;
				String sql = "select * from worm_managedrug";
				PreparedStatement stm = null;
				ResultSet rs = null;
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
			
					stm = conn.prepareStatement(sql);
					rs = stm.executeQuery(sql);
				} catch (Exception e) {
					e.printStackTrace();
				}

boolean bool = false;
while(rs.next()){

    if(request.getParameter("username").equals(rs.getString("username"))
    		&&request.getParameter("password").equals(rs.getString("password"))
    		){ 
        session.setAttribute("login","drugok"); 
        session.setMaxInactiveInterval(-1); 
        bool = true;
        response.sendRedirect("managedrug.jsp");

    }else{ 
            bool = false;
	} 
}
if (bool == false){
	response.sendRedirect("manage.jsp");}
//out.println("<center><p>用户名、密码或验证码输入错误！</p><br><a href=\"manage/manage.jsp\">回到登录页面</a></center>"); }
%>
  </head>
<%-- <jsp:forward page="manage_backup.jsp"/>  --%>  
  <body>

  </body>
</html>
