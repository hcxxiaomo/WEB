<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<!-- <link rel="stylesheet" type="text/css" href="manage/css/main.css">  -->
<title>登录管理界面</title>
<link href="js/main.css" rel="stylesheet" type="text/css" /> 
<script src="js/Ajax.js" type="text/javascript"></script>
<script src="js/HTTP.js" type="text/javascript"></script>
<script src="js/AjaxUpdater.js" type="text/javascript"></script>


</head>


<script language="JavaScript1.5" type="text/javascript">
// 	function loginRequest()
// 	{
// 		Ajax.setMessageBox("msg");
// 		var data = new Object();
// 		data.username = document.getElementById("username").value;
// 		data.password = document.getElementById("password").value;
// 		if((data.username == '') || (data.password == '')){
// 			Ajax.setMessage("请检查您的输入...", 0, 2000);
// 		}else{

// 			var jdata = data.toJSONString();
// 			var parm = "data=" + jdata;
// 			AjaxUpdater.Update('POST', '/admin/index.php?op=user&act=login', loginResponse, parm);
// 		}
// 	}
	
// 	function loginResponse()
// 	{
// 		if(Ajax.checkReadyState() == "OK")
// 		{
// 			var res = Ajax.getResponse().parseJSON();
// 			if(res){
// 				self.location = "/admin/index.php";
//				Ajax.setMessage("ddd...", 0, 2000);
// 			}else{
// 				Ajax.setMessage("请检查您的输入...", 0, 2000);
// 			}
// 		}
// 	}
</script>


 <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<div id="msg" style="float:right"></div>
<div>
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr> 
          <td height="325" background="images/admin-login_r1_c1.jpg">
	  <table width="369" height="325" border="0" align="center" cellpadding="0" cellspacing="0" >
              <form name="login" id="login" method="post" action="check.jsp">
                <tr> 
                  <td height="118" colspan="2"><img src="images/admin-login_r1_c2.jpg" width="369" height="118"></td>
                </tr>
                <tr> 
                  <td width="283" height="107" background="images/admin-login_r2_c2.jpg"><table width="220" border="0" align="center" cellpadding="6" cellspacing="0">
                      <tr> 
                        <td width="56" style="font-size:13px;">用户名：</td>
                        <td colspan="2"><input name="uid" type="text" id="username" style="BORDER-RIGHT: #444444 1px solid; BORDER-TOP: #444444 1px solid; FONT-SIZE: 9pt; BORDER-LEFT: #444444 1px solid; BORDER-BOTTOM: #444444 1px solid; BACKGROUND-COLOR: #ffffff" size="15"></td>
                      </tr>
                      <tr> 
                        <td  style="font-size:13px;">密　码：</td>
                        <td colspan="2"><input name="upwd" type="password" id="password" style="BORDER-RIGHT: #444444 1px solid; BORDER-TOP: #444444 1px solid; FONT-SIZE: 9pt; BORDER-LEFT: #444444 1px solid; BORDER-BOTTOM: #444444 1px solid; BACKGROUND-COLOR: #ffffff" size="15"></td>
                      </tr>
                      
                    </table></td>
                  <td width="86"><input type="image" id="submit" value="登录" src="images/admin-login_r2_c3.jpg" width="86" height="107" border="0"></td>
                </tr>
                <tr> 
                  <td height="100" colspan="2"><img src="images/admin-login_r3_c2.jpg" width="369" height="100"></td>
                </tr>
              </form>
            </table></td>
        </tr>
        <tr> 
          <td height="25" align="center"  style="font-size:13px;"><font face="微软雅黑, 宋体, Helvetica, sans-serif">Copyright 
            2012 &copy; 西瓜工作室. All Rights Reserved.</font></td>
        </tr>
      </table></td>
  </tr>
</table>
</div>
</body>
</html>
