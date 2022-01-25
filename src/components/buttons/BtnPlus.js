/*
* author: Remi Barlet
* email: rbarlet@protonmail.com
* a 'plus' button which rotate on click to a cross position (45deg)
* props: duration of the animation, color of the button and open/close situation
*/


import React from 'react'
import PropTypes from 'prop-types'
import './BtnPlus.css'

const BtnPlus = (props) => {

    let wrapperStyle = {}
    props.height && (wrapperStyle['--height'] = `${ props.height }em`)
    let style= {}
    props.duration && (style['--duration']= `${ props.duration }ms`)
    props.btnColor && (style['--btnColor']= `${ props.btnColor }`)

    return(
        <div className='btnPlusWrapper' onClick={ props.onClick } style={ wrapperStyle } id={ props.id }>
            <div className={`btnPlus ${props.isOpen  ? 'open' : 'closed'}`}
                 style={ style } >
                <div className='btnPlus-lines'></div>
            </div>
        </div>
    )
}

BtnPlus.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    fontSize: PropTypes.number,
    isOpen: PropTypes.bool,
    duration: PropTypes.number,
    btnColor: PropTypes.string
}

export default BtnPlus