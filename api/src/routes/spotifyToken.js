const { AsyncRouter: Router } = require("express-async-router")
const router = Router()
const path = require("path")

const SpotifyWebApi = require('spotify-web-api-node')
const dotenv = require("dotenv");


const envPath = path.resolve(__dirname, "../../../.env")
dotenv.config({
    path: envPath
})
console.log(process.env.ENV)

const clientId =process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
router.get("/", async (req, res) => {
  const data = await spotifyApi.clientCredentialsGrant()
  res.json(data)
});

module.exports = router