function getAndPrintHTMLChunks (options) {

  var https = require('https');
  var buffer = "";
  /*
  var requestOptions = {

    host: options.host,
    path: options.path,

    };
*/
  https.get(options, function(response) {

    var buffer = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      buffer += ("" + data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer);
    });

  });

};

var options = {

    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
    };

getAndPrintHTMLChunks (options)



