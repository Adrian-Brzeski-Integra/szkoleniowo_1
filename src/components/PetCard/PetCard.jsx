import React from 'react'
import PropTypes from 'prop-types'
import './PetCard.scss'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'

const PetCard = ({petInfo, killPet}) => {
    return (
        <div className="petInfo__container">
            <img src={petInfo.photo} alt="Pet photo"/>
            <div className="petData__box">
                <span>Imię: {petInfo.name}</span>
                <span>Wiek: {new Date().getFullYear() - petInfo.birthYear} lat</span>
                <span>Gatunek: {petInfo.species}</span>
                {petInfo.favFoods && <div>
                    <span>Ulubione jedzenie:</span>
                    <ul>
                        {petInfo.favFoods.map((food) => {
                            return <li key={food}>{food}</li>
                        })}
                    </ul>
                </div>
                }
            </div>
            <Button
                onClick={() => killPet(petInfo)}
                className="btn--del"
                variant="contained"
                color="error">
                <CloseIcon/>
            </Button>
        </div>
    )
}

PetCard.propTypes = {
    petInfo: PropTypes.object.isRequired,
    killPet: PropTypes.func.isRequired
}

export default PetCard
