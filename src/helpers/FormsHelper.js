export default {
    validations: {
        age: ( e ) => {
            let onlyNums = e.target.value.replace( /[^\d]/g, '' )
            if ( onlyNums === 0 ) onlyNums = 1
            return Math.floor( onlyNums )
        }
    }
}
