import {useEffect, useState} from "react";
import axios from 'axios'
// import { Link } from "react-router-dom"

function Home() {
    const [token, setToken] =useState("")

    axios("https://accounts.spotify.com/api/token", {
        headers: {
            
        }

    })



  return (
    <div>
        <h1>Home</h1>
       

    </div>
  )
}

export default Home