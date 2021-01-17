
import './App.css';

import React, { useState } from 'react';

import LevelOne from './Nivel 1/LevelOne';
import Inicio from './inicio/inicio';

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="App">

      {start? <LevelOne/>:<Inicio setStart={setStart}/>}
      
    </div>);
         
}

export default App;
