import React from 'react'
import PropTypes from 'prop-types'
import './BtnPlusSpinner.css'

const BtnPlusSpinner = (props) => {

    return(
        <div className={`btnplusspinner ${props.isOpen  ? 'open' : 'closed'}`} >
            <div className='btnplusspinner-lines'></div>
        </div>
    )
}

BtnPlusSpinner.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default BtnPlusSpinner