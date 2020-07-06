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
   
   5. Go to  [Zomato Developer](https://developers.zomato.com/)
   - Signup
   - Get the `userKey`
   
      # Example
 
   ```sh
   var zomato = require('zomato');
   var client = zomato.createClient({
   userKey: '******************',//as obtained from [Zomato API](https://developers.zomato.com/apis)
   });
   ````
   
  ## Get Foodie and Nightlife Index, list of popular cuisines and nearby restaurants around the given coordinates
  ```sh
  client.getGeocode({lat:"28.613939", lon:"77.209021"}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
   });
   ```
   For other functions : [Click Here](https://www.npmjs.com/package/zomato)
   
   # Hosting on Heroku
   
   - Go to [Heroku](https://www.heroku.com/) and Sign Up
   - Click on `NodeJS` in OFFICIALLY SUPPORTED LANGUAGES list
   - Create a new app and Name it
   - Download and install the Heroku CLI
   
 ###  Initialize a git repository in a new or existing directory
   
```sh
$ cd my-project/
$ git init
$ heroku git:remote -a appName
```

## Deploy your application
### Commit your code to the repository and deploy it to Heroku using Git.
```sh
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

### Thats it!! Your server is hosted with `SSL` and the CLI will provide the URL for your Server

# Demo

My Server URL : `https://happyenings.herokuapp.com`

- [https://happyenings.herokuapp.com/api/v1/zomato/trichy](https://happyenings.herokuapp.com/api/v1/zomato/trichy)

- [https://happyenings.herokuapp.com/api/v1/twitter/corona](https://happyenings.herokuapp.com/api/v1/twitter/trichy)

 Check my client [Happyenings](https://happyenings.web.app)


    
    
