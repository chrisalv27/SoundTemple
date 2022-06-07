import React from 'react'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8c4bf44fbdb04ce29afea058ad4ba988&response_type=code&redirect_uri=http://localhost:3000/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export const SpotifyConnect = () => {
  return (
    <a href={AUTH_URL}>Connect to Spotify</a>
  )
}
