import { useState, useEffect } from "reactn";
import Player from "../components/SpotifyPlayer";
import Footer from "../components/Footer";

import axios from "axios";
import { SpotifyConnect } from "../components/SpotifyConnect";

function Home() {
  const [token, setToken] = useState([]);
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playTrack, setPlayTrack] = useState("");
  const [code, setCode] = useState("");
  const [playerToken, setPlayerToken] = useState("");

  useEffect(() => {
    async function play() {
      if (code) {
        const response = await axios.post("http://localhost:1337/spotify", {
          code,
        });
        setPlayerToken(response.data.accessToken);
        console.log(response.data, "DATA");
      }
    }
    play();
  }, [code]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setCode(queryParams.get("code"));
    axios.get("http://localhost:1337/spotify").then((response) => {
      setToken(response.data.body.access_token);
      console.log(response.data.body.access_token);
    });
  }, []);
  const searchSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .get("https://api.spotify.com/v1/search", {
          headers: {
            Accept: "application/json",

            Authorization: `Bearer ${token}`,
          },
          params: {
            q: search,
            type: "track",
          },
        })
        .then((response) => {
          setTracks(response.data.tracks.items);
          console.log(response.data.tracks.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTrack = (track) => {
    setPlayTrack(track.uri);
  };

  return (
    <>
      <h1 className="flex justify-center text-6xl p-5 bg-green-800 text-white font-bold shadow-lg shadow-green-300 font-body">
        Sound Temple
      </h1>

      <div className="flex flex-col h-screen bg-black items-center overflow-auto font-bangers">
        <SpotifyConnect />
        <form onSubmit={searchSubmit}>
          <input
            className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            type="text"
            placeholder="search for music"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="bg-green-800 hover:bg-green-500 text-white text-xl py-2 px-4 border border-black rounded ml-3 shadow-md shadow-green-300 font-bangers">
            Search
          </button>
        </form>

        <div className="container mx-auto ">
          {tracks.map((track) => (
            <div className="grid grid-cols-4 pb-4">
              <button
                className="bg-green-800 hover:bg-green-500 text-white text-xl py-2 px-4 border border-black rounded shadow-md shadow-green-300 font-bangers"
                onClick={() => handleTrack(track)}
              >
                Play
              </button>
              <div className="text-white text-3xl text-bold">
                {track.artist}
              </div>
              <div className="text-white text-bold">{track.name}</div>

              <img
                className="shadow-md shadow-green-300 ml-1"
                src={track.album.images[2].url}
                // style={{ height: "64px", width: "64px" }}
              ></img>
            </div>
          ))}
        </div>
        <div className="bg-green-800">
          {playerToken && playTrack && (
            <Player accessToken={playerToken} trackUri={playTrack} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
