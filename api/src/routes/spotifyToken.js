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
const redirectUri = process.env.REDIRECT_URI

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
})

// Retrieve an access token.
router.get("/", async (req, res) => {
  const data = await spotifyApi.clientCredentialsGrant()
  return res.json(data)
});

router.post("/", async (req, res) => {
  const code = req.body.code
  console.log(code, "HELLO")
  const data = await spotifyApi.authorizationCodeGrant(code)
    return res.json({
      accessToken: data.body.access_token
    })
  
})

module.exports = router