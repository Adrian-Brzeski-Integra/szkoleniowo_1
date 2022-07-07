import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import './ModalAddPet.scss'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import uniqueKey from '../../helpers/uniqueKey'

const ModalAddPet = ({open, setOpen, addPet}) => {
    const [tempFood, setTempFood] = useState('')
    const [food, setFood] = useState([])
    const [age, setAge] = useState({text: 'Wiek', status: false})
    const handleClose = () => {
        stateReset()
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addPet(createPet(e))
        e.target.reset()
        handleClose()
    }

    const stateReset = () => {
        setTempFood('')
        setFood([])
        setAge({text: 'Wiek', status: false})
    }

    const createPet = (e) => {
        const currentYear = new Date().getFullYear()
        const newPet = {}
        newPet.birthYear = currentYear - e.target.fAge.value
        newPet.name = e.target.fName.value
        newPet.species = e.target.fSpecies.value
        newPet.photo = e.target.fPhoto.value
        if (food.length > 0) newPet.favFoods = food
        return newPet
    }

    const handleAddFood = () => {
        if (tempFood.length > 0) {
            const cloneFood = [...food]
            cloneFood.push(tempFood)
            setFood(cloneFood)
            setTempFood('')
        }
    }

    const ageValidation = (e) => {
        if (!Number.isInteger(Number(e.target.value))) {
            setAge({text: 'Wiek musi być liczbą całkowitą', status: true})
        } else setAge({text: 'Wiek', status: false})
    }

    const removeFood = (index) => {
        const cloneFood = [...food]
        cloneFood.splice(index, 1)
        setFood(cloneFood)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-Add new pet"
            aria-describedby="modal-form to add pet"
        >
            <Box id="addPetContainer">
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }}>
                    <TextField required id="fName" name="fName" label="Imię" variant="outlined"/>
                    <TextField required type="number" id="fAge" name="fAge" label={age.text} variant="outlined"
                               error={age.status}
                               onChange={(e) => ageValidation(e)}/>
                    <TextField required id="fSpecies" name="fSpecies" label="Gatunek" variant="outlined"/>
                    <TextField required id="fPhoto" name="fPhoto" label="Url zdjęcia" variant="outlined"/>
                    <div id="foodInput__container">
                        <TextField id="fFood" name="fFood" label="Jedzenie" variant="outlined" value={tempFood}
                                   onChange={(e) => setTempFood(e.target.value)
                                   }
                        />
                        <Button onClick={() => handleAddFood()
                        } id="fAddFood" variant="contained"><AddIcon/></Button>
                    </div>
                    {food.length > 0 && <ul>{food.map((item, index) => {
                        return <li key={uniqueKey()}>{item}<Button variant="contained" color="error"
                                                            onClick={() => removeFood(index)
                                                            }><RemoveIcon/></Button>
                        </li>
                    })}</ul>}
                    <div className='btn__box'>
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
