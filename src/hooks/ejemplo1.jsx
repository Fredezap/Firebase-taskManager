import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    const valorInicial = 0;

    const ValorInicialPersona = {
        name: 'Fede',
        email: 'Frede@gmail.com',
    }
    
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(ValorInicialPersona);
    
    function incrementarContador(){
        setContador(contador + 1)
    }

    function actualizarPersona(nombre){
        setPersona(
            {
                name: 'Hori',
                email: 'Hori@hotmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR {contador}</h2>
            <h2>Datos persona</h2>
            <h3> NOMBRE: {persona.name} </h3>
            <h3> EMAIL: {persona.email}</h3>
            <div>
            <button onClick={actualizarPersona}> Actualizar Persona </button>
            <button onClick={incrementarContador}> Actualizar contador </button>
            </div>
        </div>
    );
}

export default Ejemplo1;
