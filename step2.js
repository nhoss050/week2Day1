function getAndPrintHTMLChunks () {

  var https = require('https');
  var buffer = "";
  var requestOptions = {

    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'

    };

  https.get(requestOptions, function(response) {

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
getAndPrintHTMLChunks ()





