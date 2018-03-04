$(document).ready(function() {

  $('#search').click(submit_search);
  $('form').submit(submit_search);

});

function submit_search(e) {
  e.preventDefault();
  $.getJSON('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + $('#text-to-search').val(), function(data) {
    $('#result-list').empty();
    data[1].forEach(function (value, index) {
      var title = value;
      var description = data[2][index];
      var link = data[3][index];

      var listItem =
        '<a href="' + link + '" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">\n' +
        '  <div class=\"d-flex w-100 justify-content-between\">\n' +
        '    <h5 class=\"mb-1\">' + title + '</h5>\n' +
        '  </div>\n' +
        '  <p class=\"mb-1\">' + description + '</p>\n' +
        '</a>';

      $('#result-list').append(listItem);
    });
    console.log(data);
  });
}
