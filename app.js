const fetchUrl = require('fetch').fetchUrl;
const prompt = require('prompt');

prompt.start();

prompt.get(['URL'], function(err, result) {
  console.log(result.URL);

  fetchUrl(result.URL, function(error, meta, body) {
//    console.log(body.toString());

  console.log(body.toString().search('github'));

  });
});

