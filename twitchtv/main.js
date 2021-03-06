var fcc_channel_ids = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {
  selectFilter('all');

  $('#all').click(function(e) {
    e.preventDefault();
    selectFilter('all');
  });
  $('#online').click(function(e) {
    e.preventDefault();
    selectFilter('online');
  });
  $('#offline').click(function(e) {
    e.preventDefault();
    selectFilter('offline');
  });
});

function selectFilter(filter) {
  $('.filter-button').removeClass('active');
  $('#' + filter).addClass('active');
  showChannels(filter);
}

function showChannels(filter) {
  $('#result-list').empty();
  fcc_channel_ids.forEach(function (channel_id) {
    showChannel(channel_id, filter);
  });
}

/*
 * Replace the Twitch API base URL https://api.twitch.tv/kraken with https://wind-bow.gomix.me/twitch-api
 * (https://wind-bow.glitch.me/)
 * Note: 'callback=?' parameter convert the call to JSONP which is necessary to make cross-domain calls
 */

function showChannel(channel_id, filter) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channel_id + '?callback=?', function(data) {
    var channel_data = data;
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel_id + '?callback=?', function(data) {
      var stream_data = data;
      var name = channel_data.display_name;
      var link = channel_data.url;
      var game = channel_data.game ? channel_data.game : '';
      var status = truncate(channel_data.status, 50);

      var show_online = (filter == 'all' || filter == 'online');
      var show_offline = (filter == 'all' || filter == 'offline');

      var is_online = (stream_data.stream !== null);
      var game_icon = '<i class="fa fa-gamepad"></i>';
      var online_icon = '<i class="fa fa-circle" style="color: orangered;"></i>';
      if (is_online) {
        online_icon = '<i class="fa fa-circle" style="color: lightgreen;"></i>';
      }

      if ((is_online && show_online) || (!is_online && show_offline)) {
        var listItem =
          '<a href="' + link + '" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">\n' +
          '  <div class=\"d-flex w-100 justify-content-between\">\n' +
          '    <h5 class=\"mb-1\">' + online_icon + ' ' + name + '</h5>\n' +
          '  </div>\n' +
          '  <p class=\"mb-1\">' + game_icon + ' ' + game + '</p>\n' +
          '  <p class=\"mb-1\">' + status + '</p>\n' +
          '</a>';

        $('#result-list').append(listItem);
      }

      console.log('CHANNELL ' + channel_id + ": ");
      console.log(channel_data);
      console.log('STREAM: ');
      console.log(stream_data);
    });
  });
}

function truncate(string, max){
  if (string.length > max)
    return string.substring(0, max) + '...';
  else
    return string;
};

