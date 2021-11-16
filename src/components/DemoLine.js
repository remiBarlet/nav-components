import React, { useState } from 'react'
import './DemoLine.css'

const DemoLine = (props) => {

    //hook to set the btn in mode open/close
    const [ isOpen, setIsOpen ] = useState(false)

    //function to pass the props to the childs 
    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, { isOpen })    
    )

    return(
        <div className='demoLine'>
            <div className='clickZone' onClick={() => setIsOpen(!isOpen)} >
                { childrenWithProps }
            </div>
        </div>
    )
}

export default DemoLine