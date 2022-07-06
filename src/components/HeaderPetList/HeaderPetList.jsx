import React from 'react'
import Button from '@mui/material/Button'
import './HeaderPetList.scss'
import MultipleSelectChip from './items/MultipleSelectChip'
import PropTypes from 'prop-types'

const HeaderPetList = ({petList, setFilter, setSort, sort}) => {
    const handleBtn = (e) => {
        const clickedBtn = e.target.id
        if (clickedBtn === 'ageBtn') {
            if (sort === 'age_up') setSort('age_down')
            else setSort('age_up')
        } else {
            if (clickedBtn === 'nameBtn') {
                if (sort === 'name_up') setSort('name_down')
                else setSort('name_up')
            }
        }
    }
    return (
        <div className="headerPetList__container">
            <div className="sortList__container">
                <h4>Sortowanie</h4>
                <div className="btn__box">
                    <Button id="ageBtn" onClick={(e) => handleBtn(e)} variant="contained">WIEK</Button>
                    <Button id="nameBtn" onClick={(e) => handleBtn(e)} variant="contained">IMIE</Button>
                </div>
            </div>
            <div className="filterList__container">
                <h4>Filtry</h4>
                <MultipleSelectChip
                    name={'Gatunki'}
                    list={[...new Set(petList.map((pet) => pet.species))]}
                    setFilter={setFilter}
                />
            </div>
        </div>
    )
}

HeaderPetList.propTypes = {
    petList: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired
}

export default HeaderPetList
