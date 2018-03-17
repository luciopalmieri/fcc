var system = require('system');

if (system.args.length === 1) {
  console.log('Usage: rasterize.js <some URL>');
  phantom.exit();
}

var address = system.args[1];

var page = require('webpage').create();

page.open(address, function(status) {
  console.log("Status: " + status);
  if(status === "success") {

    var title = page.evaluate(function() {
      return document.title;
    });

    var filename = (title || 'screenshot').toLowerCase().replace(/\s/g, '_') + '.jpg'
    page.render(filename);
  }
  phantom.exit();
});