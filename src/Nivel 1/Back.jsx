
import { useState } from 'react';
import './back.css';

function Back ({inputText, outputText, writing, room}){

    const [backBed, setBackBed] = useState(false);

    function onClickPortal(){

      if(writing.current) return false;

      inputText({text: '— Saya: Parece ser un portal a otra dimensión. Sale un rico olor a perfume de allí.'});
      outputText();

    }

    function onClickPoster(){

      if(writing.current) return false;

      inputText({text: '— Saya: Creo a ver visto ese póster antes. Es de una religión Creo que hacian rituales eróticos con elfas.'});
      outputText();

    }

    function onClickCamaFrontal(){

      if(writing.current) return false;

      inputText({text: '— Saya: Que pésimo diseño de cama.'});
      outputText();
      
    }
    
    function onClickCamaDetras(){
      
      if(writing.current) return false;

      if(backBed){

        inputText({text: '— Saya: Hay un papel que dice: Rapido ve y lanzate sobre el charco de agua'});
        outputText();

      }else{

        inputText({text: '— Saya: Realmente es una cama muy mal hecha.'});
        outputText();

      }
      
    }

    function onClickBaul(){

      setShowBaul(true);

    }

    const [showBaul, setShowBaul] = useState(false);
    const [block, setBlock] = useState(false);

    function passOnChanges(event){

      const value = event.target.value;

      if(value === 'ILoveYordleGirls'){

        setBlock(true);

        setBackBed(true);

      }

    }

    if(room !== 2) return false;

    return (<div className="Back">
      <div className="modal" style={{display: showBaul ?'flex':'none'}}>

        {block?<>
        
            <h2>Hola, llegas tarde. Por favor, Revisa bien detras de la cama >:(</h2>
            <div className="button" onClick={()=>setShowBaul(false)}>Salir</div>

        </>:<>
          <h2>Contraseña del baul</h2>

          <input type="text" onChange={passOnChanges}/>

          <div className="button" onClick={()=>setShowBaul(false)}>Salir</div></>}

      </div>
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
            id="linearGradient1743"
            x1="-40.625"
            x2="305.756"
            y1="532.401"
            y2="1225.164"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1731"
          ></linearGradient>
          <linearGradient id="linearGradient1731">
            <stop
              id="stop1727"
              offset="0"
              stopColor="red"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop1735"
              offset="0.516"
              stopColor="#bc15b1"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop1733"
              offset="0.722"
              stopColor="#228300"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop1729"
              offset="1"
              stopColor="#0f00ff"
              stopOpacity="1"
            ></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient1921"
            x1="206.332"
            x2="300.411"
            y1="64.145"
            y2="64.145"
            gradientTransform="translate(-165.554 12.095)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1919"
          ></linearGradient>
          <linearGradient id="linearGradient1919">
            <stop
              id="stop1915"
              offset="0"
              stopColor="#ff00e5"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop1917"
              offset="1"
              stopColor="#00dfff"
              stopOpacity="1"
            ></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient1960"
            x1="221.157"
            x2="285.418"
            y1="73.928"
            y2="73.928"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1966"
          ></linearGradient>
          <linearGradient id="linearGradient1966">
            <stop
              id="stop1962"
              offset="0"
              stopColor="#ffe400"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop1964"
              offset="1"
              stopColor="#ff5400"
              stopOpacity="1"
            ></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient1982"
            x1="233.929"
            x2="272.696"
            y1="41.126"
            y2="41.126"
            gradientTransform="translate(-165.554 12.095)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1966"
          ></linearGradient>
          <linearGradient
            id="linearGradient2029"
            x1="44.051"
            x2="101.15"
            y1="365.09"
            y2="365.09"
            gradientTransform="matrix(.73555 0 0 .73555 -106.417 -11.962)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient2035"
          ></linearGradient>
          <linearGradient id="linearGradient2035">
            <stop
              id="stop2031"
              offset="0"
              stopColor="#ff00a8"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop2033"
              offset="1"
              stopColor="#9a0080"
              stopOpacity="1"
            ></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient2029-3"
            x1="44.051"
            x2="101.15"
            y1="365.09"
            y2="365.09"
            gradientTransform="matrix(1.09362 0 0 1.09362 -132.413 -142.69)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient2035"
          ></linearGradient>
          <linearGradient
            id="linearGradient1137"
            x1="221.157"
            x2="285.418"
            y1="73.928"
            y2="73.928"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1966"
          ></linearGradient>
          <linearGradient
            id="linearGradient1139"
            x1="221.157"
            x2="285.418"
            y1="73.928"
            y2="73.928"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1966"
          ></linearGradient>
        </defs>
        <g id="layer1" transform="translate(165.554 -12.095)">
          <path
            id="rect835-8-6"
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
            id="rect977-3-1"
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
            id="camaDetras"
            onClick={onClickCamaDetras}
            fill="#875700"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
          >
            <rect
              id="rect1747-9"
              width="20.804"
              height="69.509"
              x="-115.558"
              y="46.565"
              strokeWidth="4.608"
              rx="0"
              ry="0"
            ></rect>
            <path
              id="rect1747-3-0"
              strokeWidth="4.608"
              d="M-27.883 46.565H-7.079000000000001V116.074H-27.883z"
            ></path>
            <path
              id="rect1745-2"
              strokeWidth="1.754"
              d="M-115.558 102.747H-7.079000000000008V157.3H-115.558z"
            ></path>
            <rect
              id="rect1747-9-7"
              width="21.669"
              height="108.479"
              x="64.974"
              y="7.079"
              strokeWidth="5.875"
              rx="0"
              ry="0"
              transform="rotate(90)"
            ></rect>
          </g>
          <g id="camaFrontal" fillOpacity="1" stroke="none" strokeOpacity="1" onClick={onClickCamaFrontal}>
            <path
              id="rect1715-0"
              fill="#fff"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="0.56"
              d="M-60.921 134.695H22.467000000000006V263.522H-60.921z"
              transform="skewX(-17.382) scale(1 .95433)"
            ></path>
            <path
              id="path1838"
              fill="#fff"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="0.252"
              d="M-22.297 122.96l4.524 8.19-11.331 2.978-2.93-11.168z"
            ></path>
            <g
              id="g1739"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeWidth="2.646"
              transform="matrix(.24074 0 -.05556 .17747 -66.327 25.053)"
            >
              <path
                id="rect1715"
                fill="url(#linearGradient1743)"
                d="M-40.625 532.401H305.756V1225.164H-40.625z"
                opacity="1"
              ></path>
              <rect
                id="rect1717"
                width="295.066"
                height="182.361"
                x="-12.829"
                y="569.51"
                fill="#fff"
                opacity="1"
                ry="55.592"
              ></rect>
            </g>
            <g
              id="g1775"
              fill="#875700"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              transform="translate(-175.71 31.873)"
            >
              <path
                id="rect1745"
                strokeWidth="1.839"
                d="M21.665 194.225H130.144V243.26299999999998H21.665z"
              ></path>
              <path
                id="rect1747"
                strokeWidth="3.678"
                d="M21.665 174.153H42.468999999999994V197.929H21.665z"
              ></path>
              <path
                id="rect1747-3"
                strokeWidth="3.678"
                d="M109.34 174.153H130.144V197.929H109.34z"
              ></path>
            </g>
          </g>
          <g
            id="baul"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            transform="matrix(.6 0 0 .6 83.114 63.518)"
            onClick={onClickBaul}
          >
            <rect
              id="rect1878"
              width="144.326"
              height="56.651"
              x="218.092"
              y="18.714"
              fill="#875700"
              strokeWidth="3.338"
              opacity="1"
              ry="9.827"
            ></rect>
            <g id="g1876" transform="matrix(1 0 0 .74287 2.646 16.261)">
              <path
                id="rect1840"
                fill="#000"
                strokeWidth="1.132"
                d="M234.128 51.316H336.759V74.836H234.128z"
                opacity="1"
              ></path>
              <path
                id="rect1842"
                fill="#13ff00"
                strokeWidth="2.295"
                d="M248.026 56.246H260.082V68.302H248.026z"
                opacity="1"
              ></path>
              <path
                id="rect1842-3"
                fill="#13ff00"
                strokeWidth="2.295"
                d="M269.665 56.246H281.721V68.302H269.665z"
                opacity="1"
              ></path>
              <path
                id="rect1842-6"
                fill="#13ff00"
                strokeWidth="2.295"
                d="M291.304 56.246H303.35999999999996V68.302H291.304z"
                opacity="1"
              ></path>
              <path
                id="rect1842-36"
                fill="#13ff00"
                strokeWidth="2.295"
                d="M312.944 56.246H325V68.302H312.944z"
                opacity="1"
              ></path>
            </g>
          </g>
          <g
            id="poster"
            onClick={onClickPoster}
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
          >
            <rect
              id="rect1889"
              width="94.079"
              height="94.079"
              x="40.779"
              y="29.2"
              fill="url(#linearGradient1921)"
              fillOpacity="1"
              stroke="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.197"
              opacity="1"
              ry="0"
            ></rect>
            <g
              id="g1952"
              fill="none"
              stroke="url(#linearGradient1960)"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="10.126"
              transform="translate(-165.554 12.095)"
            >
              <path
                id="path1891"
                stroke="url(#linearGradient1137)"
                d="M225.03 73.04l6.546-7.774 8.797-5.523 12.889-4.297v20.459l-6.751 8.797-2.66 7.774-1.227 5.933"
              ></path>
              <path
                id="path1891-1"
                stroke="url(#linearGradient1139)"
                d="M281.545 73.04l-6.547-7.774-8.797-5.523-12.888-4.297v20.459l6.75 8.797 2.66 7.774 1.228 5.933"
              ></path>
            </g>
            <circle
              id="path1908"
              cx="87.759"
              cy="53.221"
              r="14.321"
              fill="url(#linearGradient1982)"
              fillOpacity="1"
              stroke="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="10.126"
            ></circle>
          </g>
          <g
            id="portal"
            onClick={onClickPortal}
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            transform="rotate(-45)"
          >
            <path
              id="rect2006"
              fill="url(#linearGradient2029)"
              strokeWidth="20.704"
              d="M-74.016 235.579H-32.017V277.57800000000003H-74.016z"
              opacity="1"
            ></path>
            <path
              id="rect2006-3"
              fill="url(#linearGradient2029-3)"
              strokeWidth="30.782"
              d="M-84.238 225.357H-21.793999999999997V287.801H-84.238z"
              opacity="0.561"
            ></path>
          </g>
        </g>
      </svg>
    );

    </div>);

}

export default Back;