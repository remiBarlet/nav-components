import React from 'react'
import PropTypes from 'prop-types'
import './BtnPlus.css'

const BtnPlus = (props) => {

    return(
        <div className={`btnplus ${props.isOpen  ? 'open' : 'closed'}`} >
            <div className='btnplus-lines'></div>
        </div>
    )
}

BtnPlus.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default BtnPlus