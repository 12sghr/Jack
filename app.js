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

jack.on("close", () => {
    jack.postMessageToGroup("test", "Zzz......", params);
});

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain",
    });
    response.write("Hello World");
    response.end();
}).listen(process.env.PORT || 5000);
