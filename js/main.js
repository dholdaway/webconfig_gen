var custom = false;
var c = "";

$(document).ready(function(){
	$("#createBtn").click(function () {
		custom = true;
		$("#inputCtrl").html('<p>Redirect <input style="width: 200px;" placeholder="URL" id="a" ng-model="n.redirect"> to <input id="b" style="width: 200px;" placeholder="URL" ng-model="n.rto"></p>');
	});
});