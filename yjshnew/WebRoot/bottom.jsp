<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@ include file="sql/infossql.jsp" %>
<%@ page import = "java.sql.*" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 
	

  </head>
  
  <%
//   	  	String info[] = new String[4];
// 			int count = 0;
// 			while(rs_infos.next()){
// 				info[count++] = rs_infos.getString("content");
// 			}
  	
   %>
  
  <body >
  <div id="container" style="background-image:url(images/containernew.jpg); ">
    <div id="foot" >
			<br />
			<div id="footword">
				 <%=info[0] %>&nbsp;&nbsp;<a href="manage/manage.jsp">后台管理</a><br />
				电话：<%=info[1] %>传真：<%=info[2] %> 邮箱：<A
					href="mailto:<%=info[3] %>"><%=info[3] %></a><br />
			</div>
		</div>
		</div>
  </body>
</html>
