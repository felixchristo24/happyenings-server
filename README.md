# Happyenings-Server

Simple project that uses `Twitter` and `Zomato` APIs and hosted on `Heroku`.

## Prerequisite

1. [NodeJS](https://nodejs.org/)
2. `Clone this projet`
3. `npm install`
4. Go to  [Twitter Developer](https://developer.twitter.com/)
   - Signup
   - Get the `consumer key` , `consumer secret key`, `access token` and `access secret token`.'
   - Open `index.js` ,
   
   # Example
 
   ```sh
   var Twit = require('twit');
   var T = new Twit({
   consumer_key:         '...',
   consumer_secret:      '...',
   access_token:         '...',
   access_token_secret:  '...',
   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
   strictSSL:            true,     // optional - requires SSL certificates to be valid.
   })
    ```
  
  ## Search twitter for all tweets containing the word 'banana' since July 11, 2011
  
   ```sh
   T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
   console.log(data)
   })
   ```
   
   For other functions : [Click Here](https://www.npmjs.com/package/twit)
   



