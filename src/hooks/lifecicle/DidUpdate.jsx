import React from 'react';
import { useEffect } from 'react';

const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Cuando recive nuevos props o cambia su estado')
    });

    return (
        <div>
            <h1>DidUpdate</h1> 
        </div>
    );
}

export default DidUpdateHook;
