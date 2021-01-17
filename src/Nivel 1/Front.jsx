
import { useEffect, useState, useRef } from 'react';
import './front.css';

function Front ({inputText, outputText, writing, room, passwordPc}){

    useEffect(()=>{

      inputText({text:'— Saya: ..................'});
      inputText({text:'— Saya: ¿Dónde estoy? ¿Por que mis senos son tan grandes? .... Tengo que llegar rápido a mi audición de canto.'});
      inputText({text:'— [System] Hey! Busca la manera de salir de aquí lo antes posible, hay mucho que hacer, busca y recolecta cualquier cosa para avanzar.'});

      outputText()

    },[])

    function onClickControl(){

      if(writing.current) return false;

      inputText({text:'— [INFO] Un control de super play.', speed: 'insta'});
      outputText()

    }

    function onClickAlfombra () {

      if(writing.current) return false;

      inputText({text:'— [INFO] Una alfombra.', speed: 'insta'});
      outputText()
      
    }

    function onClickCajon1(){

      if(writing.current) return false;

      inputText({text:'— [INFO] Este cajón está vacio', speed: 'insta'});
      outputText()

    }

    const llave1 = useRef(false);

    function onClickCajon2(){

      if(writing.current) return false;

      if(!llave1.current){

        inputText({text:'— [INFO] Este cajón tiene una llave.'});
        inputText({text:'*Llave obtenida*'});
        outputText();
        llave1.current = true;

      }else{

        inputText({text:'— [INFO] Este cajón está vacio', speed:'insta'});
        outputText();

      }

    }

    function onClickCajon3(){

      if(writing.current) return false;

      inputText({text:'— [INFO] Este cajón es algo peculiar.'});
      outputText()

    }

    const [pc, setPc] = useState(0);

    function onClickComputadora(){

      if(!writing.current){

        if ((pc === 0) && !passwordPc) {
          inputText({text:'— [INFO] Esta pc está bloqueda y huele feo.'});
          inputText({text:'— [INFO] Me seria muy útil saber la hora para saber si aun me queda tiempo.'});
          outputText();
          setPc(1)
        }else{

          if(passwordPc){

            inputText({text:'— Saya: Que estraño esta comptadora parace tener un virus. Solo alcanzo a ver una publicación de una red social que dice "Perdi el reto así que tomen: ILoveYordleGirls" y no puedo mover el cursor ni hacer nada.'})
            outputText();

            return false;

          }

          inputText({text:'— [INFO] Está bloqueda, necesito la contraseña.', speed: 'insta'})
          outputText();
          
        }

      }

    }

    if(room !== 0) return false;

    return (<div className="Front">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="svg8"
      width="1920"
      height="1080"
      version="1.1"
      viewBox="0 0 508 285.75"
      className="main-svg"
    >
      <defs id="defs2">
        <linearGradient
          id="linearGradient1325"
          x1="75.871"
          x2="368.861"
          y1="221.903"
          y2="221.903"
          gradientTransform="translate(-156.316 15.216)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1283"
        ></linearGradient>
        <linearGradient id="linearGradient1283">
          <stop id="stop1279" offset="0" stopColor="red" stopOpacity="1"></stop>
          <stop
            id="stop1281"
            offset="1"
            stopColor="#0f00ff"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <g id="layer1" fillOpacity="1" transform="translate(165.554 -12.095)">
        <path
          id="rect835"
          fill="#56ffca"
          stroke="none"
          strokeDasharray="52.9167, 13.2292"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="13.229"
          d="M-165.554 12.095H342.446V297.845H-165.554z"
        ></path>
        <path
          id="rect977"
          fill="#5697ff"
          stroke="none"
          strokeDasharray="52.9167, 13.2292"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="13.229"
          d="M-165.554 154.97H342.446V297.845H-165.554z"
        ></path>
        <g
          onClick={onClickComputadora}
          id="computadora"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            id="g1025"
            fill="#000"
            transform="matrix(.60187 0 0 .60187 9.818 63.394)"
          >
            <path
              id="rect989"
              strokeDasharray="55.3631, 13.8409"
              strokeWidth="13.841"
              d="M273.815 90.608H457.37199999999996V175.299H273.815z"
              opacity="1"
              transform="matrix(.99999 .00537 .40176 .91575 0 0)"
            ></path>
            <path
              id="rect991"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              d="M310.214 84.446H320.905V186.00799999999998H310.214z"
              opacity="1"
            ></path>
            <path
              id="rect991-0"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              d="M344.238 160.943H354.929V262.505H344.238z"
              opacity="1"
            ></path>
            <path
              id="rect991-9"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              d="M517.102 162.988H527.793V264.55H517.102z"
              opacity="1"
            ></path>
            <path
              id="rect991-5"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              d="M483.077 85.433H493.768V186.995H483.077z"
              opacity="1"
            ></path>
          </g>
          <g id="g1031" transform="translate(-2.44 149.853) scale(.53488)">
            <rect
              id="rect979"
              width="170.089"
              height="105.833"
              x="412.75"
              y="-197.304"
              fill="#5697ff"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              opacity="1"
              ry="7.182"
            ></rect>
            <path
              id="rect983"
              fill="#5697ff"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              d="M483.054 -115.322H512.536V-67.619H483.054z"
              opacity="1"
            ></path>
            <path
              id="rect985"
              fill="#5697ff"
              strokeDasharray="42.0539, 10.5135"
              strokeWidth="10.514"
              d="M450.926 -69.735H544.664V-51.592H450.926z"
              opacity="1"
            ></path>
            <rect
              id="rect987"
              width="146.779"
              height="90.714"
              x="424.405"
              y="-189.744"
              fill="#000"
              strokeDasharray="52.9167, 13.2292"
              strokeWidth="13.229"
              opacity="1"
              ry="9.449"
            ></rect>
          </g>
          <path
            id="rect1035"
            fill="#fff"
            strokeDasharray="19.5988, 4.89971"
            strokeWidth="4.9"
            d="M230.21 129.713H281.882V145.749H230.21z"
          ></path>
          <g
            id="g1043"
            strokeDasharray="52.9167, 13.2292"
            strokeWidth="13.229"
            transform="translate(73.262 171.845) scale(.58752)"
          >
            <rect
              id="rect1037"
              width="18.143"
              height="19.655"
              x="381"
              y="-66.146"
              fill="#ff9000"
              opacity="1"
              ry="7.182"
            ></rect>
            <rect
              id="rect1039"
              width="5.613"
              height="8.686"
              x="387.265"
              y="-66.146"
              fill="#fff"
              opacity="1"
              ry="2.806"
            ></rect>
          </g>
        </g>
        <path
          id="rect1045"
          fill="#6b3c00"
          stroke="none"
          strokeDasharray="36.52, 9.13001"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9.13"
          d="M-113.014 77.848H-8.244V182.618H-113.014z"
        ></path>
        <g
          id="cajon1"
          onClick={onClickCajon1}
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
        >
          <path
            id="rect1047"
            fill="#6b3c00"
            stroke="#000"
            strokeWidth="1.408"
            d="M-91.318 91.108H-29.940999999999995V112.908H-91.318z"
          ></path>
          <circle
            id="path1078"
            cx="-39.248"
            cy="104.843"
            r="3.475"
            fill="#f4ff00"
            stroke="none"
            strokeWidth="2.646"
          ></circle>
        </g>
        <g
          id="cajon2"
          onClick={onClickCajon2}
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
        >
          <path
            id="rect1047-4"
            fill="#6b3c00"
            stroke="#000"
            strokeWidth="1.408"
            d="M-91.318 119.333H-29.940999999999995V141.133H-91.318z"
          ></path>
          <circle
            id="path1078-8"
            cx="-38.446"
            cy="133.441"
            r="3.475"
            fill="#f4ff00"
            stroke="none"
            strokeWidth="2.646"
          ></circle>
        </g>
        <g
          id="cajon3"
          onClick={onClickCajon3}
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
        >
          <path
            id="rect1047-6"
            fill="#6b3c00"
            stroke="#000"
            strokeWidth="1.408"
            d="M-91.318 147.559H-29.940999999999995V169.359H-91.318z"
          ></path>
          <circle
            id="path1078-3"
            cx="-38.179"
            cy="162.038"
            r="3.475"
            fill="#f4ff00"
            stroke="none"
            strokeWidth="2.646"
          ></circle>
        </g>
        <g onClick={onClickControl}
          id="control"
          strokeOpacity="1"
          transform="matrix(.5467 0 0 .5467 -134.554 82.177)"
        >
          <path
            id="path1110-1"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.157"
            d="M201.251-21.456l9.427 16.327 16.809-9.705-12.41-55.284H201.62l-8.182 14.173-22.167-7.066-22.757 7.066-8.183-14.173h-13.458l-12.41 55.284 16.81 9.705 9.427-16.327 30.571-4.93z"
          ></path>
          <g
            id="g1152"
            fill="#000"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="2.646"
            transform="matrix(.59344 0 0 .59344 -40.908 16.912)"
          >
            <path
              id="rect1131"
              d="M296.333 -119.83H308.42800000000005V-83.922H296.333z"
              opacity="1"
            ></path>
            <path
              id="rect1131-0"
              d="M-107.924 -320.335H-95.82900000000001V-284.42699999999996H-107.924z"
              opacity="1"
              transform="rotate(90)"
            ></path>
          </g>
          <g
            id="g1210"
            fill="#000"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="2.555"
            transform="matrix(.59344 0 0 .59344 16.94 62.775)"
          >
            <ellipse
              id="path1175"
              cx="317.122"
              cy="-191.161"
              opacity="1"
              rx="6.048"
              ry="5.953"
            ></ellipse>
            <ellipse
              id="path1175-8"
              cx="329.217"
              cy="-179.161"
              opacity="1"
              rx="6.048"
              ry="5.953"
            ></ellipse>
            <ellipse
              id="path1175-0"
              cx="305.027"
              cy="-179.161"
              opacity="1"
              rx="6.048"
              ry="5.953"
            ></ellipse>
            <ellipse
              id="path1175-2"
              cx="317.122"
              cy="-167.16"
              opacity="1"
              rx="6.048"
              ry="5.953"
            ></ellipse>
          </g>
        </g>
        <path
          id="alfombra"
          onClick={onClickAlfombra}
          fill="url(#linearGradient1325)"
          stroke="none"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2.065"
          d="M-80.445 197.382H212.54399999999998V276.855H-80.445z"
          transform="matrix(.99997 -.00805 -.11558 .9933 0 0)"
        ></path>
      </g>
    </svg>
    </div>);

}

export default Front;