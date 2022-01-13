import React, { useState, useEffect } from 'react' 
import genreS from './genres.module.css'
import { Link } from "react-router-dom";
const {getSpotifyToken, getGenres} =  require('./apiConnector')

export default function GenrePage({token, setToken}) {
    const [genres, setGenres] = useState([])
    const [genSucc, setGenSucc] =  useState(false)

  //setMyText(typeof getSpotifyToken)
  useEffect(() => {
    getSpotifyToken().then(res => {
        if(res.success){
            setToken(res.data)                
            getGenres(res.data).then(g => {                  
                  if(g.success){                     
                      setGenSucc(true)
                      setGenres(g.data)
                  }
                })
        }        
      })
  },[])
  
  return(
      <div>
          <h1>select your preferred genre</h1>
          {
            genSucc ? (<ul className={genreS}>
                {genres.map(g => {
                    return(
                        <li key={g.id}>
                          <Link to={g.id}>{g.name}</Link>                        
                        </li>
                    )  
                })}
            </ul> ): <h2>spotify is not available</h2>
          }         
      </div>
  )
}