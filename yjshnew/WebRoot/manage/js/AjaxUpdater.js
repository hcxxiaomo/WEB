AjaxUpdater = {};

AjaxUpdater.initialize = function()
{
	AjaxUpdater.isUpdating = false;
}

AjaxUpdater.initialize();

AjaxUpdater.Update = function(method , service, callback, data)
{
	if(callback == undefined || callback == "")
	{
		Ajax.setMessage("请为事件指定合法的句柄！", 1, 0);
		AjaxUpdater.isUpdating = false;
		return;
	}
	Ajax.makeRequest(method, service, callback, data);
	AjaxUpdater.isUpdating = true;
}
