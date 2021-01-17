
import './App.css';

import Inicio from "./inicio/inicio";

import LevelOne from "./Nivel 1/LevelOne";

import { useState, Suspense } from 'react';

function App() {

  const [start, setStart] = useState(false);

  return (
    <Suspense fallback={<div className="load">

    <p>Cargando...</p>

  </div>}>
      <div className="App">

        {start? <LevelOne/>:<Inicio setStart={setStart}/>}
        
      </div>
    </Suspense>
  );
}

export default App;
