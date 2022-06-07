import { useState, useEffect } from "reactn"


import SpotifyPlayer from "react-spotify-web-playback"
import axios from "axios"
import { SpotifyConnect } from "../components/SpotifyConnect"


function Home() {
  const [token, setToken] = useState([])
  const [search, setSearch] = useState("")
  const [tracks, setTracks] = useState([]) 
  const [playTrack, setPlayTrack] = useState([])

  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get("code")
  console.log(code)

  useEffect(() => {
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


   


  return (
    <>
         <h1>Spotify</h1>
         <SpotifyConnect />
        <form onSubmit={searchSubmit}>
        <input type="text" placeholder="search for music" value={search} onChange={e => setSearch(e.target.value)}></input>
        <button>Search</button>
        </form>
        <div className="" style={{ overflowY: 'auto' }}>
          <ul>
          {tracks.map(track =>
          <article>
            <button onClick={track => setPlayTrack(track.uri)}>Click</button>
            {track.artist}
            {track.name}
            {track.uri}
            <img src={track.album.images[1].url} style={{height: "64px", width: "64px"}}></img>
          
          </article>)} 
          

          </ul>
          
        </div>
        <div>
         {code && <SpotifyPlayer accessToken={code} uris={playTrack}  />}
        </div>
        

       

    </>
  )
}

export default Home
  
    
   



