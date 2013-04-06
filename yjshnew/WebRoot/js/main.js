//以下为浮动广告效果
function addEvent(obj,evtType,func,cap){
    cap=cap||false;
if(obj.addEventListener){
     obj.addEventListener(evtType,func,cap);
   return true;
}else if(obj.attachEvent){
        if(cap){
         obj.setCapture();
         return true;
     }else{
      return obj.attachEvent("on" + evtType,func);
   }
}else{
   return false;
    }
}
function getPageScroll(){
    var xScroll,yScroll;
if (self.pageXOffset) {
   xScroll = self.pageXOffset;
} else if (document.documentElement && document.documentElement.scrollLeft){
   xScroll = document.documentElement.scrollLeft;
} else if (document.body) {
   xScroll = document.body.scrollLeft;
}
if (self.pageYOffset) {
   yScroll = self.pageYOffset;
} else if (document.documentElement && document.documentElement.scrollTop){
   yScroll = document.documentElement.scrollTop;
} else if (document.body) {
   yScroll = document.body.scrollTop;
}
arrayPageScroll = new Array(xScroll,yScroll);
return arrayPageScroll;
}
function GetPageSize(){
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) { 
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight){
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else {
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) {
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    } 
    if(yScroll < windowHeight){
        pageHeight = windowHeight;
    } else { 
        pageHeight = yScroll;
    }
    if(xScroll < windowWidth){ 
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
    return arrayPageSize;
}

var AdMoveConfig=new Object();
AdMoveConfig.IsInitialized=false;
AdMoveConfig.ScrollX=0;
AdMoveConfig.ScrollY=0;
AdMoveConfig.MoveWidth=0;
AdMoveConfig.MoveHeight=0;
AdMoveConfig.Resize=function(){
    var winsize=GetPageSize();
    AdMoveConfig.MoveWidth=winsize[2];
    AdMoveConfig.MoveHeight=winsize[3];
    AdMoveConfig.Scroll();
}
AdMoveConfig.Scroll=function(){
    var winscroll=getPageScroll();
    AdMoveConfig.ScrollX=winscroll[0];
    AdMoveConfig.ScrollY=winscroll[1];
}
addEvent(window,"resize",AdMoveConfig.Resize);
addEvent(window,"scroll",AdMoveConfig.Scroll);
function AdMove(id){
    if(!AdMoveConfig.IsInitialized){
        AdMoveConfig.Resize();
        AdMoveConfig.IsInitialized=true;
    }
    var obj=document.getElementById(id);
    obj.style.position="absolute";
    var W=AdMoveConfig.MoveWidth-obj.offsetWidth;
    var H=AdMoveConfig.MoveHeight-obj.offsetHeight;
    var x = W*Math.random(),y = H*Math.random();
    var rad=(Math.random()+1)*Math.PI/6;
    var kx=Math.sin(rad),ky=Math.cos(rad);
    var dirx = (Math.random()<0.5?1:-1), diry = (Math.random()<0.5?1:-1);
    var step = 1;
    var interval;
    this.SetLocation=function(vx,vy){x=vx;y=vy;}
    this.SetDirection=function(vx,vy){dirx=vx;diry=vy;}
    obj.CustomMethod=function(){
        obj.style.left = (x + AdMoveConfig.ScrollX) + "px";
        obj.style.top = (y + AdMoveConfig.ScrollY) + "px";
        rad=(Math.random()+1)*Math.PI/6;
        W=AdMoveConfig.MoveWidth-obj.offsetWidth;
        H=AdMoveConfig.MoveHeight-obj.offsetHeight;
        x = x + step*kx*dirx;
        if (x < 0){dirx = 1;x = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
        if (x > W){dirx = -1;x = W;kx=Math.sin(rad);ky=Math.cos(rad);}
        y = y + step*ky*diry;
        if (y < 0){diry = 1;y = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
        if (y > H){diry = -1;y = H;kx=Math.sin(rad);ky=Math.cos(rad);}
    }
    this.Run=function(){
        var delay = 30;
        interval=setInterval(obj.CustomMethod,delay);
        obj.onmouseover=function(){clearInterval(interval);}
        obj.onmouseout=function(){interval=setInterval(obj.CustomMethod, delay)};
    }
}





//以下为上面中间图片效果
var myFocus={
 //Design By Koen @ 2010.8.x
 //http://hi.baidu.com/koen_li
 $:function(id){return document.getElementById(id);},
 $$:function(tag,obj){return (typeof obj=='object'?obj:this.$(obj)).getElementsByTagName(tag);},
 style:function(obj,style){return (+[1,])?window.getComputedStyle(obj,null)[style]:obj.currentStyle[style];},//getStyle简化版
 easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t - 1) + b;},
 move:function(obj,prop,val,type,spd,fn){//运动函数，spd为运动需要的时间，时间越大速度越小
  var t=0,b=parseInt(this.style(obj,prop)),c=val-b,d=spd||50,st=type,m=c>0?'ceil':'floor';
  if(obj[prop+'Timer']) clearInterval(obj[prop+'Timer']);
  obj[prop+'Timer']=setInterval(function(){
   if(t<d){obj.style[prop]=Math[m](myFocus[st](++t,b,c,d))+'px';}
   else {clearInterval(obj[prop+'Timer']);fn&&fn.call(obj);}
  },10);return this;
 },
 addList:function(obj,cla,x){//生成HMTL,cla为列表的class,其中封装有:cla='txt'(生成alt文字),cla='num'(生成按钮数字),cla='thumb'(生成小图)
  var s=[],n=x||this.$$('li',this.$$('ul',obj)[0]).length,num=cla.length;
  for(var j=0;j<num;j++){
   s.push('<ul class='+cla[j]+'>');
   for(var i=0;i<n;i++){s.push('<li>'+(cla[j]=='num'?(i+1):(cla[j]=='txt'?this.$$('li',obj)[i].innerHTML.replace(/\<img.*?\>/i,this.$$('img',obj)[i].alt):(cla[j]=='thumb'?'<img src='+(this.$$('img',obj)[i].getAttribute("thumb")||this.$$('img',obj)[i].src)+' />':'')))+'<span></span></li>')};
   s.push('</ul>');
  }; obj.innerHTML+=s.join('');
 },
 setting:function(par){
  if(window.attachEvent)
  {window.attachEvent('onload',function(){myFocus[par.style](par)})}
else{window.addEventListener('load',function(){myFocus[par.style](par)},false)}
 },
 mF_liuzg:function(par){
  var box=this.$(par.id),boxH=box.offsetHeight,t=par.time*1000;
  this.addList(box,['txt-bg','txt','num']);
  var pic=this.$$('li',this.$$('ul', box)[0]),n=pic.length;
  var c=boxH%par.chip?8:par.chip,h=boxH/c,pics=[];
  for(var i=0;i<c;i++){
   pics.push('<li><p>')
   for(var j=0;j<n;j++) pics.push(pic[j].innerHTML);
   pics.push('</p></li>')
  }
  this.$$('ul', box)[0].innerHTML=pics.join('');
  var ul=this.$$('ul',box),txt=this.$$('li',ul[2]),btn=this.$$('li',ul[3]),pic=this.$$('li',ul[0]);
  for(var i=0;i<c;i++){//初始化样式设置
   this.$$('p',pic[i])[0].style.top=-i*h+'px';
   pic[i].style.height=h+'px';
   this.$$('p',pic[i])[0].style.height=boxH*c+'px';
  }
  var index = 0;//开始显示的序号
  box.removeChild(this.$$('div',box)[0]);
  var run = function(idx) {
   var tt=par.type==4?Math.round(1+(Math.random()*(3-1))):par.type;//效果选择
   btn[index].className = '';
   txt[index].style.display='none';
            if(index==n-1) index=-1;
   var N=idx!=undefined?idx:index+1;
   var spd=tt==2?20:(tt==1?80:Math.round(20+(Math.random()*(80-20))));
   for(var i=0;i<c;i++){
    if(tt==3) spd=Math.round(20+(Math.random()*(80-20)));
    myFocus.move(myFocus.$$('p',pic[i])[0],'top',-N*c*h-i*h,'easeOut',spd);
    spd=tt==2?spd+10:(tt==1?spd-10:spd);
   }
   btn[N].className = 'current';
   txt[N].style.display='block';
            index = N;
        }
  run(index);
  var auto=setInterval(function(){run()},t);
  for (var j=0;j<n;j++){
   btn[j].j=j;
   btn[j].onclick=function(){if(!this.className) run(this.j)};
  }
  box.onmouseover=function(){clearInterval(auto);}
     box.onmouseout=function(){auto=setInterval(function(){run()},t);}
  for(var i=0,lk=this.$$('a',box),ln=lk.length;i<ln;i++) lk[i].onfocus=function(){this.blur();}//去除虚线框
 }
};
myFocus.setting({
 style:'mF_liuzg',//style为风格样式，
 id:'myFocus',//焦点图ID
 chip:8,//图片切片数量，能被焦点图的高整除才有效，默认为8片
 type:1,//切片效果，1为甩头，2为甩尾，3为凌乱，4为随机效果
 time:4//每帧图片时间间隔
});//更多样式设置留意myFocus正式版


//以下为导航栏效果
//<!--
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 
// -->





