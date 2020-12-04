const request = require('request')

const url='http://api.weatherstack.com/current?access_key=766fc74b44e3a3fbf7563b37b6530aae&query=New%20York'

request(url, (error,response)=> {
    const data = JSON.parse(response.body);
    console.log("Current temperature in city is "+data.current.temperature+" and precipitation is "+data.current.precip);
});