import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Ejercicio9Contacts = ( {contact, index, remove, conect} ) => {
    
    const [showDetail, setShowDetail] = useState(false);
    
    function conectContact (contact) {
        switch (contact.conected) {
            case true:
                return(<i onClick={ () => conect(contact)} className='bi-toggle-on task-action' style={ { color:'green', fontWeigh:'bold'} }></i>);
            case false:
                return(<i onClick={ () => conect(contact)} className='bi-toggle-off task-action' style={ { color:'gray', fontWeigh:'bold'} }></i>);
            default:
                break;
            }
        }

    function ShowConection (contact) {
        return contact.conected ? 'Conectado' : 'Desconectado';
    }

    function showContact () {
        return showDetail ? <button onClick={ () =>  setShowDetail(!showDetail)}>Ocultar contacto</button>
        : <button onClick={ () => setShowDetail(!showDetail)}>Mostrar contacto</button>;
    }

    return (
        <div style={{ border: '1px solid black' }}>
            <ul style={{listStyleType: 'none'}}>
                <li>
                    Contacto Numero {index + 1}
                </li>
                <li>{ showContact() }</li>
                {showDetail && (
                <><li>
                        Nombre: {contact.name}
                    </li><li>
                            Telefono: {contact.contactNumber}
                        </li><li>
                            Email: {contact.email}
                        </li><li>
                            Estado: {ShowConection(contact)}
                        </li><li>
                            Acciones:
                            {conectContact(contact)}
                            <i onClick={() => remove(contact)} className='bi-trash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i>
                        </li></>
                )}
            </ul>
        </div>
    );
}

export default Ejercicio9Contacts;
