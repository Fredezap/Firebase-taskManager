import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Greetings = (props) => {

    const [age, setage] = useState(31)

    const birthday = () => {
        setage(age + 1)
    }

  return (
    <div>
        <h1>
        Hola {props.name}
        </h1>
        <h2>Tienes {age} años
        </h2>
        <button onClick={birthday}>
            cumplir años
        </button>    
    </div>
  )
}

Greetings.propTypes = {
    name: PropTypes.string
}

export default Greetings
