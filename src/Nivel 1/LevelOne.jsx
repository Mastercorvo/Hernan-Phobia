
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
    const writing = useRef(false);

    const currentIdText = useRef(0)

    const [showText, setShowText] = useState(false);

    const forceText = useRef(0);

    const oldText = useRef('');

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

                    }

                }, i * speed);
    
            }

        }

        if(arrayTexts.current.length === 0) writing.current = false;

    }

    function outputText(){

        console.log(forceText.current, 'current initial');

        if(forceText.current === 0){

            const COPY = [...arrayTexts.current];
    
            const currentText = COPY.shift();
    
            arrayTexts.current = [...COPY];
            
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

    return (<div className="levelOne" >

        <div className="arrowLeft arrow"></div>
        <div className="arrowRight arrow"></div>

        <Front view={view} inputText={inputText} outputText={outputText} writing={writing} />
        <Left view={view} />
        <Right view={view} />
        <Back view={view} />

        <div className="text" style={{display: showText?'block':'none'}} onClick={hiddeText}>

            <p>{TEXT}</p>

        </div>

    </div>);

}

export default LevelOne;