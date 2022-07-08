import React from 'react'
import './HeaderPetList.scss'
import MultipleSelectChip from './items/MultipleSelectChip'
import PropTypes from 'prop-types'
import SortBlock from '../common/SortBlock'

const HeaderPetList = ({petList, setFilter, setSort}) => {
    const sortKeys = [
        {key: 'birthYear', desc: 'WIEK'},
        {key: 'name', desc: 'IMIE'}
    ]
    return (
        <div className="headerPetList__container">
            <SortBlock setSort={setSort} sortKeys={sortKeys}/>
            <div className="filterList__container">
                <h4>Filtry</h4>
                <MultipleSelectChip
                    name="Gatunki"
                    list={[...new Set(petList?.map((pet) => pet?.species))]}
                    setFilter={setFilter}
                />
            </div>
        </div>
    )
}

HeaderPetList.propTypes = {
    petList: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired
}

export default HeaderPetList
