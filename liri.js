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
        // console.log("hello");
        console.log(partsArray[1]);
        if (partsArray[0] === "Spotify-this-song") {

            // function spotify(song) {

            spotify.search({ type: 'track', query: partsArray[1] }, function(err, data) {
                    if (err) {
                        console.log('Error occurred: ' + err);
                        return;
                    } else {
                        //     var songInfo = data.tracks.items[0];
                        //     var songResult = console.log(songInfo.artists[0].name);
                        //     console.log(songInfo.name);
                        //     console.log(songInfo.album.name);
                        //     console.log(songInfo.preview_url);
                        //     console.log(songResult);

                        console.log(JSON.stringify(data, null, 2));
                    }


                })
                // }

        }
        // this is where spotify ends

        if (user.question === "My-tweets") {
            var client = new Twitter({
                consumer_key: twitterKeys.twitterKeys.consumer_key,
                consumer_secret: twitterKeys.twitterKeys.consumer_secret,
                access_token_key: twitterKeys.twitterKeys.access_token_key,
                access_token_secret: twitterKeys.twitterKeys.access_token_secret

            });

            var params = {
                screen_name: "coding_tv"
            };
            client.get('statuses/user_timeline', params, function(error, tweets, response) {
                if (error) {
                    console.log(JSON.stringify(error));
                    return;
                } else {

                    console.log(JSON.stringify(tweets[0].text, null, 2));
                }
            });
        }
    })
});