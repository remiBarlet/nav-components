import React from 'react'
import Burger from './Burger'
import PropTypes from 'prop-types'

const MobileBar = (props) => {

    return(
        <section id="mobileMenuBar"><a href={`${ props.href }`} id="mobileMenuBarTitle">{`${ props.title }`}</a>
            <div id="mobileBarLogo">
                //Logo component 
            </div>
            <div id="mobileMenuBarBtn" onClick={() => { props.onClick() }} >
                <Burger isOpen={ props.isOpen } />
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