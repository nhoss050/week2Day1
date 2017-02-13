var getHTML = require('./http-functions');

function printLower (html) {
  console.log(html.toLowerCase());
}

var options = {

    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};

getHTML(options, printLower );