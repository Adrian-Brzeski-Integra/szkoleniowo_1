export default {
    listFilter: (list, filterArray, filterKey) => {
        return list.filter((listItem) => {
            let itemOk = false
            filterArray.forEach((item) => {
                if (item === listItem[filterKey]) {
                    itemOk = true
                    return false
                }
            })
            if (itemOk === true || filterArray.length === 0) return listItem
            else return false
        })
    },
    listSort: (petList, sortMethod) => {
        return petList.sort((a, b) => {
            if (sortMethod === 'age_up') return b.birthYear - a.birthYear
            else if (sortMethod === 'age_down') return a.birthYear - b.birthYear
            else if (sortMethod === 'name_up') return a.name.localeCompare(b.name)
            else return b.name.localeCompare(a.name)
        })
    }
}
