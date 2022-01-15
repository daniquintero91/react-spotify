import { useState, useEffect, useRef } from 'react'
const {getSpotifyToken, getGenres, getPlaylistByGenre } =  require('./apiConnector')

export default function PlayListPage({token, setToken}) {
    const [gen, setGen] = useState({})    
    const [pltoken, setPlToken] = useState('')
    const [genFounded, setGenFounded] = useState({})
    const [playList, setPlayList] = useState([])
    const myGendre = useRef('');    

    useEffect(() => {
        getSpotifyToken().then(res => {
            if(res.success){
                setPlToken(res.data)                
                getGenres(res.data).then(g => {                      
                      if(g.success){                        
                        setGen(g.data)                        
                      }
                    })
            }        
          })
      },[])

      useEffect(() => {        
        if(genFounded?.id){
            getPlaylistByGenre(pltoken, genFounded.id)
            .then(res => {                
                if(res.success){                                 
                    setPlayList(res.data)
                }
            })
        }
    },[genFounded])


    function finder(e){
        e.preventDefault();        
        const match = []     
        gen.forEach(element => {
            if(element.name.toUpperCase().includes(myGendre.current.value.toUpperCase())){
                match.push({name: element.name,id: element.id})
            }
        })       
        if(match.length > 0){
            setGenFounded(match[0])
        }       
       }

    return (
    <div>
     <form onSubmit={finder}>
      <input type="text" ref={myGendre} />
      <button onClick={(e) => finder(e)}>BUSCA PLAYLIST</button>
     </form>
     {
         playList.length > 0 ?(
         <>
            <h1>LAS PLAYLIST DEL GÉNERO ELEGIDO SON:</h1>
            <ul>
                {              
                  playList.map(pl => <li key={pl.id}>{pl.name}</li>)                      
                }
            </ul>
         </>) : <></>
     }

    </div> 
    )
}