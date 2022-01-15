import {Link, useHref} from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
          <img src="./src/Spotify-Logo.png" alt=""></img>
          <h1>BIENVENIDO A TU SPOTIFY</h1>
          <h2> Selecciona género o Playlist</h2>
          <button>
             <Link to="/byGenre">GENERO</Link>
          </button> 
          <div> 
          <button>
             <Link to="/byPlayList">PLAYLIST</Link>
          </button>
          </div>
        </div>        
    )
}