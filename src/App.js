import './App.css';
//import Connection from './Connection'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage';
import React, { useState } from 'react' 
import GenrePage from './GenrePage'
import PlayListFromGen from './PlayListFromGen'
import PlayListPage from './PlayListPage'

function App() {
  const [myToken, setMyToken] = useState('')
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/byGenre" element={<GenrePage token={myToken} setToken={setMyToken}/>}/>
      <Route path="/byGenre/:id" element={<PlayListFromGen token={myToken}/>}/>
      <Route path="/byPlayList" element={<PlayListPage token={myToken} setToken={setMyToken}/>}/>
    </Routes>
    </div>
  );
}

export default App;
