import React, {useEffect, useState} from 'react'
import Container from '@mui/material/Container'

import json from './assets/pets-data.json'
import HeaderPetList from './components/HeaderPetList/HeaderPetList'

const App = () => {
    const [pets, setPets] = useState({pets: []})
    const [sortMethod, setSortMethod] = useState('age_up')
    const [filterItems, setFilterItems] = useState([])
    console.log(filterItems)
    console.log(sortMethod)
    useEffect(() => {
        fetch(json)
            .then((resp) => resp.json())
            .then(setPets.bind(this))
            .catch((error) => {
                console.log('There was an error!', error)
                setPets({
                    pets: [
                        {
                            name: 'Purrsloud',
                            species: 'Cat',
                            favFoods: ['wet food', 'dry food', '<strong>any</strong> food'],
                            birthYear: 2016,
                            photo:
                                'https://learnwebcode.github.io/json-example/images/cat-2.jpg'
                        },
                        {
                            name: 'Barksalot',
                            species: 'Dog',
                            birthYear: 2008,
                            photo:
                                'https://learnwebcode.github.io/json-example/images/dog-1.jpg'
                        },
                        {
                            name: 'Meowsalot',
                            species: 'Cat',
                            favFoods: ['tuna', 'catnip', 'celery'],
                            birthYear: 2012,
                            photo:
                                'https://learnwebcode.github.io/json-example/images/cat-1.jpg'
                        }
                    ]
                })
            })
    }, [])

    return (
        <Container fixed className="App">
            {pets ? (
                <HeaderPetList
                    petList={pets.pets}
                    setFilter={setFilterItems}
                    setSort={setSortMethod}
                    sort={sortMethod}
                />
            ) : (
                <span>You dont have pet list</span>
            )}
        </Container>
    )
}

export default App
