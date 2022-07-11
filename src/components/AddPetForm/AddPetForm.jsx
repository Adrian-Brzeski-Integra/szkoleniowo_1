import React from 'react'
import TextField from '@mui/material/TextField'
import petHandler from '../../helpers/PetHandler/PetHandler'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import randomGeneratos from '../../helpers/RandomGenerators/RandomGeneratos'
import RemoveIcon from '@mui/icons-material/Remove'
import PropTypes from 'prop-types'
import './AddPetForm.scss'
import {useFormik} from 'formik'

const AddPetForm = ( {
                         food,
                         setFood,
                         handleClose,
                         addPet,
                         errorStatus,
                         setErrorStatus,
                         tempFood,
                         setTempFood
                     } ) => {
    const formik = useFormik( {
        initialValues: {
            fName: '',
            fAge: 1,
            fSpecies: '',
            fPhoto: '',
            fFood: []
        },
        onSubmit: ( values ) => {
            console.log( values )
            handleSubmit( values )
        }
    } )

    const handleSubmit = ( values ) => {
        addPet( petHandler.createPet( values, food ) )
        // e.target.reset()
        handleClose()
    }

    return (
        <div id="addPetContainer">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    required
                    id="fName"
                    name="fName"
                    label="Imię"
                    variant="outlined"
                    value={formik.values.fName}
                    onChange={formik.handleChange}
                />
                <TextField
                    required
                    id="fAge"
                    name="fAge"
                    label="Wiek"
                    type="number"
                    helperText={errorStatus.age.text}
                    variant="outlined"
                    error={errorStatus.age.error}
                    inputProps={{min: 1}}
                    onChange={formik.handleChange}
                    value={formik.values.fAge}
                />
                <TextField
                    required
                    id="fSpecies"
                    name="fSpecies"
                    label="Gatunek"
                    variant="outlined"
                    value={formik.values.fSpecies}
                    onChange={formik.handleChange}
                />
                <TextField
                    id="fPhoto"
                    name="fPhoto"
                    label="Url zdjęcia"
                    variant="outlined"
                    helperText={errorStatus.photo.text}
                    error={errorStatus.photo.error}
                    value={formik.values.fPhoto}
                    onChange={formik.handleChange}
                />
                <div id="foodInput__container">
                    <TextField
                        id="fFood"
                        name="fFood"
                        label="Jedzenie"
                        variant="outlined"
                        value={formik.values.fFood}
                        onChange={formik.handleChange}
                        onKeyDown={( e ) => {
                            if ( e.key === 'Enter' ) {
                                e.preventDefault()
                                petHandler.addFood( tempFood, setTempFood, food, setFood )
                            }
                        }}
                    />
                    <Button
                        onClick={() => petHandler.addFood( tempFood, setTempFood, food, setFood )}
                        id="fAddFood"
                        variant="contained">
                        <AddIcon/>
                    </Button>
                </div>
                {food.length > 0 && <ul>
                    {food.map( ( item, index ) => {
                        return (
                            <li key={randomGeneratos.uniqueKey()}>
                                {item}
                                <Button variant="contained"
                                        color="error"
                                        onClick={() => petHandler.removeFood( index, food, setFood )}>
                                    <RemoveIcon/>
                                </Button>
                            </li>
                        )
                    } )}</ul>}
                <div className="btn__box">
                    <Button variant="contained" type="submit">DODAJ</Button>
                </div>
            </form>
        </div>
    )
}

AddPetForm.propTypes = {
    food: PropTypes.array.isRequired,
    setFood: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    addPet: PropTypes.func.isRequired,
    errorStatus: PropTypes.object.isRequired,
    setErrorStatus: PropTypes.func.isRequired,
    tempFood: PropTypes.string.isRequired,
    setTempFood: PropTypes.func.isRequired
}

export default AddPetForm
