import React, { useEffect, useState } from 'react';

const Component_1 = () => {
    const component_data = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [data, setData] = useState(component_data);

    useEffect(() => {
        const timerID = setInterval(() => {
        tick();
        }, 1000);

        const tick = () => {
        setData((prevData) => ({
            ...prevData,
            edad: prevData.edad + 1
        }));
        };

        return () => {
        clearInterval(timerID);
        };
    }, []);

    return (
        <div>
        <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>
        <h3>{data.nombre} {data.apellidos}</h3>
        <h1>Edad: {data.edad}</h1>
        </div>
    );
};

export default Component_1;