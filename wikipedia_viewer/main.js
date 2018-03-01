$(document).ready(function() {

  $('form').submit(function(e) {
    e.preventDefault();
    $.getJSON('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + $('#text-to-search').val(), function(data) {
      $('ul').empty();
      data[1].forEach(function (value, index) {
        var title = value;
        var description = data[2][index];
        var link = data[3][index];
        $('ul').append('<li><a href=' + link + ' target="_blank">' + title + '</a></li>' + description);
      });
      console.log(data);
    });
  });

});
