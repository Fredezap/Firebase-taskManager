import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {
    
    const state = useContext(miContexto)
    
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <h2>
                <Componente2></Componente2>
            </h2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.session}
            </h2>
        </div>
    );
}

const ComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        session: 1,
    }  

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession () {
        setSessionData({
            token: 'JIWQOJD2133',
            session: sessionData.session + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData}>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>Actualizar Session</button>
        </miContexto.Provider>
    );
}

export default ComponenteConContexto;
