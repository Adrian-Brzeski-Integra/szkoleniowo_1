import React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

const TextFieldAF = ( { label, required, name, type, values, touched, errors, handleChange, handleBlur} ) => {
    return (
     <TextField
        key={name}
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
}

TextFieldAF.propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    touched: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}

export default TextFieldAF
