
import { useRef } from 'react';
import './right.css';

function Right ({inputText, outputText, writing, room}){

    function onClickVentana(){

      if(writing.current) return false;

      inputText({text:'— Saya: Parece que realmente este no es mi mundo.'});
      outputText();
      
    }

    const talked = useRef(false);

    function onClickCloset(){

      if(writing.current) return false;

        if(talked.current){

          inputText({text:'— Saya: ¿¡Estas ahí!? ¿¡Hola!? ¿¡Hola!? ...... Parece que se murio o algo.'});

        }else{

          inputText({text:'— Desconocida: ¡Hola! ¡¡HOLA!! ¿¡Hay alguien ahí!?'});
          inputText({text:'— Saya: Sí ¿Quien eres?'});
          inputText({text:'— Nazty: soy Nazty. Sacame de aquí por favor.'});
          inputText({text:'— Saya: Está bloqueada con llave. Buscare la forma de abrirlo solo espera.'});
          inputText({text:'— Nazty: ¡Oye! Yo te conozco eres Saya la que jugaba con libros de magia ¿No?'});
          inputText({text:'— Saya: Espera creo recordar...... No, no lo recuerdo. De hecho no recuerdo nada.'});
          inputText({text:'— Nazty: El Nakrost debe tener tu......... ¡HAAAA! ¡ESPERA! *Parece estrangulada* [Voz de estrangulada] ... Yo no la conozco lo jugo ¡¡HAAAaaaa!!'});
          inputText({text:'— Saya: ¿¡QUE PASA AHÍ DENTRO!? ¡HOLAAA! ¡Hola! ..... Demonios ¿Que está pasando? Será mejor que busque algunas respuestas.' });
  
          talked.current = true;

        }

      outputText();

    }

    if(room !== 3) return false;

    return (<div className="Right">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg8"
        width="1920"
        height="1080"
        version="1.1"
        viewBox="0 0 508 285.75"
        className="main-svg"
      >
        <g id="layer1" transform="translate(165.554 -12.095)">
          <path
            id="rect835-8-6-0"
            fill="#56ffca"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="52.9167, 13.2292"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="13.229"
            d="M-165.554 12.095H342.446V297.845H-165.554z"
          ></path>
          <path
            id="rect977-3-1-1"
            fill="#5697ff"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="52.9167, 13.2292"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="13.229"
            d="M-165.554 154.97H342.446V297.845H-165.554z"
          ></path>
          <g
            id="closet"
            onClick={onClickCloset}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
          >
            <path
              id="rect2107"
              fill="#875700"
              fillOpacity="1"
              stroke="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeWidth="26.154"
              d="M-104.265 50.388H55.31099999999999V252.16H-104.265z"
              opacity="1"
            ></path>
            <rect
              id="rect2111-9-4"
              width="56.01"
              height="170.144"
              x="-87.994"
              y="65.673"
              fill="none"
              fillOpacity="1"
              stroke="#000"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeWidth="3.923"
              ry="0"
            ></rect>
            <rect
              id="rect2111-9-4-6"
              width="56.01"
              height="170.144"
              x="-16.97"
              y="65.673"
              fill="none"
              fillOpacity="1"
              stroke="#000"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeWidth="3.923"
              ry="0"
            ></rect>
            <circle
              id="path2158"
              cx="-47.836"
              cy="151.273"
              r="6.341"
              fill="#feff00"
              fillOpacity="1"
              stroke="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeWidth="3.923"
            ></circle>
            <circle
              id="path2158-1"
              cx="-2.922"
              cy="151.273"
              r="6.341"
              fill="#feff00"
              fillOpacity="1"
              stroke="none"
              strokeDashoffset="0"
              strokeLinejoin="round"
              strokeWidth="3.923"
            ></circle>
            <g
              id="g2203"
              fill="none"
              stroke="#000"
              strokeLinejoin="miter"
              strokeWidth="10.583"
              transform="matrix(.41288 0 0 .41288 -183.873 -100.801)"
            >
              <path id="path2177" d="M431.845 474.83h81.25"></path>
              <path id="path2177-6" d="M431.845 457.019h81.25"></path>
              <path id="path2177-2" d="M431.845 439.208h81.25"></path>
            </g>
            <g
              id="g2203-9"
              fill="none"
              stroke="#000"
              strokeLinejoin="miter"
              strokeWidth="10.583"
              transform="matrix(.41288 0 0 .41288 -255.61 -101.384)"
            >
              <path id="path2177-4" d="M431.845 474.83h81.25"></path>
              <path id="path2177-6-4" d="M431.845 457.019h81.25"></path>
              <path id="path2177-2-8" d="M431.845 439.208h81.25"></path>
            </g>
          </g>
          <g
            id="ventana"
            onClick={onClickVentana}
            strokeMiterlimit="4"
            strokeOpacity="1"
            transform="matrix(.80362 0 0 .80362 187.496 174.24)"
          >
            <path
              id="rect874"
              fill="#870013"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8.691"
              d="M-47.248 -169.712H91.09300000000002V-55.56099999999999H-47.248z"
            ></path>
            <path
              id="rect884"
              fill="#0c4100"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="31.7479, 7.937"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7.937"
              d="M-47.248 -148.801H91.09300000000002V-55.56099999999999H-47.248z"
            ></path>
            <g id="g882" transform="matrix(.95314 0 0 1 -55.893 89.884)">
              <path
                id="rect876"
                fill="#212121"
                fillOpacity="1"
                stroke="none"
                strokeDasharray="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7.824"
                d="M9.07 -217.337H154.213V-169.712H9.07z"
              ></path>
              <path
                id="path878"
                fill="none"
                stroke="#fff"
                strokeDasharray="31.748, 7.937"
                strokeDashoffset="0"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeWidth="7.937"
                d="M9.07-193.525h145.143"
              ></path>
            </g>
            <path
              id="rect886"
              fill="#001141"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="31.7479, 7.937"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7.937"
              d="M-47.248 -169.712H91.09300000000002V-148.801H-47.248z"
            ></path>
            <path
              id="rect888"
              fill="#65c5d5"
              fillOpacity="0.312"
              stroke="#875700"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7.937"
              d="M-47.248 -169.712H91.09300000000002V-55.56099999999999H-47.248z"
            ></path>
            <path
              id="rect890"
              fill="#875700"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="23.8351, 5.9588"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5.959"
              d="M-47.248 -117.612H91.09300000000002V-107.66199999999999H-47.248z"
            ></path>
            <path
              id="rect890-6"
              fill="#875700"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="19.939, 4.98478"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4.985"
              d="M55.561 17.703H169.712V26.142H55.561z"
              transform="rotate(-90)"
            ></path>
          </g>
        </g>
      </svg>
    );

    </div>);

}

export default Right;