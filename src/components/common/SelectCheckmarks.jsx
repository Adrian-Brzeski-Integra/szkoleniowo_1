import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import PropTypes from 'prop-types'
import {useEffect} from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 150
        }
    }
}

const SelectCheckmarks = ( {optionsList, name, multiple, returnValue} ) => {
    const [listItem, setListItem] = React.useState( [] )

    const handleChange = ( event ) => {
        const {
            target: {value}
        } = event
        setListItem(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split( ',' ) : value
        )
    }

    useEffect( () => {
        returnValue( listItem )
    }, [listItem] )

    return (
        <div>
            <FormControl sx={{m: 1, width: 150}}>
                <InputLabel>{name}</InputLabel>
                <Select
                    multiple={multiple}
                    value={listItem}
                    onChange={handleChange}
                    input={<OutlinedInput label={name}/>}
                    renderValue={( selected ) => `Aktywne ${listItem.length}`}
                    MenuProps={MenuProps}
                >
                    {optionsList.map( ( name ) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={listItem.indexOf( name ) > -1}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ) )}
                </Select>
            </FormControl>
        </div>
    )
}

SelectCheckmarks.propTypes = {
    optionsList: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    multiple: PropTypes.bool.isRequired,
    returnValue: PropTypes.func.isRequired
}

export default SelectCheckmarks
