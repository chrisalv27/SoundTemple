const request = require('request');
const dotenv = require("dotenv");

dotenv.config();

const client_id =process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const spotifyAuth = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic' + (new Buffer(client_id + ':' + client_secret ).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

request.post(spotifyAuth, function(error, response, body) {
    console.log("request.post")
    if (!error && response.statusCode === 200) {

        const token = body.access_token;
        const options = {
            url: 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
            headers: { 'Authorization': 'Bearer ' + token
        },
        json: true
        };
        request.get(options, function(error, response, body) {
            console.log(response, "SPOTIFY")
        })
    }
})