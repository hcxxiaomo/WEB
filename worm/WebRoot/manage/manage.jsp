<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@ page isErrorPage="true"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<!-- <link rel="stylesheet" type="text/css" href="manage/js/main.css"> -->
<title>登录管理界面</title>
<link href="main.css" rel="stylesheet" type="text/css" /> 
<!-- <script src="js/Ajax.js" type="text/javascript"></script> -->
<!-- <script src="js/HTTP.js" type="text/javascript"></script> -->
<!-- <script src="js/AjaxUpdater.js" type="text/javascript"></script> -->
<!-- <script src="js/AjaxUpdater.js" type="text/javascript"></script> -->



<style type="text/css">
/* 页面字体样式 */
body, td, input {
    font-family:Arial;
    font-size:12px;
}

/* 表格基本样式 */
table.default {
    border-collapse:collapse;
    width:300px;
}

/* 表格单元格样式 */
table.default td {
    /*border:1px solid black;*/
    padding:3px;
}

/* 列头样式 */
table.default td.item {
   /* background:#006699;*/
    color:#000;
}

/* 正常信息样式 */
div.ok {
    color:#FF0000;
}

/* 警告信息样式 */
div.warning {
    color:#006600;
}
</style>

<script type="text/javascript" src="checker.js"></script>
</head>

 <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<div id="msg" style="float:right"></div>
<div>
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr> 
          <td height="410" background="images/admin-login_r1_c1.jpg">
	  <table width="369" height="325" border="0" align="center" cellpadding="0" cellspacing="0">
              <form name="login" id="login" method="post" action="check.jsp">
                <tr> 
                  <td height="141" colspan="2"><img src="images/admin-login_r1_c2.jpg" width="440" height="141"></td>
                </tr>
                <tr> 
                  <td width="337" height="127" background="images/admin-login_r2_c2.jpg">
                  
<table class="default">
<tr>
    <td class="item" width="30%">用户名：</td>
    <td width="70%">
        <input type="text" name="username" id="username" onblur="Checker.checkNode(this)">
        <div id="usernameCheckDiv" class="ok">请输入用户名。</div>
    </td>
</tr>
<tr>
    <td class="item">密码：</td>
    <td>
        <input type="password" name="password" id="password" onblur="Checker.checkNode(this)">
        <div id="passwordCheckDiv" class="ok">请输入密码。</div>
    </td>
</tr>

<tr>
    <td class="item">验证码：</td>
    <td>
        <input type="text" name="code" id="code" size="5" onblur="Checker.checkNode(this)">
        <img src="code.jsp" width="40" height="20" border="0" alt="">
        <div id="codeCheckDiv" class="ok">请输入图片中的数字验证码。</div>
    </td>
</tr>
  </table>                
                 
                    
                   


				</td>
                  <td width="102"><input type="image" id="submit" value="登录" src="images/admin-login_r2_c3.jpg" width="102" height="127" border="0"></td>
                </tr>
                <tr> 
                  <td height="119" colspan="2"><img src="images/admin-login_r3_c2.jpg" width="440" height="119"></td>
                </tr>
              </form>
            </table></td>
        </tr>
        <tr> 
          <td height="25" align="center"><font face="Verdana, Arial, Helvetica, sans-serif">Copyright 
            2012 &copy; 西瓜工作室. All Rights Reserved.</font></td>
        </tr>
      </table></td>
  </tr>
</table>
</div>
</body>
</html>
