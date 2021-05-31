//react
import React from 'react';
import Calendario from '../Calendario/Calendario';
//css
import './style.css'


const Circulo = ({titulo, fecha}) => {
    
    return (
        <div id='circle'>
            <h1>{titulo}</h1>  
            <input></input>
            <Calendario fecha={fecha}/>
        </div>
    )
}

export default Circulo
