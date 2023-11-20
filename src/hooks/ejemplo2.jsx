import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador_1, setContador_1] = useState(0);    
    const [contador_2, setContador_2] = useState(0);
    
    const miRef = useRef();

    function incrementarContador1() {
        setContador_1(contador_1 + 1)
    }

    function incrementarContador2(params) {
        setContador_2(contador_2 + 1)
    }

    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(contador_1);
    }, [contador_1])

    return (
        <div>
            <h1>ejemplo useEffect, useRef, useState</h1>
            <h2>CONTADOR 1: {contador_1}</h2>
            <h2>CONTADOR 2: {contador_2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
            <button onClick={incrementarContador1}> Actualizar contador 1 </button>
            <button onClick={incrementarContador2}> Actualizar contador 2 </button>
            </div>
        </div>
    )
}

export default Ejemplo2