import React from 'react'
import { Upload } from 'antd';

import './styles.scss'

export default function InputUpload() {
  return (
    <div className='input-upload'>
      <div className='input-upload__input'>
        <span>
          Выберите файл...
        </span>
      </div>

      <Upload className='input-upload__button'>
        Обзор
      </Upload>
    </div>
  )
}
