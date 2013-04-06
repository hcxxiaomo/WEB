<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<LINK href="images/Default.css" type=text/css rel=stylesheet>
<LINK href="images/xtree.css" type=text/css rel=stylesheet>
<LINK href="images/User_Login.css" type=text/css rel=stylesheet>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>

<script type="text/javascript" src="checker.js"></script>

<style type="text/css">
/* 正常信息样式 */
div.ok {
    color:#FF0000;
}

/* 警告信息样式 */
div.warning {
    color:#006600;
}
</style>

</head>
<BODY id=userlogin_body>
<DIV></DIV>

<DIV id=user_login>
<DL>
  <DD id=user_top>
  <UL>
    <LI class=user_top_l></LI>
    <LI class=user_top_c></LI>
    <LI class=user_top_r></LI></UL>
  <DD id=user_main>
  <UL>
    <LI class=user_main_l></LI>
    <LI class=user_main_c>
    <DIV class=user_main_box>
       <form name="login" id="login" method="post" action="check.jsp">
    <UL>
      <LI class=user_main_text>用户名</LI>
      <LI class=user_main_input>
      <INPUT class=TxtUserNameCssClass id=username      name=username onblur="Checker.checkNode(this)"> </LI></UL>
       <br/><br/><div id="usernameCheckDiv" class="ok">请输入用户名。</div>
    <UL>
      <LI class=user_main_text>密码 </LI>
      <LI class=user_main_input>
      <INPUT class=TxtPasswordCssClass id=password     type=password name=password onblur="Checker.checkNode(this)"> </LI></UL>
       <br/><br/><div id="passwordCheckDiv" class="ok">请输入密码。</div>
	</DIV></LI>
	</ul>

	
    <LI class=user_main_r>
    <INPUT class=IbtnEnterCssClass id=submit  value="登录" 
    style="BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px" 
        type=image src="images/user_botton.gif" name=submit> </LI></UL>
 
 	</form>
   

<DIV id=ValidationSummary1 style=" COLOR: red"><font face="Verdana, Arial, Helvetica, sans-serif"><center>Copyright 
            2012 &copy; 西瓜工作室. All Rights Reserved.</font></center></DIV>

<DIV></DIV>
</DD>
</DL>
</DIV>
</BODY>
</html>