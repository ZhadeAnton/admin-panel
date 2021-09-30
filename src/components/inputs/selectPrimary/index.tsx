import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

import './styles.scss'
import { ReactComponent as Icon } from '../../../assets/SVG/doubleArrow.svg'
import { IOption } from '../../../interfaces/inputInterfaces';

interface Props {
  defaultValue: string,
  options: Array<IOption>,
  onChangeSelect: (value: string, field: string) => void
}

export default function SelectPrimary(props: Props) {
  function handleChange(value: string) {
    props.onChangeSelect(value, props.options[0].field)
  }

  return (
    <div className='select-primary'>
      <Select
        defaultValue={props.defaultValue}
        onChange={handleChange}
        suffixIcon={<Icon />}
      >
        {
          props.options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              { opt.title }
            </Option>
          ))
        }
      </Select>
    </div>
  )
}
