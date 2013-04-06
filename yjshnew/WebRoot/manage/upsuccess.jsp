<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<%
	String type =  request.getParameter("type");
	int inttype =  Integer.parseInt(type);
		
			String item = null;
			String talbe = null;
				
			switch(inttype)
			{
				case 1: //talbe =  "yjsh_news ";
				item = "新闻动态";
				break;
				case 2: //talbe =  "yjsh_notices ";
				item = "通知公告";
				break;
				case 3: //talbe =  "yjsh_hhdjt";
				item = "含弘大讲堂";
				break;	
				case 4: //talbe =  "yjsh_hhxzjt";
				item = "含弘学子讲堂";
				break;	
				case 5: //talbe =  "yjsh_jobs";
				item = "就业信息";
				break;	
				case 6: //talbe =  "yjsh_practices";
				item = "社会实践";
				break;						
			}
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'upsuccess.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body style="margin-top:300px;">
  <p style="color:#ff0000">  您好，您上传的关于<%=item %>的信息已上传成功，工作人员稍后会进行审核，感谢您的使用。 </p><br>
     <a href="manage/upmanage.jsp?type=<%=type%>">返回</a>		
  </body>
</html>
