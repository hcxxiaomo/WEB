<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

  <% 
   if(session.getAttribute("login")==null||!session.getAttribute("login").equals("drugok")){ 
        response.sendRedirect("manage.jsp"); 
} 
 %>

