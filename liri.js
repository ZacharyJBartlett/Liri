var inquirer = require("inquirer");
var spotify = require('spotify');
var Twitter = require('twitter');
var twitterKeys = require('./keys.js');
inquirer.prompt([

    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }

]).then(function(user) {


    inquirer.prompt([

        {
            type: "input",
            name: "question",
            message: ["What would you like " + user.name + "?"]
        }



    ]).then(function(user) {
        var coolVar = user.question;
        var partsArray = coolVar.split(' - ');
        // console.log(partsArray[1]);
        if (user.question === "Spotify-this-song") {

            function spotify(song) {
                spotify.search({ type: 'track', query: partsArray[1] }, function(err, data) {
                    if (err) {
                        console.log('Error occurred: ' + err);
                        return;
                    } else {
                        var songInfo = data.tracks.items[0];
                        var songResult = console.log(songInfo.artists[0].name);
                        console.log(songInfo.name);
                        console.log(songInfo.album.name);
                        console.log(songInfo.preview_url);
                        console.log(songResult);
                    }
                })
            }

        }
        // this is where spotify ends

        if (user.question === "My-tweets") {
            var twitterKeys = new Twitter({
                consumer_key: keys.twitterKeys.consumer_key,
                consumer_secret: keys.twitterKeys.consumer_secret,
                access_token_key: keys.twitterKeys.access_token_key,
                access_token_secret: keys.twitterKeys.access_token_secret
            });
            client.get('favorites/list', function(error, tweets, response) {
                if (error) {
                    console.log('Error occurred: ' + error);
                    return;
                } else {
                    console.log(tweets);
                    console.log(response);
                }
            });
        }
    })
});