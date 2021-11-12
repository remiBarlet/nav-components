import React from 'react'
import PropTypes from 'prop-types'
import  './BtnPlusToMinus.css'

const BtnPlusToMinus = (props) => {

    return(
        <div className={`btnplustominus ${props.isOpen  ? 'open' : 'closed'}`} >
            <div className='btnplustominus-lines'></div>
        </div>
    )
} 

BtnPlusToMinus.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default BtnPlusToMinus
