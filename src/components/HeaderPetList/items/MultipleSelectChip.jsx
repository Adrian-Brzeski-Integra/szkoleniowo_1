import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

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

const MultipleSelectChip = ({ name, list, setFilter }) => {
  const [listItem, setListItem] = React.useState([])

  useEffect(() => {
    setFilter(listItem)
  }, [listItem])

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    setListItem(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-chip-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          label={name}
          id="demo-multiple-chip"
          multiple
          value={listItem}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={name} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >

          {
            list?.length > 0 ? list?.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            )) : <MenuItem value="empty">Empty</MenuItem>
          }
        </Select>
      </FormControl>
    </div>
  )
}

MultipleSelectChip.defaultProps = {
  list: []
}

MultipleSelectChip.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
  setFilter: PropTypes.func.isRequired
}

export default MultipleSelectChip
