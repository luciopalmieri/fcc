var fcc_channel_ids = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {
  showChannels();
});

function showChannels() {
  fcc_channel_ids.forEach(function (channel_id) {
    showChannel(channel_id);
  });
}

/*
 * Replace the Twitch API base URL https://api.twitch.tv/kraken with https://wind-bow.gomix.me/twitch-api
 * (https://wind-bow.glitch.me/)
 * Note: 'callback=?' parameter convert the call to JSONP which is necessary to make cross-domain calls
 */

function showChannel(channel_id) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channel_id + '?callback=?', function(data) {
    var channel_data = data;
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel_id + '?callback=?', function(data) {
      var stream_data = data;
      console.log('CHANNELL ' + channel_id + ": ")
      console.log(channel_data);
      console.log('STREAM: ')
      console.log(stream_data);
    });
  });
}

