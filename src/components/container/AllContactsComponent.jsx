import React, { useState } from 'react'
import ContactComponent from '../pure/contact'
import { Contact } from '../../models/contact.class'
import PropTypes from 'prop-types'

function AllContactsComponent (state) {

    const defaultContact = new Contact('Juan', 'Perez', 'Juancito89@gmail.com')

    const [conectado, ChangeState] = useState(state)

    return (
        <div>
            <div>
                Your contacts:
            </div>
            <ContactComponent contact={ defaultContact }></ContactComponent>
            <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
            <button onClick={() => ChangeState(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    )
}

AllContactsComponent.propTypes = {
    state: PropTypes.bool,
};

export default AllContactsComponent
