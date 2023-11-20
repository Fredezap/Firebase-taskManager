import React, { useEffect } from 'react';

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Antes de que se renderice')
    }, []);

    return (
        <div>
            <h1>DidMount</h1>         
        </div>
    );
}

export default DidMountHook;