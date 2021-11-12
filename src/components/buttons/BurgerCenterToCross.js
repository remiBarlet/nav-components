import React from 'react'
import './BurgerCenterToCross.css'

const BurgerCenterToCross = (props) => {

    return(
        <div className={`burgerCenterToCross ${ props.isOpen ? 'open' : 'closed' }`} >
            <div className='burgerCenterToCross-lines-1'></div>
            <div className='burgerCenterToCross-lines-2'></div>
            <div className='burgerCenterToCross-lines-3'></div>
        </div>
    )
}

export default BurgerCenterToCross