
import './levelOne.css';

import Front from './Front';
import Left from './Left';
import Back from './Back';
import Right from './Right';
import { useRef, useState } from 'react';

function LevelOne(){

    const view = useState(0);
    const [TEXT, setTEXT] = useState('');
    const arrayTexts = useRef([]);
    const [writing, setWriting] = useState(false);

    const currentIdText = useRef(0)

    const [showText, setShowText] = useState(false);

    function escribir(DATA){

        currentIdText.current += 1;

        const ID = currentIdText.current;

        let COPY = DATA;

        if(!DATA) COPY = {}

        let {text, speed, wait, replace} =  COPY;

        if(!text) text = '';
        if(!speed) speed = 100;
        if(!wait) wait = 0;
        if(!replace) replace = true;

        const originalText = text;

        const modifyText = text + "_";

        if(replace) setTEXT(()=>'');

        if(text) setShowText(()=>true);

        if(text) setWriting(()=>true);

        for(let i = 0; wait/300 > i; i++){

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
        
                        if(i === text.length - 1) setWriting(false);

                    }
    
                }, i * speed);
    
            }

        }

    }

    function outputText(){

        const COPY = [...arrayTexts.current];

        const currentText = COPY.shift();

        escribir(currentText);

        arrayTexts.current = [...COPY]

    }

    function inputText(text){

        const COPY = [...arrayTexts.current];

        COPY.push(text);

        arrayTexts.current = [...COPY]

    }

    function hiddeText (){

        setShowText(()=>false);
        outputText()

    }

    return (<div className="levelOne" >

        <div className="arrowLeft arrow"></div>
        <div className="arrowRight arrow"></div>

        <Front view={view} inputText={inputText} outputText={outputText} />
        <Left view={view} />
        <Right view={view} />
        <Back view={view} />

        <div className="text" style={{display: showText?'block':'none'}} onClick={hiddeText}>

            <p>{TEXT}</p>

        </div>

    </div>);

}

export default LevelOne;