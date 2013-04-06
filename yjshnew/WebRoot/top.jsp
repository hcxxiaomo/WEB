<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<STYLE type=text/css>* {
	margin: 0 auto;
	text-align:center;
/* PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px */
}
BODY {
/* 	FONT-FAMILY: "宋体"; FONT-SIZE: 12px; FONT-WEIGHT: bold;width:950px; */
}
A {
	COLOR: #2f657f; TEXT-DECORATION: none
}
UL {
	LIST-STYLE-TYPE: none
}
LI {
	LIST-STYLE-TYPE: none
}
IMG {
	BORDER-BOTTOM: 0px; BORDER-LEFT: 0px; BORDER-TOP: 0px; BORDER-RIGHT: 0px
}
.center {
 	MARGIN: 0px auto;  WIDTH: 950px
}
.top {
	TEXT-ALIGN: left; PADDING-BOTTOM: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; FONT-FAMILY: Arial; BACKGROUND: url("images/head.png") no-repeat; HEIGHT: 260px; FONT-SIZE: 16px; PADDING-TOP:0px;width:950px;
}
.top A {
	COLOR: #950600
}
.bj {
	BACKGROUND: url("images/topbg.gif") repeat-x ; HEIGHT: 61px;width:950px;
}
.nav {
	/*POSITION: absolute;*/ WIDTH: 950px; BACKGROUND: #fff; HEIGHT: 30px; FONT-SIZE: 14px
}
.nav UL {
	POSITION: relative; MARGIN: 0px; WIDTH:950px; FLOAT: left; HEIGHT: 30px
}
.nav UL LI {
	TEXT-ALIGN: center; PADDING-BOTTOM: 0px; LINE-HEIGHT: 30px; LIST-STYLE-TYPE: none; MARGIN: 0px; PADDING-LEFT: 13px; WIDTH: 130px; PADDING-RIGHT: 13px; FLOAT: left; HEIGHT: 30px; LIST-STYLE-IMAGE: none; PADDING-TOP: 0px
}
.nav UL LI A {
	POSITION: relative; WIDTH: 130px; DISPLAY: block; HEIGHT: 30px; COLOR: #2f6581; OVERFLOW: hidden; CURSOR: pointer
}
.nav UL LI A:hover {
	TEXT-ALIGN: center; WIDTH: 135px; DISPLAY: block; BACKGROUND: #2f6581; HEIGHT: 30px; COLOR: #fff
}
.nav UL LI UL {
	Z-INDEX: 30; POSITION: absolute; LIST-STYLE-TYPE: none; WIDTH: 400px; DISPLAY: none; BACKGROUND: #eee; FLOAT: left; HEIGHT: 30px; BORDER-TOP: #960700 1px solid; /*RIGHT: 0px;*/ LIST-STYLE-IMAGE: none
}
.nav UL LI UL LI {
	PADDING-BOTTOM: 0px; PADDING-LEFT: 11px; WIDTH: 110px; PADDING-RIGHT: 11px; FLOAT: left; HEIGHT: 30px; FONT-WEIGHT: normal; PADDING-TOP: 0px
}
.nav UL LI UL LI A {
	POSITION: relative; WIDTH: 110px; DISPLAY: block; HEIGHT: 30px; COLOR: #2f6581; OVERFLOW: hidden; CURSOR: pointer
}
.nav UL LI UL LI A:hover {
	WIDTH: 110px; COLOR: #fff
}
#list5 {
	WIDTH: 530px
}
#list4 {
	WIDTH: 530px
}
#list3 {
	WIDTH: 530px
}
#list2 {
	WIDTH: 530px
}
#list1 {
	WIDTH: 530px
}
</STYLE>
<SCRIPT type=text/javascript src="js/top.js">
</SCRIPT>

<html>

  
  <BODY>
  <div sytle="text-align:center;">
<DIV class=center>

<DIV class=top>
</DIV>
<DIV class=bj>
<DIV class=nav>
<UL>
  <LI> <A href="http://temp/cn" target=_top>首页</A> </LI>
  <LI onmouseover=displaySubMenu(this) onmouseout=hideSubMenu(this)>
  <A href="/cn/templets/default/web/gaikuang.html" target=_top>研究生会</A>
  <UL id=list1 style="left:0px;">
    <LI><A href="/cn/templets/default/web/gaikuang.html" target=_top>组织概况</A></LI>
    <LI><A href="/cn/templets/default/web/jigou.html" target=_top>主席团介绍</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>品牌活动</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>组织生活</A></LI>    
  </UL></LI>
  <LI onmouseover=displaySubMenu(this) onmouseout=hideSubMenu(this)>
  <A href="http://temp/cn/plus/list.php?tid=2" target=_top>研究生传媒社</A>
  <UL id=list2 style="left:110px;">
    <LI><A href="/cn/templets/default/web/gaikuang.html" target=_top>组织概况</A></LI>
    <LI><A href="/cn/templets/default/web/jigou.html" target=_top>主席团介绍</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>品牌活动</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>组织生活</A></LI>  
  </UL></LI>
  <LI onmouseover=displaySubMenu(this) onmouseout=hideSubMenu(this)>
  	<A href="http://temp/cn/plus/list.php?tid=6" target=_top>党员园区工作站</A>
  <UL id=list3 style="left:250px;">
    <LI><A href="/cn/templets/default/web/gaikuang.html" target=_top>组织概况</A></LI>
    <LI><A href="/cn/templets/default/web/jigou.html" target=_top>主席团介绍</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>品牌活动</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>组织生活</A></LI>  
   </UL></LI>
  <LI onmouseover=displaySubMenu(this) onmouseout=hideSubMenu(this)>
  <A href="http://temp/cn/plus/list.php?tid=9" target=_top>《含弘论丛》编辑社</A>
  <UL id=list4 style="right:80px;">
    <LI><A href="/cn/templets/default/web/gaikuang.html" target=_top>组织概况</A></LI>
    <LI><A href="/cn/templets/default/web/jigou.html" target=_top>主席团介绍</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>品牌活动</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>组织生活</A></LI>  
  </UL></LI>
  <LI onmouseover=displaySubMenu(this) onmouseout=hideSubMenu(this)>
  <A href="http://temp/cn/plus/list.php?tid=13" target=_top>研究生艺术团</A>
  <UL id=list5  style="right:0px;">
    <LI><A href="/cn/templets/default/web/gaikuang.html" target=_top>组织概况</A></LI>
    <LI><A href="/cn/templets/default/web/jigou.html" target=_top>主席团介绍</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>品牌活动</A></LI>
    <LI><A href="http://temp/cn/plus/list.php?tid=29" target=_top>组织生活</A></LI>  
  </UL></LI>
 </UL>
 
 
 </DIV></DIV></DIV>
 

 </div>
 </BODY>
</html>
