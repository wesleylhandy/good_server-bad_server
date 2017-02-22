# good_server-bad_server
Node application that opens two local servers. One serves requests and responds with good messages and a random tweet. The other serves requests and responds with bad messages and a random gif.

### Installation Instructions

1. Fork this repository
2. `npm install`
3. Obtain Twitter and Giphy API keys
	* Create file `keys.js` by calling `touch keys.js` from the command line to store your keys.

#### Obtain your Twitter and Giphy API keys by following these steps:

##### For Twitter:

1. Step One: Visit https://apps.twitter.com/app/new
2. Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form. **Keep in mind: If you were to put this into production, you would have to enter this information with real data, not dummy data.**
3. Step Three: On the next screen, click the Keys and Access Tokens tab to get your consumer key and secret.
	-Copy and paste them where the `<input here>` tags are inside your keys.js file.
4. Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.
	-Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the `<input here>` tags are inside your `keys.js` file.

##### For Giphy:

1. Step One: Access the documentation for the Giphy Api by visiting https://github.com/Giphy/GiphyAPI
2. Step Two: Save the Giphy Api Key where the `<input Giphy Api Key here>` tags would be inside your `keys.js` file.

Example code:

```javascript
exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>'
}

exports.giphyKey = '<input Giphy Api Key here>';
```

You might consider utilizing environment variables for keeping your keys secret. The code in this repo is optimized for using environment variables. You will have to access your keys differently if you do not use environment variables.