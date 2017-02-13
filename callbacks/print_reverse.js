var getHTML = require('./http-functions');

function printLower (html) {

    var arrayOfS = html.split()
  console.log(html.split('').reverse().join(''));
  // console.log(arrayOfS);
}

var options = {

    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

getHTML(options, printLower );
