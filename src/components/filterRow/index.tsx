import React from 'react'

import './styles.scss'
import { IOption } from '../../interfaces/inputInterfaces'
import Button from '../button/buttonPrimary/index'
import SelectPrimary from '../inputs/selectPrimary'

interface Props {
  selects: Array<{defaultValue: string, options: Array<IOption>}>,
  onChangeSelect: (value: string, field: string ) => void,
  onFilter: () => void
}

export default function FilterRow(props: Props) {
  return (
    <div className='filter-row'>
      <div className='filter-row__selects'>
        {
          props.selects.map((select) => (
            <SelectPrimary
              key={select.defaultValue}
              defaultValue={select.defaultValue}
              options={select.options}
              onChangeSelect={props.onChangeSelect}
            />
          ))
        }
      </div>

      <div className='filter-row__button'>
        <Button
          backgrond='blue'
          onClick={props.onFilter}
        >
          Применить
        </Button>
      </div>
    </div>
  )
}
