import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

import './styles.scss'
import { ReactComponent as Icon } from '../../../assets/SVG/doubleArrow.svg'

interface Props {
  defaultValue: string,
  options: Array<string>
}

export default function SelectPrimary(props: Props) {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <div className='select-primary'>
      <Select
        defaultValue={props.defaultValue}
        onChange={handleChange}
        suffixIcon={<Icon />}
        style={{width: '110px'}}
      >
        {
          props.options.map((opt) => (
            <Option key={opt} value={opt}>{opt}</Option>
          ))
        }
      </Select>
    </div>
  )
}
