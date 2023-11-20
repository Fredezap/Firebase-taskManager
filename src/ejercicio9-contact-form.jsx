import { useRef } from "react"
import PropTypes from 'prop-types';

const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const contactNumberRef = useRef();
    const emailRef = useRef('');

    function addContact (e) {
        e.preventDefault();
        const newContact = {
            name: nameRef.current.value,
            contactNumber: contactNumberRef.current.value,
            email: emailRef.current.value,
            conectado: false
        }
        add(newContact);
    }

    return(
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mt-10'>
            <div>
                <input ref={nameRef} placeholder="name"/>
                <input ref={contactNumberRef} placeholder="Number" />
                <input ref={emailRef} placeholder="email"/>
            </div>
            <button type="submit">Agregar</button>
        </form>
    )
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;