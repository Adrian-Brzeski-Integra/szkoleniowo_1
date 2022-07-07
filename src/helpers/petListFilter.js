const petListFilter = (petList, filter) => {
    return petList.filter((pet) => {
        let petOk = false
        filter.forEach((item) => {
            if (item === pet.species) {
                petOk = true
                return false
            }
        })
        if (petOk === true || filter.length === 0) return pet
        else return false
    })
}

export default petListFilter
