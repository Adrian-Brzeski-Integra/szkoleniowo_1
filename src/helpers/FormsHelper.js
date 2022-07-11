const formsHelper = {
    validations: {
        age: ( val ) => {
            console.log( val )
            let errorMsg
            if ( !/^[0-9]+$/.test( val ) ) {
                errorMsg = 'Zły wiek!'
            }
            return errorMsg
        },
        photo: ( photoUrl ) => {
            let errorMsg
            if ( photoUrl.length === 0 ) {
                errorMsg = undefined
            } else if ( !formsHelper.validations.common.url( photoUrl ) ) {
                errorMsg = 'Złe źródło!'
            } else if ( !formsHelper.validations.common.findExtensions( photoUrl, ['.jpg', '.jpeg', '.png', '.svg'] ) ) {
                errorMsg = 'Zły format pliku!'
            }
            return errorMsg
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
                    if ( iString.search( extension ) !== -1 ) extensionFound = true
                    return true
                } )
                return extensionFound
            }
        }

    }
}

export default formsHelper
