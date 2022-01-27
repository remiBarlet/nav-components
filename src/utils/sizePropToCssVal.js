/*
* Author: Remi Barlet
* email: rbarlet@protonmail.com
*/

//function which receive a value (number or string) as parameter
//return a lenght or percentage value as a string
const sizePropToCssVal = ( valueToStringify ) => {  
    if ( typeof(valueToStringify) === 'number' ) {
        //Positives numbers only are returned as are
        return ( valueToStringify > 0 ? valueToStringify + 'rem' : null )
    } 
    else if ( typeof(valueToStringify) === 'string' ) {
        //regular expression start with a digit
        //could be composed of various digits 
        //could be a decimal
        //the first part of the string must be a number 
        //this number is identified
        let value = valueToStringify.replace(',', '.')
        value = parseFloat(value)
        //looking to the unit 
        let regExp = /(em)$/i
        let regExpPercentage = /(%)/
        let regExpPx = /(px)$/i
        //em or rem unit and positive value
        if (regExp.test(valueToStringify) && value > 0) {
            //identify the type of unit (rem or em) and return the value with unit concated
            return /(rem)/i.test(valueToStringify) ? value + 'rem' : value + 'em'
        //% unit and positive value
        } else if (regExpPercentage.test(valueToStringify) && value > 0) {
            //return the value with % unit
            return value + '%'
        //px unit and positive value
        } else if (regExpPx.test(valueToStringify) && value > 0) {
            //return the value with px unit
        } else {
            return null
        }
    } 
}   

export default sizePropToCssVal