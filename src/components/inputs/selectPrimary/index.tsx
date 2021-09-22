import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

export default function SelectPrimary() {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <div className='select-primary'>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
        Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  )
}
