//function which receive a top breakpoint value as parameter
//return true if the device width is below this limit
//return false otherwise
const IsASmallDevice = ( maxSize ) => {
    return (window.innerWidth < maxSize ? true : false)
}

export default IsASmallDevice