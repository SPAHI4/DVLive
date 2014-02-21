var srlAPI = "https://api.twitch.tv/kraken/streams/dvcolgansrl",
	normalAPI = "https://api.twitch.tv/kraken/streams/dvcolgan",
	srlNotified = false,
	normalNotified = false;

var checkAPI = function(){
	$.ajax({
		url: srlAPI,
	}).done(function(data){
		if(data.stream != null){
			var notification = webkitNotifications.createNotification(
				'icon.png',
				'DVColgan is live!',
				'DVColgan is live with "' + data.stream.channel.status + '"'
			);
			notification.onclick = function(){
				chrome.tabs.create({"url": "http://twitch.tv/dvcolgan"}, function(tab){});
			}
			if(!normalNotified) {
				notification.show();
				normalNotified = true;
			}
		} else {
			normalNotified = false;
		}
	});

	$.ajax({
		url: normalAPI,
	}).done(function(data){
		if(data.stream != null){
			var notification = webkitNotifications.createNotification(
				'icon.png',
				'DVColganSRL is live!',
				'DVColganSRL is live with "' + data.stream.channel.status + '"'
			);
			notification.onclick = function(){
				chrome.tabs.create({"url": "http://twitch.tv/dvcolgansrl"}, function(tab){});
			}
			if(!srlNotified) {
				notification.show();
				srlNotified = true;
			}
		} else {
			srlNotified = false;
		}
	});
}

checkAPI();

setInterval(function(){
	checkAPI();
}, 1000*30);