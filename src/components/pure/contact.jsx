import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";
import AllContactsComponent from '../container/AllContactsComponent'

function ContactComponent ({ contact }) {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.surname }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <AllContactsComponent state = {true}/>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;

