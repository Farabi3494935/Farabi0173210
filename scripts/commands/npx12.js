const fs = require("fs");
module.exports = {
  config:{
	name: "npx12",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/BSchviW.jpeg',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("assalamu alaikum")==0 || body.indexOf("assamulaikum")==0 || body.indexOf("আসসালামুআলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("আসসালামুআলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("আসসালামু আলাইকুম")==0) {
		var msg = {
				body: "🍁 তোমাদের উপর শান্তি এবং আল্লাহর করুণা ও তাঁর নেয়ামতসমূহ বর্ষিত হোক🍁",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
