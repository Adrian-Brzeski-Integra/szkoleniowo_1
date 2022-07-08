import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import './ModalAddPet.scss'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import randomGeneratos from '../../helpers/RandomGenerators/RandomGeneratos'
import petHandler from '../../helpers/PetHandler/PetHandler'
import formsHelper from '../../helpers/FormsHelper'

const ModalAddPet = ( {open, setOpen, addPet} ) => {
    const [tempFood, setTempFood] = useState( '' )
    const [food, setFood] = useState( [] )
    const [age, setAge] = useState( {text: '', status: false, value: ''} )

    const stateReset = () => {
        setTempFood( '' )
        setFood( [] )
        setAge( {text: '', status: false, value: ''} )
    }

    const handleClose = () => {
        stateReset()
        setOpen( false )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        addPet( petHandler.createPet( e, food ) )
        e.target.reset()
        handleClose()
    }

    // const ageValidation = ( e ) => {
    //     if ( !Number.isInteger( Number( e.target.value ) ) ) {
    //         setAge( {text: 'Wiek musi być liczbą całkowitą', status: true} )
    //     } else setAge( {text: '', status: false} )
    // }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-Add new pet"
            aria-describedby="modal-form to add pet"
        >
            <Box id="addPetContainer">
                <form onSubmit={( e ) => {
                    handleSubmit( e )
                }}>
                    <TextField
                        required
                        id="fName"
                        name="fName"
                        label="Imię"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="fAge"
                        name="fAge"
                        label="Wiek"
                        helperText={age.text}
                        variant="outlined"
                        error={age.status}
                        value={age.value}
                        onChange={( e ) => {
                            const newAge = {...age, value: formsHelper.validations.age( e )}
                            setAge( newAge )
                        }}
                    />
                    <TextField
                        required
                        id="fSpecies"
                        name="fSpecies"
                        label="Gatunek"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="fPhoto"
                        name="fPhoto"
                        label="Url zdjęcia"
                        variant="outlined"
                    />
                    <div id="foodInput__container">
                        <TextField
                            id="fFood"
                            name="fFood"
                            label="Jedzenie"
                            variant="outlined"
                            value={tempFood}
                            onChange={( e ) => setTempFood( e.target.value )}
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
            </Box>
        </Modal>
    )
}

ModalAddPet.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    addPet: PropTypes.func.isRequired
}

export default ModalAddPet
