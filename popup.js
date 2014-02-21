(function(){

	var srlAPI = "https://api.twitch.tv/kraken/streams/dvcolgansrl",
		normalAPI = "https://api.twitch.tv/kraken/streams/dvcolgan";

	$.ajax({
		url: normalAPI,
	}).done(function(data){
		if(data.stream != null){
			$(".channel-status.dvcolgan").html("DVColgan is live with '" + data.stream.channel.status + "'");
		} else {
			$(".channel-status.dvcolgan").html("DVColgan is offline.");
		}
	});

	$.ajax({
		url: srlAPI,
	}).done(function(data){
		if(data.stream != null){
			$(".channel-status.dvcolgansrl").html("DVColganSRL is live with '" + data.stream.channel.status + "'");
		} else {
			$(".channel-status.dvcolgansrl").html("DVColganSRL is offline.");
		}
	});

})();