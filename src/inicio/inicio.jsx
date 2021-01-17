
import { useRef, useState } from 'react';
import './inicio.css';

// import ReactPlayer from 'react-player'; uninstall plz

//import ReactAudioPlayer from 'react-audio-player'; uninstall plz

import ThemeInicio from './sonidos/pepe.webm'

function Inicio ({setStart}) {
    
    function onClickPlay(){

        setStart(true);

    }

    function onClickTutorial(){

        alert('Solo haz click por todos lados.')

    }

    const [startCredits, setStartCredits] = useState(false);

    return (<div className="Inicio">

        <div className="credits" style={{display:startCredits?'flex':'none'}} onClick={()=>setStartCredits(false)}>
            <p>Musica del menu: Amnesia:A Machine for Pigs Main Theme</p>
            <p>Musicas de la radio:</p> <p>GTA San Andreas: Meeting Big Smoke Scene</p><p> Sellout by Aurelio Voltaire (OFFICIAL Radio Edit with Lyrics) <br/> [Esta música es por diversión]</p>
            <p>Tecnologias usadas: ReactJs, Javascript, Css, Html5.</p>
            <p>El resto fue hecho por Jesús Corvo ;)</p>
            <a href="https://www.facebook.com/GIGA.KIWI.FRUITPALACE/">Apoyalo mandandole un mensaje aquí</a>
            <p>salir</p>

        </div>

        <audio src={ThemeInicio} autoPlay loop/>

        <h1 className="title-inicio">Hernan Phobia</h1>
        <div className="hernan"></div>
        <div className="casa"></div>
        <div className="menu">

            <h2>Menu</h2>

            <p onClick={onClickPlay}>Jugar</p>
            <p onClick={onClickTutorial}>Tutorial</p>
            <p onClick={()=>setStartCredits(true)}>Creditos</p>

        </div>

    </div>);

}

export default Inicio