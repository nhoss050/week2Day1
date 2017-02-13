var getHTML = require('./http-functions');

function printUpper (html) {
  console.log(html.toUpperCase());
}

var options = {

    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};

getHTML(options, printUpper );