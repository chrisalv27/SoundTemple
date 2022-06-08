import { useState, useEffect } from "reactn"
import Player from "../components/SpotifyPlayer"



import axios from "axios"
import { SpotifyConnect } from "../components/SpotifyConnect"




function Home() {
  const [token, setToken] = useState([])
  const [search, setSearch] = useState("")
  const [tracks, setTracks] = useState([])
  const [playTrack, setPlayTrack] = useState("")
  const [code, setCode] = useState("")
  const [playerToken, setPlayerToken] = useState("")



  useEffect(() => {
    async function play() {
      if (code) {
        const response = await axios.post("http://localhost:1337/spotify", { code })
        setPlayerToken(response.data.accessToken)
        console.log(response.data, "DATA")

      }

    }
    play()

  }, [code])






  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    setCode(queryParams.get("code"))
    axios.get("http://localhost:1337/spotify").then(
      response => {
        setToken(response.data.body.access_token);
        console.log(response.data.body.access_token)

      }
    )
  }, []);
  const searchSubmit = async (e) => {
    e.preventDefault()
    try {
      axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Accept: 'application/json',

          Authorization: `Bearer ${token}`,
        },
        params: {
          q: search,
          type: "track"

        }
      }).then(response => {
        setTracks(response.data.tracks.items)
        console.log(response.data.tracks.items)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleTrack = (track) => {
    setPlayTrack(track.uri)
  }






  return (
    <div className="bg-state-300">

      <h1>Spotify</h1>
      <SpotifyConnect />
      <form onSubmit={searchSubmit}>
        <input type="text" placeholder="search for music" value={search} onChange={e => setSearch(e.target.value)}></input>
        <button>Search</button>
      </form>
      <div className="grid">
        <ul>
          {tracks.map(track =>
            <article>
              <button onClick={() => handleTrack(track)}>Click</button>
              {track.artist}
              {track.name}
              {track.uri}
              <img src={track.album.images[1].url} style={{ height: "64px", width: "64px" }}></img>
            </article>)}
        </ul>
        <div>
          {playTrack}
          {playerToken && playTrack && <Player accessToken={playerToken} trackUri={playTrack} />}
        </div>
      </div>
    </div>

  )
}

export default Home















