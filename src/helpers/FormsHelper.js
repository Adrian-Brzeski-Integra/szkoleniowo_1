const formsHelper = {
    validations: {
        age: ( e ) => {
            console.log( e.target.value )
            let errorMsg = ''
            let errorState = false
            if ( !/^[0-9]+$/.test( e.target.value ) ) {
                errorMsg = 'Zły wiek!'
                errorState = true
            }
            return {text: errorMsg, error: errorState}
        },
        photo: ( e ) => {
            let errorMsg = ''
            let errorState = false
            if ( e.target.value.length === 0 ) {
                errorMsg = ''
                errorState = false
            } else if ( !formsHelper.validations.common.url( e.target.value ) ) {
                errorMsg = 'Złe źródło!'
                errorState = true
            } else if ( !formsHelper.validations.common.findExtensions( e.target.value, ['.jpg', '.jpeg', '.png', '.svg'] ) ) {
                errorMsg = 'Zły format pliku!'
                errorState = true
            }
            return {text: errorMsg, error: errorState}
        },
        common: {
            url: ( urlString ) => {
                let url
                try {
                    url = new URL( urlString )
                } catch ( _ ) {
                    return false
                }
                return url.protocol === 'http:' || url.protocol === 'https:'
            },
            findExtensions: ( iString, extensions ) => {
                let extensionFound = false
                extensions.every( ( extension ) => {
                    if ( iString.search( extension ) !== -1 ) {
                        extensionFound = true
                        return false
                    } else return true
                } )
                return extensionFound
            }
        }

    }
}

export default formsHelper
