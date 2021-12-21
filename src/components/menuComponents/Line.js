import React, { useState } from 'react'
import './Line.css'
import PropTypes from 'prop-types'

const Line = (props) => {

    return(
        <li className='line' id={ props.id }>
                <div className='title'><a href={ props.href }>{ props.title }</a></div>
        </li>
    )


}

Line.propTypes = {
    id: PropTypes.string, 
    title: PropTypes.string,
    href: PropTypes.string
}

export default Line

