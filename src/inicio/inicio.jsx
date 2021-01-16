
import './inicio.css';

// import ReactPlayer from 'react-player'; uninstall plz

//import ReactAudioPlayer from 'react-audio-player'; uninstall plz

import ThemeInicio from './sonidos/pepe.webm'

function Inicio () {

    return (<div className="inicio">

        {/* <audio src={ThemeInicio} autoPlay loop/> */}

        <h1 className="title-inicio">Hernan Phobia</h1>
        <div className="hernan"></div>
        <div className="casa"></div>
        <div className="menu">

            <h2>Menu</h2>

            <p>Jugar</p>
            <p>Tutorial</p>
            <p>Configuraciones</p>
            <p>Creditos</p>

        </div>

    </div>);

}

export default Inicio