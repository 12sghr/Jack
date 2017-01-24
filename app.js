const MySlackBot = require("./slackBot");

const mySlackBot = new MySlackBot();
const jack = mySlackBot.jack;

const params = mySlackBot.params;

jack.on("start", () => {
    jack.postMessageToGroup("test", "Jack's here!", params);
    jack.postMessageToUser("otter", "Hey", params);
});

jack.on("message", (data) => {
    const test = /test/;

    if(test.test(data.text)){
        jack.postMessageToUser("otter", "YO", params);
    }
});
