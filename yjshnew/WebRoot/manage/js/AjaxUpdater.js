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
		Ajax.setMessage("��Ϊ�¼�ָ���Ϸ��ľ����", 1, 0);
		AjaxUpdater.isUpdating = false;
		return;
	}
	Ajax.makeRequest(method, service, callback, data);
	AjaxUpdater.isUpdating = true;
}
