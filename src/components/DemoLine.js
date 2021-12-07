/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* Demoline to present various components
*/

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './DemoLine.css'

const DemoLine = (props) => {

    //hook to set the btn in mode open/close
    const [ isOpen, setIsOpen ] = useState(false)
    const onClick = () => setIsOpen(!isOpen)

    //function to pass the props to the childs 
    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, { onClick, isOpen })    
    )

    //object to override standard color and background-color of the line
    let style = {}
    props.color && (style['--color'] = `${ props.color }`)
    props.bkColor && (style['--bkColor']= `${ props.bkColor }`)

    return(
        <div className='demoLine' style={ style }>
            <div className='title'><a>{ props.title }</a></div>
            { childrenWithProps }
        </div>
    )
}

DemoLine.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    color: PropTypes.string,
    bkColor: PropTypes.string,
    title: PropTypes.string
}

export default DemoLine