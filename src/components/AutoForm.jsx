import React, {useEffect, useState} from 'react'
import {Form, Formik} from 'formik'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import formsHelper from '../helpers/FormsHelper'

const AutoForm = ( {autoFormData} ) => {
    const [fData, setFData] = useState( {} )
    useEffect( () => {
        const tempFormData = {}
        Object.keys( autoFormData ).forEach( ( key ) => {
            tempFormData[key] = ''
        } )
        setFData( tempFormData )
    }, [] )
    return (
        <Formik initialValues={fData}
                validate={( values ) => {
                    const errors = {}
                    if ( !values.name ) {
                        errors.name = 'Required'
                    }
                    if ( values.photo ) {
                        errors.photo = formsHelper.validations.photo( values?.photo )
                    }
                    if ( values.age ) {
                        errors.age = formsHelper.validations.age( values?.age )
                    }
                    return errors
                }}
                onSubmit={values => {
                    console.log( values )
                }}>
            {( {values, touched, errors, handleChange, handleBlur, isValid} ) => (
                <Form autoComplete='off'>
                    {
                        Object.values( autoFormData ).map( ( item, index ) => {
                            const {type, label, required} = item
                            const name = Object.keys( autoFormData )[index]
                            return (
                                <TextField
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
                            )
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
