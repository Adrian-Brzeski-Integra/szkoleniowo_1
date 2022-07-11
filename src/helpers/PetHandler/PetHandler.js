export default {
    createPet: ( e, food ) => {
        const currentYear = new Date().getFullYear()
        const newPet = {}
        newPet.birthYear = currentYear - e.target.fAge.value
        newPet.name = e.target.fName.value
        newPet.species = e.target.fSpecies.value
        if ( e.target.fPhoto.value.length > 0 ) newPet.photo = e.target.fPhoto.value
        else newPet.photo = 'https://cdn-icons-png.flaticon.com/512/4322/4322991.png'
        if ( food.length > 0 ) newPet.favFoods = food
        return newPet
    },
    addFood: ( tempFood, setTempFood, food, setFood ) => {
        if ( tempFood.length > 0 ) {
            const cloneFood = [...food]
            cloneFood.push( tempFood )
            setFood( cloneFood )
            setTempFood( '' )
        }
    },
    removeFood: ( index, food, setFood ) => {
        const cloneFood = [...food]
        cloneFood.splice( index, 1 )
        setFood( cloneFood )
    }
}
