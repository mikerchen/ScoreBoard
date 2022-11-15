import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './Home/views/HomeView'
import GameConfig from './GameConfig/views/GameConfig';

function App() {
  return (
    <>
     <h1>ScoreBoard</h1>
     <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='game-start' element={<GameConfig />} />
     </Routes>
    </>
  );
}

export default App;