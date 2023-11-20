import React, { useState } from 'react';
import Ejercicio9Contacts from './ejercicio9-contacts';
import ContactForm from './ejercicio9-contact-form';

const Ejercicio9ListaContactos = () => {

    const contacto_1 = {
        name: 'Fede',
        contactNumber: 299658556,
        email: 'fredez@hotmail.com',
        conected: false
    }

    const contacto_2 = {
        name: 'Hori',
        contactNumber: 3156465,
        email: 'hori@hotmail.com',
        conected: false
    }

    const Initialcontacts = [contacto_1,contacto_2]
    
    const [contacts, setContacts] = useState(Initialcontacts);

    function addContact (contact) {
        const Allcontacts = [...contacts];
        Allcontacts.push(contact);
        setContacts(Allcontacts)
    }

    function deleteContact (contact) {
        const index = contacts.indexOf(contact);
        const Allcontacts = [...contacts];
        Allcontacts.splice(index,1);
        setContacts(Allcontacts)
    }

    function conect (contact) {
        const index = contacts.indexOf(contact);
        const Allcontacts = [...contacts];
        Allcontacts[index].conected = !Allcontacts[index].conected
        setContacts(Allcontacts)
    }

    return (
        <div>
            { contacts.map((contacto, index) => {
                return (
                    <div>
                    <Ejercicio9Contacts
                    contact = { contacto }
                    index = { index }
                    remove = { deleteContact }
                    conect = { conect }>
                    </Ejercicio9Contacts>
                    
                    </div>
                    )
                }
            )   }
            <ContactForm add={ addContact }></ContactForm>
        </div>
    );
}

export default Ejercicio9ListaContactos;
