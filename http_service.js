var https = require('https');

//UPSMF Dev Env
// var host = 'uphrh.in';
// var channelId = '0136855050200760320';
// var apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJSR3RkMkZzeG1EMnJER3I4dkJHZ0N6MVhyalhZUzBSSyJ9.kMLn6177rvY53i0RAN3SPD5m3ctwaLb32pMYQ65nBdA';

//UPSMF stage env
var host = 'uat.upsmfac.org';
var channelId = '0136855050200760320';
var apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3RzdXaHdiRlhKVHR5ZDlWOU1rakg0M2dsVFpHSUlSUiJ9.X1RzxwnEiBeZqikFe0IlsKYDaxIS5dP7szrdK1NYF1s';



//SUnbird Stage
// var host = 'staging.sunbirded.org';
// var channelId = '013655711988719616228';
// var apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJKa21PZDJGMzdmak1Vb3ZsdnBZclRCN3ZwTHlTV2dwWiJ9.Te7nCwnpPx5mx0P7cnveXtErMMSuarqALdiS1PFanW0';


function performRequest(endpoint, method, data, headerData) {
  var headers = {};
  var dataString = JSON.stringify(data);
  if (method == 'GET') {
  }
  else {
    headers = {
      'Content-Type': 'application/json',
      'Authorization': apiKey,
    };
  }
  if(!!headerData && !!headerData["X-Channel-Id"]){
    headers['X-Channel-Id'] = headerData["X-Channel-Id"];
  }
  var options = {
    host: host,
    path: endpoint,
    method: method,
    headers: headers
  };

  console.log("request options---", options );
  console.log("Payload--", dataString);
  // return;
  var req = https.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      console.log(responseString);
      var responseObject = JSON.parse(responseString);
        console.log(responseObject);
    });
  });
  req.on('error', function(err) {
    console.log('API Error--', err);
  });
  req.write(dataString);
  req.end();
}

module.exports = {
  performRequest,
}
