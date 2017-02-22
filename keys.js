const twitterKeys = {
  consumer_key: 'ejyhIypBQc4XSPTgXee3Ylwje',
  consumer_secret: 'YIHkwHPkVPwVkIn3rR2LLdCpcO28soYstKGvZDwl53EE3QFskv',
  access_token_key: '42040497-L1oy8dETThzLaWjqqoP4nMtX3CE3sAQXVDwKWmi9g',
  access_token_secret: 't1HhGovGavOQ6iLv7JauIAcdU5AxTPgnZxdrAPD2hjBZn'
}


const giphyKey = "&api_key=dc6zaTOxFJmzC";

	process.env['twitter_consumer_key'] = twitterKeys.consumer_key;
	process.env['twitter_consumer_secret'] = twitterKeys.consumer_secret;
	process.env['twitter_access_token_key'] = twitterKeys.access_token_key;
	process.env['twitter_access_token_secret'] = twitterKeys.access_token_secret;
	process.env['giphy_api_key'] = giphyKey;