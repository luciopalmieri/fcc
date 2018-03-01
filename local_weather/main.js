$(document).ready(function() {
  $('#open-random-wiki').on('click', function (e) {
    e.preventDefault();
    window.open('https://en.wikipedia.org/wiki/Special:Random');
    });
});
