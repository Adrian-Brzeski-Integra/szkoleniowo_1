import React from 'react'
import Button from '@mui/material/Button'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import PropTypes from 'prop-types'

const SortBlock = ({setSort, sortKeys}) => {
    const handleBtn = (e, key) => {
        if (e?.target?.nodeName === 'BUTTON') {
            document.querySelectorAll('.arrow--active')?.forEach((activeArrow) => {
                if (activeArrow.parentElement !== e.target) {
                    activeArrow.classList.remove('arrow--active')
                    activeArrow.classList.remove('arrow--down')
                }
            })
            const childrenClassList = e.target.children[0].classList
            if (childrenClassList.contains('arrow--active')) {
                childrenClassList.toggle('arrow--down')
                if (childrenClassList.contains('arrow--down')) setSort(key + '_down')
                else setSort(key + '_up')
            } else {
                childrenClassList.add('arrow--active')
                setSort(key + '_up')
            }
        }
    }

    return (
        <div className="sortList__container">
            <h4>Sortowanie</h4>
            <div className="btn__box">
                {
                    sortKeys.map((sortKey) => {
                        return (
                            <Button
                                onClick={(e) => handleBtn(e, sortKey.key)}
                                variant="contained"
                                key={sortKey.key}
                            >
                                {sortKey.desc}
                                <ArrowUpwardIcon className="arrow"/>
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}

SortBlock.propTypes = {
    setSort: PropTypes.func.isRequired,
    sortKeys: PropTypes.array.isRequired
}

export default SortBlock
