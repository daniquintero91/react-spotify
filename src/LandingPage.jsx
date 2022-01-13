import {Link} from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
          <h1>welcome to your spotify search engine</h1>
          <button>
             <Link to="/byGenre">search by genre</Link>
          </button> 
          <button>
             <Link to="/byPlayList">search by playlist</Link>
          </button>
        </div>        
    )
}