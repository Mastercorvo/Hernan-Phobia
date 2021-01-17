
import './App.css';

import Inicio from "./inicio/inicio";

import LevelOne from "./Nivel 1/LevelOne";

import { useState } from 'react';

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {start? <LevelOne/>:<Inicio setStart={setStart}/>}
      
    </div>
  );
}

export default App;
