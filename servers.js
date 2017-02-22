const http = require('http');
const request = require('request'); 
const portGood = 7000;
const portBad = 7500;
const keys = require("./keys.js");
const Twitter = require("twitter");

const client = new Twitter({
	consumer_key : process.env.twitter_consumer_key, 
	consumer_secret : process.env.twitter_consumer_secret,
	access_token_key :  process.env.twitter_access_token_key,
	access_token_secret : process.env.twitter_access_token_secret
});

const goodMessages = [
	"You are so beautiful", "You are very intelligent", "All your friends love you", "You are a shining star in a dark universe"
];

const badMessages = [
	"You will die in three hours", "Other people do not think you are funny", "You have no friends", "You don't have what it takes"
];

function getRandomTweet() {

	return new Promise((resolve, reject)=>{
		client.get('statuses/user_timeline', {screen_name: 'wesleylhandy'}, (error, tweets, response)=> {

			if (!error) {
				// console.log(tweets);
				var index = Math.floor(Math.random()*tweets.length);
				// console.log(tweets[index].text);
				resolve(tweets[index].text);
			} else {
				console.log(error);
				reject(new Error(error));
			}
		});
	});
}

function getRandomGif() {

	return new Promise((resolve, reject)=>{
		const rating = "pg-13";
		const limit = 10;

		//api key
		const key = process.env.gifphy_api_key;

		//search
		const endPoint = "https://api.giphy.com/v1/gifs/search?q="; 

		//two different parameters combined into one variable
		const ratingParam = "&rating=" + rating; //could be set by input later
		const limitParam = "&limit=" + limit; //could be set by input later
		const parameters = ratingParam + limitParam;

		// initialize query URL
		const queryURL = endPoint + "danger" + parameters + key;

		request(queryURL, (error, response, body)=> {

			if (error) {

				reject(new Error(response));

			} else {

	        	var gifs = JSON.parse(body);
				// console.log(gifs);

				let index = Math.floor(Math.random() * gifs.data.length);
				resolve(`<img src=${gifs.data[index].images.original.url}>`);	
			}

		}); 
	});
}

function handleGoodRequest(request, response) {
	
	getRandomTweet().then((tweet)=>{
		// console.log(tweet);
		var index = Math.floor(Math.random() * goodMessages.length);
		response.end(`${goodMessages[index]}\n\nRandom Tweet by @wesleylhandy:\n\n${tweet}`); 

	},(error)=>{

		response.end(`${error}`);

	});
}

function handleBadRequest(request, response) {
	
	getRandomGif().then((gif)=>{
		// console.log(tweet);
		var index = Math.floor(Math.random() * badMessages.length);
		response.end(`<html><body><h1>${badMessages[index]}</h1><div style="margin-top: 20px">${gif}</div></body></html>`); 

	},(error)=>{
	
		response.end(`${error}`);
	
	});
}

var goodServer = http.createServer(handleGoodRequest);
var badServer = http.createServer(handleBadRequest);

goodServer.listen(portGood, function(){
	console.log(`Server listening on: http://localhost:${portGood}`);
});

badServer.listen(portBad, function(){
	console.log(`Server listening on: http://localhost:${portBad}`);
});