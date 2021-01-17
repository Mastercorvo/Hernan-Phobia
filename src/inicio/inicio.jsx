
import React, { useState } from 'react';
import './inicio.css';

import ReactPlayer from 'react-player';

//import ReactAudioPlayer from 'react-audio-player'; uninstall plz

import Hernan from "./principal-min.png"

// import ThemeInicio from './sonidos/pepe.webm'

function Inicio ({setStart}) {
    
    function onClickPlay(){

        setStart(true);

    }

    function onClickTutorial(){

        alert('Solo haz click por todos lados.');

    }

    const [startCredits, setStartCredits] = useState(false);

    return (<div className="Inicio">

        <div className="credits" style={{display:startCredits?'flex':'none'}} onClick={()=>setStartCredits(false)}>
            <p>Música del menú: Amnesia:A Machine for Pigs Main Theme</p>
            <p>Músicas de la radio:</p> <p>GTA San Andreas: Meeting Big Smoke Scene</p><p> Sellout by Aurelio Voltaire (OFFICIAL Radio Edit with Lyrics) <br/> [Esta música es por diversión]</p>
            <p>Tecnologías usadas: ReactJs, Javascript, Css, Html5.</p>
            <p>El resto fue hecho por Jesús Corvo ;)</p>
            <a href="https://www.facebook.com/GIGA.KIWI.FRUITPALACE/">Apoya lo mandando le un mensaje aquí</a>
            <p>Salir</p>

        </div>

        <ReactPlayer url="https://www.youtube.com/watch?v=hh2AWoQtFO81" loop={true} playing={true} width="0" height="0" ></ReactPlayer>

        <h1 className="title-inicio">Hernan Phobia</h1>

        <img className="hernan" src={Hernan}/>

        <div className="casa"></div>
        <div className="menu">

            <h2>Menu</h2>

            <p onMouseDown={onClickPlay}>Jugar</p>
            <p onMouseDown={onClickTutorial}>Tutorial</p>
            <p onMouseDown={()=>setStartCredits(true)}>Creditos</p>

        </div>

    </div>);

}

export default Inicio