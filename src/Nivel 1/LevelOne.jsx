
import './levelOne.css';

import Front from './Front';
import Left from './Left';
import Back from './Back';
import Right from './Right';
import { useRef, useState } from 'react';

import ReactPlayer from 'react-player';

function LevelOne(){

    const view = useState(0);
    const [TEXT, setTEXT] = useState('');
    const arrayTexts = useRef([]);
    const writing = useRef(false);

    const currentIdText = useRef(0)

    const [showText, setShowText] = useState(false);

    const forceText = useRef(0);

    const oldText = useRef('');

    const [room, setRoom] = useState(0);

    const [light, setLight] = useState(true);

    const [passwordPc, setPasswordPc] = useState(false);

    const [portalFinal, setPortalFinal] = useState(false);

    const [final, setFinal] = useState(false);

    const [corneta, setCorneta] = useState(0);

    function escribir(DATA){

        currentIdText.current += 1;

        const ID = currentIdText.current;

        let COPY = DATA;

        if(!DATA) COPY = {}

        let {text, speed, wait, replace} =  COPY;

        if(!text) text = '';
        if(!speed) speed = 40;
        if(!wait) wait = 0;
        if(!replace) replace = true;

        const originalText = text;

        const modifyText = text + "_";

        if(replace) setTEXT(()=>'');

        if(text) setShowText(()=>true);

        if(text) writing.current = true;

        oldText.current = text;

        if(speed === 'insta'){

            setTEXT(text);

            if(arrayTexts.current.length === 0) hiddenCount.current = 1;

            forceText.current = 0;
            
            return false;

        }

        for(let i = 0; (wait/300) > i; i++){

            setTimeout(()=>{

                if(ID === currentIdText.current){

                    setTEXT(()=> (i%2 === 0)? modifyText:originalText);
    
                    if(i === ((wait/300) - 1)) writingText();

                }

            }, i * 300);

        }

        if(wait === 0) writingText();

        function writingText(){

            for(let i = 0; text.length > i; i++){
    
                setTimeout(()=>{

                    if(ID === currentIdText.current){
    
                        setTEXT(v=> v+text[i]);
                        
                    }
                    
                    if((i === (text.length-1)) && (ID === currentIdText.current)){

                        forceText.current = 0;

                        if(arrayTexts.current.length === 0) hiddenCount.current = 1;
                        if(arrayTexts.current.length === 0) writing.current = false;
                    }

                }, i * speed);
    
            }

        }

    }

    function outputText(purgue){

        if(forceText.current === 0){

            let COPY = [...arrayTexts.current];
    
            let currentText = COPY.shift();

            if(purgue){
                
                COPY = [...arrayTexts.current];
        
                currentText = COPY.pop();

                arrayTexts.current = [];

            }else{

                COPY = [...arrayTexts.current];
        
                currentText = COPY.shift();

                arrayTexts.current = [...COPY];

            }
            
            forceText.current = 1;
            
            escribir(currentText);

        }else{

            currentIdText.current += 1;

            setTEXT(()=>oldText.current)

            forceText.current = 0;

        }

    }

    function inputText(text){

        const COPY = [...arrayTexts.current];

        COPY.push(text);

        arrayTexts.current = [...COPY]

    }

    const hiddenCount = useRef(0);

    function hiddeText (){

        if(hiddenCount.current === 1){
            
            setShowText(()=>false);
        
            writing.current = false;

            forceText.current = 0

            hiddenCount.current = 0

            return false;

        }

        if(arrayTexts.current.length === 0) hiddenCount.current = 1;
        outputText();

    }

    const [reproduct, setReproduct] = useState(false);

    function firsMusic(){

        setReproduct(true);

    }

    return (<div className="levelOne" style={{filter:light?'brightness(1)':'brightness(0.4)'}} >

        {(corneta !== 0) && <p className="corneta">{reproduct?'Reproduciendo ' + corneta:'Cargando...'}</p>}

        {(corneta === 1) && <ReactPlayer onStart={firsMusic} width="0" height="0" url="https://youtu.be/I7CuJKjIWYA" loop playing={corneta === 1}></ReactPlayer>}
        {(corneta === 2) && <ReactPlayer onStart={firsMusic} width="0" height="0" url="https://youtu.be/DIgDJgmHkQ8?list=PLBrz0CctEXH7MGKYgcq8lFQcdMf1jmxt8" loop playing={corneta === 2} ></ReactPlayer>}

        <div className="modal" style={{display: final?'flex':'none'}}>

            <h2>¡Felicidades has llegado al final de esta demo!</h2>
            <p>Si quieres el siguiente nivel o más de esto apoya al creador de este juego Jesús Corvo.</p>
            <a href="https://www.facebook.com/GIGA.KIWI.FRUITPALACE/">Contacta le y manden le un mensaje por facebook Aquí</a>
            <p>-Recarga la pagina para comenzar de nuevo-</p>
        </div>

        <div className="arrowLeft arrow" onClick={()=>{setRoom(v=>((v+1) === 4)?0:v+1)}}></div>
        <div className="arrowRight arrow" onClick={()=>{

            setRoom(v=>((v-1) === -1)?3:v-1)}
            
        }></div>

        <Front setCorneta={setCorneta} setReproduct={setReproduct} corneta={corneta} reproduct={reproduct} view={view} passwordPc={passwordPc} inputText={inputText} outputText={outputText} writing={writing} room={room} />
        <Left view={view} setPasswordPc={setPasswordPc} inputText={inputText} outputText={outputText} writing={writing} room={room} setLight={setLight} light={light} portalFinal={portalFinal} setFinal={setFinal}/>
        <Right view={view} inputText={inputText} outputText={outputText} writing={writing} room={room} />
        <Back view={view} inputText={inputText} outputText={outputText} writing={writing} room={room} setPortalFinal={setPortalFinal}/>

        <div className="text" style={{display: showText?'block':'none'}} onClick={hiddeText}>

            <p>{TEXT}</p>

        </div>

    </div>);

}

export default LevelOne;