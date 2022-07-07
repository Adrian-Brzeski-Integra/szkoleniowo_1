const petListSort = (petList, sortMethod) => {
    return petList.sort((a, b) => {
        if (sortMethod === 'age_up') return b.birthYear - a.birthYear
        else if (sortMethod === 'age_down') return a.birthYear - b.birthYear
        else if (sortMethod === 'name_up') return a.name.localeCompare(b.name)
        else return b.name.localeCompare(a.name)
    })
}

export default petListSort
