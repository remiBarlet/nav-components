import React from 'react'
import './BurgerSlider.css'

const BurgerSlider = (props) => {

    return(
        <div className={`burger ${ props.isOpen ? 'open' : 'closed' }`} >
            <div className='burger-lines'></div>
        </div>
    )
}

export default BurgerSlider