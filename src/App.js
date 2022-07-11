import React, {useEffect, useState} from 'react'
import Container from '@mui/material/Container'
import './App.scss'
import HeaderPetList from './components/HeaderPetList/HeaderPetList'
import PetCard from './components/PetCard/PetCard'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import ModalAddPet from './components/ModalAddPet/ModalAddPet'
import listHelper from './helpers/ListHelper/ListHelper'
import randomGeneratos from './helpers/RandomGenerators/RandomGeneratos'

const App = () => {
    const [pets, setPets] = useState( {pets: []} )
    const [sortMethod, setSortMethod] = useState( 'age_up' )
    const [filterItems, setFilterItems] = useState( [] )
    const [open, setOpen] = React.useState( false )

    const handleOpen = () => setOpen( true )

    const killPet = ( pet ) => {
        const petClone = [...pets.pets]
        petClone.splice( pets.pets.indexOf( pet ), 1 )
        setPets( {pets: petClone} )
    }

    const addPet = ( pet ) => {
        const petClone = [...pets.pets]
        petClone.push( pet )
        setPets( {pets: petClone} )
    }

    useEffect( () => {
        fetch( 'https://raw.githubusercontent.com/Nemethe/zadanie-rekrutacyjne-react/master/json-example/pets-data.json' )
            .then( ( resp ) => resp.json() )
            .then( setPets.bind( this ) )
            .catch( ( error ) => {
                console.log( 'There was an error!', error )
            } )
    }, [] )

    return (
        <Container maxWidth="md" id="App">
            {pets.pets.length > 0 ? (
                <>
                    <HeaderPetList
                        petList={pets.pets}
                        setFilter={setFilterItems}
                        setSort={setSortMethod}
                        sort={sortMethod}
                    />
                    {
                        listHelper?.listSort( listHelper.listFilter( pets.pets, filterItems, 'species' ), sortMethod )
                            .map( ( pet ) => {
                                return <PetCard key={randomGeneratos.uniqueKey()} petInfo={pet} killPet={killPet}/>
                            } )
                    }
                    <Button
                        onClick={() => handleOpen()}
                        className="btn--add"
                        variant="contained">
                        <AddIcon/>
                    </Button>
                    <ModalAddPet open={open} setOpen={setOpen} addPet={addPet}/>
                </>
            ) : (
                <>
                    <h2>You dont have pet list</h2>
                    <ModalAddPet open={open} setOpen={setOpen} addPet={addPet}/>
                    <Button
                        onClick={() => handleOpen()}
                        variant="contained">
                        <h3>Add pet</h3> <AddIcon/>
                    </Button>
                </>
            )}
        </Container>
    )
}

export default App
