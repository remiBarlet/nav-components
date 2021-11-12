import React from 'react'
import BurgerSlider from './BurgerSlider'
import PropTypes from 'prop-types'
import './MobileBar.css'

const MobileBar = (props) => {

    return(
        <section className="mobileMenuBar"><a href={`${ props.href }`} className="mobileMenuBarTitle">{`${ props.title }`}</a>
            <div className="mobileBarLogo">
              {/*Logo */}
            </div>
            <div className="mobileMenuBarBtn" onClick={() => { props.onClick() }} >
                <BurgerSlider isOpen={ props.isOpen } />
            </div>
        </section>
    )
}

MobileBar.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default MobileBar