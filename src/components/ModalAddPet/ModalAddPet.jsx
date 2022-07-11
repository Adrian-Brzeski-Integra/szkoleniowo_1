import React from 'react'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import './ModalAddPet.scss'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import AutoForm from '../AutoForm'

const ModalAddPet = ( {open, setOpen, addPet} ) => {
    // const [tempFood, setTempFood] = useState( '' )
    // const [food, setFood] = useState( [] )
    // const [errorStatus, setErrorStatus] = useState( {
    //     age: {
    //         text: '',
    //         error: false
    //     },
    //     photo: {
    //         text: '',
    //         error: false
    //     }
    // } )

    // const stateReset = () => {
    //     setTempFood( '' )
    //     setFood( [] )
    //     setErrorStatus( {
    //         age: {
    //             text: '',
    //             error: false
    //         },
    //         photo: {
    //             text: '',
    //             error: false
    //         }
    //     } )
    // }

    const handleClose = () => {
        // stateReset()
        setOpen( false )
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-Add new pet"
            aria-describedby="modal-form to add pet"
        >
            <div id="addPetModal">
                <Button
                    onClick={() => handleClose()}
                    className="btn--close"
                    variant="contained"
                    color="error">
                    <CloseIcon/>
                </Button>
                {/* <AddPetForm food={food} */}
                {/*            setFood={setFood} */}
                {/*            handleClose={handleClose} */}
                {/*            addPet={addPet} */}
                {/*            errorStatus={errorStatus} */}
                {/*            setErrorStatus={setErrorStatus} */}
                {/*            tempFood={tempFood} */}
                {/*            setTempFood={setTempFood} */}
                {/* /> */}
                <AutoForm
                    autoFormData={
                        {
                            name: {
                                type: 'text',
                                label: 'Imię',
                                required: true
                            },
                            age: {
                                type: 'number',
                                label: 'Wiek',
                                required: true
                            },
                            species: {
                                type: 'text',
                                label: 'Gatunek',
                                required: true
                            },
                            photo: {
                                type: 'text',
                                label: 'Url zdjęcia',
                                required: false
                            }
                        }
                    }
                />
            </div>
        </Modal>
    )
}

ModalAddPet.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    addPet: PropTypes.func.isRequired
}

export default ModalAddPet
