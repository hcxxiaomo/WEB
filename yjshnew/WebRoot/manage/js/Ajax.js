Ajax = new Object();

Ajax.setMessageBox = function(_id)
{
	this.messageBox = _id;
}
	
Ajax.makeRequest = function(method, url, callbackMethod, data)
{
	//this.request = (window.XMLHttpRequest)? new XMLHttpRequest(): new ActiveXObject("MSXML2.XMLHTTP"); 
	try	{
		if( window.ActiveXObject ) {
			for( var i = 5; i; i-- ) {
				try	{
					if( i == 2 ) {
						this.request = new ActiveXObject( "Microsoft.XMLHTTP" );
					} else {
						this.request = new ActiveXObject( "Msxml2.XMLHTTP." + i + ".0" );
					}
					//this.request.setRequestHeader("Content-Type","text/xml");
					//this.request.setRequestHeader("Content-Type","gb2312");
					
					break;
				} catch(e) {
					this.request = false;
					this.setMessage("程序发生对象创建失败错误!", 1, 0);
				}
				
			}
		} else if( window.XMLHttpRequest ) {
			this.request = new XMLHttpRequest();
			if (this.request.overrideMimeType) {
				//this.request.overrideMimeType('text/xml');
			}
		}

	} catch(e) {
		this.request = false;
		this.setMessage("程序发生对象创建失败错误!", 1, 0);
	} 
	
	this.request.onreadystatechange = callbackMethod;
	this.request.open(method, url, true);
	this.request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	this.request.send(data);
	/*if(method == "POST") {
		
	}else{
		this.request.send(null);
	}*/
	
}
	
Ajax.checkReadyState = function()
{
	switch(this.request.readyState)
	{
		case 1:
			this.setMessage("加载中 ...", 0, 0);
			break;
		case 2:
			this.setMessage("加载中 ...", 0, 0);
			break;
		case 3:
			this.setMessage("加载中 ...", 0, 0);
			break;
		case 4:
			AjaxUpdater.isUpdating = false;
			this.setMessage("", 0, 0);
			return HTTP.status(this.request.status);
		default:
			this.setMessage("程序因发生未知错误得到未知错误状态!", 1, 0);
	}
}

Ajax.setMessage = function(_message, _alert, _times)
{
	if(_alert == 0) {
		document.getElementById(this.messageBox).innerHTML = _message;
	}else{
		alert(_message);
	}
	if(_times != 0) {
		mTimer = setTimeout("Ajax.setMessage('', 0, 0);", _times);
	}

}

Ajax.getResponse = function()
{
	return this.request.responseText;
}