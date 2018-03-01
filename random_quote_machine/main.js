var quoteText, quoteAuthor;

$(document).ready(function() {
  $('#new-quote').on('click', function (e) {
    e.preventDefault();
    newQuote()
    });

  $('#tweet-quote').on('click', function(e) {
    e.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("\"" + quoteText + "\" " + quoteAuthor) + '&hashtags=quotes&related=lucio_palmieri');
  });

  newQuote();
});

function newQuote() {
  $.getJSON('https://talaikis.com/api/quotes/random/', function(data) {
    quoteText = data.quote;
    quoteAuthor = data.author
    $('#quote-text').text(quoteText);
    $('#quote-author').text(quoteAuthor);
  });
}
