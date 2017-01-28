const MySlackBot = require("./slackBot");
const CronJob = require("cron").CronJob;
const request = require("request-promise");

const mySlackBot = new MySlackBot();

class Weather{
    constructor(){
        this.currentTime = new Date();
        this.options = {
            uri: "http://api.openweathermap.org/data/2.5/forecast/daily?id=",
            json: true,
        };
    }

    pushWeather(){
        const job = new CronJob("30 6 * * *", () => {
            this.options.uri += ("1850144&units=metric&cnt=1&APPID=" + process.env.APIID_OPENWEATHERMAP);
            request.get(this.options)
            .then((res) => {
                let minTemp = res.list[0].temp.min;
                let maxTemp = res.list[0].temp.max;
                let humidity = res.list[0].humidity;
                let weather = res.list[0].weather[0].description;
                let windSpeed = res.list[0].speed;
                let percentClouds = res.list[0].clouds;
                mySlackBot.replyChannel("test", "今日の東京\n天気 " + weather + "\n雲量 " + percentClouds + "\n最高気温 " + maxTemp + "℃\n最低気温 " + minTemp + "℃\n湿度 " + humidity + "％\n風速 " + windSpeed + "m/s");
            });
        }, null, false, "Asia/Tokyo");
        job.start();
    }


}

module.exports = Weather;
