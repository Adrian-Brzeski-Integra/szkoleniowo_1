import React, {useEffect, useState} from 'react'
import {Form, Formik} from 'formik'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import FormsHelper from '../helpers/FormsHelper'

const AutoForm = ( {autoFormData} ) => {
    const [fData, setFData] = useState( {} )
    const [fDataValidate, setFDataValidate] = useState( {} )
    const [formNotEmpty, setformNotEmpty] = useState( 0 )

    useEffect( () => {
        const tempFormData = {}
        const tempType = []
        Object.values( autoFormData ).forEach( ( item ) => tempType.push( item.type ) )
        Object.keys( autoFormData ).forEach( ( key, index ) => {
            if ( tempType[index] === 'text' ) tempFormData[key] = ''
            else if ( tempType[index] === 'number' ) {
                if ( Object.values( autoFormData )[index].minValue ) {
                    tempFormData[key] = Object.values( autoFormData )[index].minValue
                } else tempFormData[key] = 0
            } else if ( tempType[index] === 'text_array' ) tempFormData[key] = ['']
        } )
        setFData( tempFormData )
        const tempFormDataValidate = {}
        Object.values( autoFormData ).forEach( ( item, index ) => {
            if ( item?.validateMethod ) {
                tempFormDataValidate[Object.keys( autoFormData )[index]] = item.validateMethod
            }
        } )
        setFDataValidate( tempFormDataValidate )
    }, [] )

    useEffect( () => {
        setformNotEmpty( Object.keys( fData ).length )
    }, [fData] )
    if ( formNotEmpty > 0 ) {
        return (
            <Formik initialValues={fData}
                    validate={( values ) => {
                        const errors = {}
                        Object.values( fDataValidate ).forEach( ( item, index ) => {
                            const keyName = Object.keys( fDataValidate )[index]
                            if ( values[keyName] ) errors[keyName] = item( values[keyName] )
                        } )
                        return errors
                    }}
                    onSubmit={values => {
                        console.log( values )
                    }}>
                {( {values, touched, errors, handleChange, handleBlur, isValid} ) => (
                    <Form>
                        {
                            Object.values( autoFormData ).map( ( item, index ) => {
                                return FormsHelper.buildField( item, index, autoFormData, values, touched, errors, handleChange, handleBlur )
                            } )
                        }
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            submit
                        </Button>
                    </Form>
                )}
            </Formik> )
    }
}

AutoForm.propTypes = {
    autoFormData: PropTypes.object.isRequired
}

export default AutoForm
