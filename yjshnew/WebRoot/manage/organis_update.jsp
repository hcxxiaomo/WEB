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

<jsp:useBean id="yjsh" scope="page" class="yjsh.Jdbc_Con" ></jsp:useBean>

<%

	//String type =  request.getParameter("type");
	String id =  request.getParameter("id");
	//id = new String(id.getBytes("iso-8859-1"),"utf-8");
	//int id = Integer.valueOf(request.getParameter("id"));
	//int inttype =1;
	//int intid = Integer.parseInt(id);
	//session.setAttribute("id", id);
// 	if(type !=null)
// 	{	
// 	inttype =  Integer.parseInt(type);
// 	}
	String content = request.getParameter("content1").toString();
	content = new String(content.getBytes("iso-8859-1"),"utf-8");
	String sql_content = "update yjsh_organis set content = '"+content+"' where id = '"+id+"'";
	yjsh.executeUpdate(sql_content);
	//response.sendRedirect("organis.jsp");
	%>
<jsp:forward page="organis.jsp"></jsp:forward>