const MySlackBot = require("./slackBot");
const Weather = require("./weather");
const http = require("http");

const weather = new Weather();
const mySlackBot = new MySlackBot();
const jack = mySlackBot.jack;

const params = mySlackBot.params;

jack.on("start", () => {
    jack.postMessageToGroup("test", "Jack's here!", params);
    jack.postMessageToUser("otter", "Hey", params);
    weather.pushWeather();
});

jack.on("message", (data) => {
    const test = /test/;

    if(test.test(data.text)){
        jack.postMessageToUser("otter", "YO", params);
    }
});

http.createServer(() => {}).listen(process.env.PORT || 5000);
