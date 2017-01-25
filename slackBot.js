const SlackBot = require("slackbots");

class MySlackBot{
    constructor(){
        this.jack = new SlackBot({
            token: process.env.APITOKEN_JACK,
            name: "jack",
        });
        this.params = {
            icon_url: "https://res.cloudinary.com/sg/image/upload/c_crop,h_272,x_19/v1484740348/スクリーンショット_2016-08-06_21.52.30_qqy1nv.png",
        };
    }
    replyChannel(channel, text){
        this.jack.postMessageToGroup(channel, text, this.params);
    }
}

module.exports = MySlackBot;
