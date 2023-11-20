import React from 'react';
import { useEffect } from 'react';

const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Se ejecuto el WillUnmount')
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

export default WillUnmountHook;

