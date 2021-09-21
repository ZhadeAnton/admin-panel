import React from 'react'

import './styles.scss'
import { ReactComponent as Search } from '../../../assets/SVG/search.svg'

export default function InputSearch() {
  return (
    <div className='input-search'>
      <div className='input-search__icon'>
        <Search />
      </div>

      <input
        type="text"
        placeholder='Поиск...'
        className='input-search__input'
      />
    </div>
  )
}
