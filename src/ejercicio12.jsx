import React, { useState, useEffect } from 'react';

const Elemento = () => {
    const [rgbValues, setRgbValues] = useState({ r: 0, g: 0, b: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const generarNumeroAleatorio = (max) => {
        return Math.floor(Math.random() * max);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function cambiarColor () {
        const newRgbValues = {
        r: generarNumeroAleatorio(255),
        g: generarNumeroAleatorio(255),
        b: generarNumeroAleatorio(255)
        };
        setRgbValues(newRgbValues);
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOutOrOver = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        let intervalId;
    
        if (isHovered) {
        intervalId = setInterval(() => {
            cambiarColor();
          }, 300); // Cambia el color cada 1 segundo
        }
    
        return () => {
        clearInterval(intervalId);
        };
    }, [isHovered, cambiarColor]);

    const originalColor = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isHovered
        ? `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`
        : 'rgb(0, 0, 0)',
        height: '255px',
        width: '255px',
        color: 'white',
        cursor: 'pointer'
    };

    return (
        <div
        style={originalColor}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOutOrOver}
        onDoubleClick={handleMouseOutOrOver}
        >
        Ejercicio 12
        </div>
    );
};

const Ejercicio12 = () => {
    return <Elemento />;
};

export default Ejercicio12;