import React, {useEffect, useState} from 'react'
import {Form, Formik} from 'formik'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import FormsHelper from '../helpers/FormsHelper'

const AutoForm = ( {autoFormData} ) => {
    const [fData, setFData] = useState( {} )
    const [fDataValidate, setFDataValidate] = useState( {} )

    useEffect( () => {
        const tempFormData = {}
        Object.keys( autoFormData ).forEach( ( key ) => {
            tempFormData[key] = ''
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
        </Formik>
    )
}

AutoForm.propTypes = {
    autoFormData: PropTypes.object.isRequired
}

export default AutoForm
