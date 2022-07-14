import TextField from '@mui/material/TextField'
import React from 'react'

const formsHelper = {
    buildField: ( item, index, fData, values, touched, errors, handleChange, handleBlur ) => {
        const {type, label, required, minValue, maxValue} = item
        const name = Object.keys( fData )[index]
        let renderField
        if ( type === 'text' ) {
            renderField = <TextField
                key={label}
                required={required}
                name={name}
                label={label}
                variant="outlined"
                type={type}
                value={values[name]}
                helperText={touched[name] ? errors[name] : ''}
                error={Boolean( errors[name] )}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        } else if ( type === 'number' ) {
            const inProps = {}
            if ( minValue ) {
                inProps.min = minValue
            }
            if ( maxValue ) {
                inProps.max = maxValue
            }
            renderField = <TextField
                key={label}
                required={required}
                name={name}
                label={label}
                variant="outlined"
                type={type}
                value={values[name]}
                helperText={touched[name] ? errors[name] : ''}
                error={Boolean( errors[name] )}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={inProps}
            />
        }
        return renderField
    },
    validations: {
        age: ( val ) => {
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
