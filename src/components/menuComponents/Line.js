import React, { useState } from 'react'
import './Line.css'
import PropTypes from 'prop-types'

const Line = (props) => {

    //object to override standard color and background-color of the line, standard and hover
    let style = {}
    props.color && (style['--color'] = `${ props.color }`)
    props.bkColor && (style['--bkColor']= `${ props.bkColor }`)
    props.hoverColor && (style['--hoverColor'] = `${ props.hoverColor}`)
    props.hoverBkColor && (style['--hoverBkColor'] = `${ props.hoverBkColor}`)
    props.fontSize && (style['--fontSize'] = `${ props.fontSize}em`)
    props.paddingLeft && (style['--paddingLeft']= `${ props.paddingLeft }em`)
    props.height && (style['--height']= `${ props.height }em`)

    //hook to set the childrens visibles
    const [ isOpen, setIsOpen ] = useState(false)
    const onClick = () => setIsOpen(!isOpen)

    //function to pass the props to the non-Line childs 
    const childrenWithPropsNoLines = React.Children.map(props.children, child =>
        child.type !== Line && React.cloneElement(child, { onClick, isOpen })    
    )
    //function to pass the props to the Line childs 
    const childrenWithPropsLines = React.Children.map(props.children, child =>
        child.type === Line && React.cloneElement(child)    
    )

    return(
        <li id={ props.id }> 
            <div className='line'  style={ style } >
                <div className='title'><a href={ props.href }>{ props.title }</a></div>
                { childrenWithPropsNoLines }
            </div>
        { (isOpen || props.allwaysOpen) && (
            <ul>
                { childrenWithPropsLines }
            </ul>
        ) }
        </li>
    )


}

Line.propTypes = {
    id: PropTypes.string, 
    allwaysOpen: PropTypes.bool, 
    title: PropTypes.string,
    href: PropTypes.string,
    color: PropTypes.string,
    bkColor: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverBkColor: PropTypes.string
}

export default Line

