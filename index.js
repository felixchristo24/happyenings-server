var express = require('express');
var Twit = require('twit');
var app = express();
const cors = require('cors');
var zomato = require('zomato');
const PORT = process.env.PORT || 3000
app.use(cors());

var T = new Twit({
  consumer_key: '******************',
  consumer_secret: '******************',
  access_token: '******************',
  access_token_secret: '******************',
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

var client = zomato.createClient({
  userKey: '******************',//as obtained from [Zomato API](https://developers.zomato.com/apis)
});


app.get('/api/v1/twitter/corona', function (req, res) {
  T.get('search/tweets', { q: 'திருச்சி corona', count: 100 }, function (err, data, response) {
    if (err) {
      console.log(err)
    }
    res.send(data.statuses);
  })
})

app.get('/api/v1/twitter/trichy', function (req, res) {
  T.get('search/tweets', { q: 'திருச்சி', count: 100 }, function (err, data, response) {
    if (err) {
      console.log(err)
    }
    res.send(data.statuses);
  })
})

app.get('/api/v1/zomato/trichy', function (req, res) {
  client.getGeocode({
    // city_id:"11332", //id of the city for which collections are needed
    lat: "10.790461000000001", //latitude
    lon: "78.704678000000001", //longitude
    count: "50" // number of maximum result to display
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      console.log(err);
    }
  });
})


var server = app.listen(PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})