module.exports = function getHTML(options, callback) {

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
      callback (buffer) ;
    });

  });

};