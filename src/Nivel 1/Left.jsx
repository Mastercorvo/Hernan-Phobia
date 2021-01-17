
import './left.css';

import { useState } from 'react';

function Left ({inputText, outputText, writing, room, setLight, setPasswordPc, portalFinal, setFinal, light}){

    function onClickInterruptor(){

        setLight(v=>!v);

    }

    function onClickPuerta(){

        if(writing.current) return false;

        inputText({text:'— Saya: Esta puerta está cerrada con llave.'});
        outputText();

    }

    const [kazoni, setKazoni] = useState(false)

    function onClickKazoni(){

        if(writing.current) return false;

        if(kazoni && !light){

          inputText({text:'— Saya: Hola, hola.... no responde.'});
          outputText();

        }else{

          if(light){
  
            inputText({text:'— Saya: Esta cosa solo hace ruidos extraños.'});
            outputText();
  
          }else{
  
            inputText({text:'— Desconocido: Hola'});
            inputText({text:'— Saya: ¡Aah! ¿Hablas?'});
            inputText({text:'— Desconocido: Sí cuando la luz no me adormece,oye llevo mucho tiempo con esta forma extraña, no es la mía ¿Sabes algún conjuro para revertir esto?'});
            inputText({text:'— Saya: No sé de magia perdón y a todo esto ¿Quien eres?'});
            inputText({text:'— Kazoni: Soy Kazoni y no debería estar aquí, fui traído. Hernan haces estas cosas amenudo pero ahora creo que hay algo que no lo sacia. Esto no es normal y.... ¡HA! haaaa... Te hablo luego.'});
            inputText({text:'— Saya: ¿Qué? Hola, hola... No entiendo nada.'});
            outputText();
  
            setKazoni(true);

          }
          
        }

    }

    function onClickPapelera(){

        if(writing.current) return false;

        inputText({text:'— Saya: Huele realemnte horrible, pero nuca he olido algo así.', speed:'insta'});
        outputText();

    }

    function onClickCharco(){

        if(writing.current) return false;

        if(portalFinal){

          setFinal(true);

          setLight(true);

        }else{

          inputText({text:'— Saya: La persona que vive aquí es un puerco en toda regla.'});
          outputText();

        }

    }

    const [displayTv, setDisplayTv] = useState(false)

    function onClickPantalla() {

        setDisplayTv(true);

    }

    const [tvCondition, setTvCondition] = useState(false);

    function inputOnChange(text){

        if(text.target.value === '16') {
          
          setTvCondition(true);

          setPasswordPc(true);

        }

    }

    if(room !== 1) return false;

    return (<div className="Left">

        <div className="modal" style={{display: displayTv?'flex':'none'}}>

            {tvCondition? <><p>¡Lo adivinaste! La contraseña es: sdfje92fh293dnmf9widj9snmw980d938e39h9'847</p>
            <div className="button" onClick={()=>{
                
                setDisplayTv(false);
                inputText({text:'— Saya: Ya memorice la contraseña. Ahora ¿Dónde usarla? ¿Que tal en el pc? ¡Jugador lleva me allá!'});
                outputText(true);
                
                }}>Salir</div>
            </> :<><p>Erase una vez un número  que no podía saltar, saltaba, saltaba pero no podía saltar. Un día conoció a un numero que cuando se acostaba se veía el infinito. Ambos tuvieron un hijo, su hijo se llama:</p>

            <input type="text" onChange={inputOnChange}/>
            <div className="button1" onClick={()=>setDisplayTv(false)}>Salir</div>
            </>}

        </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg8"
        width="1920"
        height="1080"
        version="1.1"
        viewBox="0 0 508 285.75"
        className="main-svg"
      >
        <g id="layer1" fillOpacity="1" transform="translate(165.554 -12.095)">
          <path
            id="rect835-8"
            fill="#56ffca"
            stroke="none"
            strokeDasharray="52.9167, 13.2292"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="13.229"
            d="M-165.554 12.095H342.446V297.845H-165.554z"
          ></path>
          <path
            id="rect977-3"
            fill="#5697ff"
            stroke="none"
            strokeDasharray="52.9167, 13.2292"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="13.229"
            d="M-165.554 154.97H342.446V297.845H-165.554z"
          ></path>
          <g
            id="puerta"
            onClick={onClickPuerta}
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
          >
            <path
              id="rect1381"
              fill="#875700"
              strokeWidth="1.81"
              d="M209.399 27.762H288.01800000000003V154.97H209.399z"
              opacity="1"
            ></path>
            <circle
              id="path1383"
              cx="274.033"
              cy="89.476"
              r="10.205"
              fill="#fff800"
              strokeWidth="1.786"
              opacity="1"
            ></circle>
          </g>
          <g id="papelera" stroke="none" strokeOpacity="1" onClick={onClickPapelera}>
            <g
              id="g1401"
              fill="#fff"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              transform="translate(-165.554 12.095)"
            >
              <path
                id="path1396"
                strokeWidth="0.02"
                d="M267.421 69.565l-7.627 3.814 1.964 8.553-1.618 3.814-.346 5.547 8.668 2.427 7.396-2.427.231-7.859 4.623-3.351-.346-7.513-7.397-.346z"
              ></path>
              <path
                id="path1392"
                strokeWidth="0.019"
                d="M237.387 77.758l-4.563 4.79-.304 5.4 4.335 2.206 5.551.532 2.586-4.03 1.369-3.499-1.901-4.03-5.096-.685z"
              ></path>
              <path
                id="path1394"
                strokeWidth="0.036"
                d="M256.044 72.132l-10.099-1.745-3.333 5.448.997 7.03 9.569 9.408 9.014 3.396.097-5.762 1.312-6.054-2.121-5.95z"
              ></path>
            </g>
            <path
              id="rect1385"
              fill="#000"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="1.173"
              d="M65.063 98.985h46.767l-11.154 55.985H75.174z"
              opacity="1"
            ></path>
          </g>
          <path
            id="charco"
            onClick={onClickCharco}
            fill="#03f"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.097"
            d="M-26.415 173.663c-16.706-5.042-46.8.986-49.054 18.291-1.301 9.99 21.85 7.788 24.666 17.46 2.455 8.434-14.4 16.8-9.977 24.389 8.817 15.126 35.679 12.719 52.103 6.651 9.938-3.671 19.207-13.178 21.34-23.557 1.317-6.41-2.004-13.698-6.375-18.568-5.52-6.152-16.078-5.265-22.448-10.532-4.486-3.709-4.682-12.452-10.255-14.134z"
          ></path>
          <g
            id="pantalla"
            onClick={onClickPantalla}
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
          >
            <path
              id="rect1405"
              fill="#000"
              strokeWidth="1.436"
              d="M-117.57 34.946H19.521000000000015V119.673H-117.57z"
              opacity="1"
            ></path>
            <g
              id="g1456"
              fill="#00ff0d"
              strokeWidth="1.9"
              transform="matrix(.50415 0 0 .50415 -129.828 32.336)"
            >
              <rect
                id="rect1407"
                width="118.917"
                height="10.49"
                x="56.804"
                y="34.311"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-0"
                width="98.506"
                height="10.49"
                x="56.804"
                y="51.416"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-01"
                width="75.827"
                height="10.49"
                x="56.804"
                y="68.521"
                opacity="1"
                ry="4.896"
              ></rect>
              <rect
                id="rect1407-6"
                width="101.908"
                height="10.49"
                x="56.804"
                y="85.626"
                opacity="1"
                ry="5.131"
              ></rect>
            </g>
            <g
              id="g1456-9"
              fill="#00ff0d"
              strokeWidth="1.9"
              transform="matrix(.28802 0 0 .28802 -46.337 46.985)"
            >
              <rect
                id="rect1407-9"
                width="74.297"
                height="10.49"
                x="56.804"
                y="34.311"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-0-5"
                width="114.254"
                height="10.49"
                x="56.804"
                y="51.416"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-01-5"
                width="98.137"
                height="10.49"
                x="56.804"
                y="68.521"
                opacity="1"
                ry="4.896"
              ></rect>
              <rect
                id="rect1407-6-2"
                width="71.724"
                height="10.49"
                x="56.804"
                y="85.626"
                opacity="1"
                ry="5.131"
              ></rect>
            </g>
            <g
              id="g1456-9-4"
              fill="#00ff0d"
              strokeWidth="1.9"
              transform="matrix(.33887 0 0 .33887 -114.993 78.442)"
            >
              <rect
                id="rect1407-9-9"
                width="101.07"
                height="10.49"
                x="56.804"
                y="34.311"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-0-5-4"
                width="89.583"
                height="10.49"
                x="56.804"
                y="51.416"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-01-5-2"
                width="100.366"
                height="10.49"
                x="56.804"
                y="68.521"
                opacity="1"
                ry="4.896"
              ></rect>
              <rect
                id="rect1407-6-2-4"
                width="79.6"
                height="10.49"
                x="56.804"
                y="85.626"
                opacity="1"
                ry="5.131"
              ></rect>
            </g>
            <g
              id="g1456-9-4-4"
              fill="#00ff0d"
              strokeWidth="1.9"
              transform="matrix(.32616 0 0 .32616 -53.04 77.004)"
            >
              <rect
                id="rect1407-9-9-0"
                width="65.609"
                height="10.49"
                x="56.804"
                y="34.311"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-0-5-4-1"
                width="53.31"
                height="10.49"
                x="56.804"
                y="51.416"
                opacity="1"
                ry="5.131"
              ></rect>
              <rect
                id="rect1407-01-5-2-3"
                width="75.827"
                height="10.49"
                x="56.804"
                y="68.521"
                opacity="1"
                ry="4.896"
              ></rect>
              <rect
                id="rect1407-6-2-4-5"
                width="101.908"
                height="10.49"
                x="56.804"
                y="85.626"
                opacity="1"
                ry="5.131"
              ></rect>
            </g>
            <circle
              id="path1541"
              cx="5.232"
              cy="48.444"
              r="5.613"
              fill="#fff"
              strokeWidth="1.736"
              opacity="1"
            ></circle>
          </g>
          <g
            id="interruptor"
            onClick={onClickInterruptor}
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
          >
            <rect
              id="rect1543"
              width="16.036"
              height="25.947"
              x="166.93"
              y="55.248"
              fill="#fff"
              strokeWidth="1.24"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1545"
              width="5.345"
              height="10.424"
              x="172.275"
              y="63.01"
              fill="#000"
              strokeWidth="2.133"
              opacity="1"
              ry="0.971"
            ></rect>
          </g>
          <g
            id="kazoni"
            onClick={onClickKazoni}
            fill="#000"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2.646"
            transform="translate(117.737 116.453) scale(.21285)"
          >
            <rect
              id="rect1547"
              width="87.69"
              height="87.69"
              x="264.583"
              y="458.107"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549"
              width="81.643"
              height="81.643"
              x="306.917"
              y="424.845"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-9"
              width="81.643"
              height="81.643"
              x="341.69"
              y="391.583"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-5"
              width="81.643"
              height="81.643"
              x="355.298"
              y="483.81"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-8"
              width="81.643"
              height="81.643"
              x="254"
              y="371.929"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-3"
              width="81.643"
              height="81.643"
              x="377.976"
              y="355.298"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-99"
              width="81.643"
              height="81.643"
              x="175.381"
              y="382.512"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-1"
              width="81.643"
              height="81.643"
              x="167.821"
              y="453.571"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-6"
              width="81.643"
              height="81.643"
              x="421.821"
              y="473.226"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-4"
              width="81.643"
              height="81.643"
              x="261.56"
              y="521.607"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-7"
              width="81.643"
              height="81.643"
              x="370.417"
              y="548.821"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-33"
              width="81.643"
              height="81.643"
              x="300.869"
              y="592.667"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-0"
              width="81.643"
              height="81.643"
              x="198.06"
              y="566.964"
              opacity="1"
              ry="1.494"
            ></rect>
            <rect
              id="rect1549-13"
              width="81.643"
              height="81.643"
              x="462.643"
              y="406.702"
              opacity="1"
              ry="1.494"
            ></rect>
          </g>
        </g>
      </svg>
    );


    </div>);

}

export default Left;