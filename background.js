var notified = false;

function getStream(channel) {
	$.getJSON("https://api.twitch.tv/kraken/streams/" + channel, function(data) {
		update(data.stream);
	});
}

function update(stream) {
	if (stream != null && !notified) {
		chrome.notifications.create(
			"", {
				type: "basic",
				title: "Pomgoo online!",
				message: "Pomgoo is live with \"" + stream.channel.status + "\"",
				iconUrl: "icon.png"
			}, function() {}
		);
	}

	notified = (stream != null);
}

getStream("pomgoo");

setInterval(function() {
	getStream("dvcolgan");
}, 5000);