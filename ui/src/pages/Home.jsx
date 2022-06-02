import { useState, useEffect } from "reactn"

// import { Link } from "react-router-dom"

import axios from "axios"

function Home() {
  const [token, setToken] = useState([])

  useEffect(() => {
    axios.get("http://localhost:1337/spotify").then(
      response => {
        setToken(response.data.body.access_token);
        console.log(response.data.body.access_token)
      }
    )
  }, []);


   


  return (
    <div>
        <h1>Home</h1>
        <p>Spotify Connect Button</p>
       

    </div>
  )
}

export default Home